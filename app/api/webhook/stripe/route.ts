import { headers } from 'next/headers'
import Stripe from 'stripe'
import connectMongo from '@/lib/mongoose'
import { NextResponse } from 'next/server'
import { User } from '@/models'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  await connectMongo()

  const body = await req.text()
  const signature = headers().get('stripe-signature')!

  let event: Stripe.Event

  // verify Stripe event is legit
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    const { message } = error as unknown as Error
    console.error(`Webhook signature verification failed. ${message}`)
    return NextResponse.json({ message }, { status: 400 })
  }

  const data = event.data
  const eventType = event.type

  try {
    switch (eventType) {
      case 'checkout.session.completed': {
        // First payment is successful and a subscription is created (if mode was set to "subscription" in ButtonCheckout)
        // ✅ Grant access to the product
        let user: typeof User
        const session = await stripe.checkout.sessions.retrieve(
          data.object.id,
          { expand: ['line_items'] }
        )

        const customerId = session.customer
        const customer = await stripe.customers.retrieve(customerId)
        const priceId = session.line_items?.data[0].price?.id

        if (customer.email) {
          user = await User.create({
            email: customer.email,
            name: customer.name,
            customerId
          })

          await user.save()
        } else {
          console.error('No user found')
          throw new Error('No user found')
        }

        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        user.priceId = priceId
        user.hasAccess = true
        await user.save()

        // Extra: >>>>> send email to dashboard <<<<
        break
      }

      case 'customer.subscription.deleted': {
        // ❌ Revoke access to the product
        // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
        const subscription = await stripe.subscriptions.retrieve(
          data.object.id
        )

        const user = await User.findOne({
          customerId: subscription.customer
        })

        // Revoke access to your product
        user.hasAccess = false
        await user.save()
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
