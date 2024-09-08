import Stripe from 'stripe'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { AppConstants } from '@/src/lib/config'
import { getUserById, giveAccess } from '@/src/lib/data-access'
import { createSubscription, updateSubscription } from '@/src/lib/data-access/subscription'
import { sendCompletePayment } from '@/src/lib/email'
import { stripe } from '@/src/lib/stripe'
import * as fs from 'fs'

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get('stripe-signature')!
  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, AppConstants.StripeWebhookSecret)
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
        const session = await stripe.checkout.sessions.retrieve(
          (data.object as Stripe.Checkout.Session).id,
          { expand: ['line_items'] }
        )

        fs.writeFileSync('session-details.json', JSON.stringify(session, null, 2))

        const userId = session.metadata!.userId
        const customerId = session.customer!.toString()
        const priceId = session.line_items!.data[0].price!.id

        if (session.mode === 'payment') {
          // TODO: prices unique payment
        }

        if (session.mode === 'subscription') {
          const subscription = await stripe.subscriptions.retrieve(
            session.subscription!.toString()
          )

          await createSubscription({
            userId,
            stripeSubscriptionId: subscription.id,
            stripeCustomerId: customerId,
            stripePriceId: priceId,
            stripeCurrentPeriodStart: new Date(subscription.current_period_start * 1000),
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000)
          })
        }

        const user = await getUserById(session.metadata!.userId)
        // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
        await giveAccess(user!.id)

        // Extra: >>>>> send email to dashboard <<<<
        await sendCompletePayment({ to: user!.email! })

        // subscription.customer // => customerId
        // subscription.id // => subscriptionId
        // subscription.current_period_start // => start of the current period
        // subscription.current_period_end // => end of the current period
        // subscription.items // => list of items in the subscription

        // subscription.plan.id // => priceId
        // subscription.plan.amount_decimal // => price
        // subscription.plan.interval // => interval (month, year, week, day)
        // subscription.plan.trial_period_days // => trial period in days

        // subscription.trial_start // => trial start date
        // subscription.trial_end // => trial end date

        break
      }

      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = await stripe.subscriptions.retrieve(
          (data.object as Stripe.Checkout.Session).id
        )

        await updateSubscription({
          stripePriceId: subscription.items.data[0].price!.id,
          stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
          stripeSubscriptionId: subscription.id
        })
        break
      }

      // case 'customer.subscription.deleted': {
      //   // ❌ Revoke access to the product
      //   // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
      //   const subscription = await stripe.subscriptions.retrieve(
      //     (data.object as Stripe.Checkout.Session).id
      //   )

      //   const user = await getUserById(subscription.metadata!.userId)
      //   if (!user) {
      //     console.error('No user found')
      //     throw new Error('No user found')
      //   }

      //   // Revoke access to your product
      //   await revokeAccess(user.id)

      //   //  Extra: >>>>> send email to dashboard <<<<
      //   await sendCancelledPayment({ to: user.email! })
      //   break
      // }

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
