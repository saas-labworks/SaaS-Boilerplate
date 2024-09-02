import { AppConstants } from '@/lib/config'
import { getUserByCustomerId, getUserByEmail, giveAccess, revokeAccess, updateUser } from '@/lib/data-access'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(AppConstants.StripeSecretKey)
const webhookSecret = AppConstants.StripeWebhookSecret

export async function POST(req: Request) {
  console.log('Icomming stripe request [Webhook]')

  const body = await req.text()
  const signature = headers().get('stripe-signature')!
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    const { message } = error as unknown as Error
    console.error(`Webhook signature verification failed. ${message}`)
    return NextResponse.json({ message }, { status: 400 })
  }

  const data = event.data
  const eventType = event.type
  console.log(`Incomming stripe event: ${eventType}`)

  try {
    switch (eventType) {
      case 'checkout.session.completed': {
        // First payment is successful and a subscription is created (if mode was set to "subscription" in ButtonCheckout)
        // ✅ Grant access to the product
        const session = await stripe.checkout.sessions.retrieve(
          (data.object as { id: string }).id,
          { expand: ['line_items'] }
        )

        const customerId = session.customer!.toString()
        const customer = (await stripe.customers.retrieve(customerId)) as Stripe.Customer
        const priceId = session.line_items?.data[0].price?.id!

        console.log(`Searchig the user ${customer.email} in the database.`)
        const user = await getUserByEmail(customer.email!)

        if (!user) {
          console.error(`User ${customer.email} not found in database`)
          throw new Error(`User ${customer.email} not found in database`)
        }

        // assign Customer Id
        await updateUser(user.id, { customerId })

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        await giveAccess(user.id, priceId)

        // TODO: Extra: >>>>> send email to dashboard <<<<
        break
      }

      case 'customer.subscription.deleted': {
        // ❌ Revoke access to the product
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        const subscription = await stripe.subscriptions.retrieve(
          (data.object as { id: string }).id
        )

        const customerId = subscription.customer!.toString()
        const user = await getUserByCustomerId(customerId)

        if (!user) {
          console.error('No user found')
          throw new Error('No user found')
        }

        // Revoke access to your product
        await revokeAccess(user.id)
        // TODO: Extra: >>>>> send email to dashboard <<<<
        break
      }

      default:
        // Unhandled event type
        console.warn(`Unhandled event type: ${eventType}`)
        break
    }
  } catch (error) {
    const { message } = error as unknown as Error
    console.error(
      `Stripe Error: ${message} | EVENT TYPE: ${eventType}`
    )
  }

  return NextResponse.json({}, { status: 200 })
}
