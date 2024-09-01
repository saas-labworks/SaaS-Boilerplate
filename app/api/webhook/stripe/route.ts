// import { headers } from 'next/headers'
// import Stripe from 'stripe'
// import connectMongo from '@/lib/mongoose'
// import { NextResponse } from 'next/server'
// import { User } from '@/models'

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)
// const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

// export async function POST(req: Request) {
//   console.log('Icomming stripe request [Webhook]')
//   await connectMongo()

//   const body = await req.text()
//   const signature = headers().get('stripe-signature')!
//   let event: Stripe.Event

//   try {
//     event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
//   } catch (error) {
//     const { message } = error as unknown as Error
//     console.error(`Webhook signature verification failed. ${message}`)
//     return NextResponse.json({ message }, { status: 400 })
//   }

//   const data = event.data
//   const eventType = event.type
//   console.log(`Incomming stripe event: ${eventType}`)

//   try {
//     switch (eventType) {
//       case 'checkout.session.completed': {
//         // First payment is successful and a subscription is created (if mode was set to "subscription" in ButtonCheckout)
//         // ✅ Grant access to the product
//         const session = await stripe.checkout.sessions.retrieve(
//           (data.object as { id: string }).id,
//           { expand: ['line_items'] }
//         )

//         const customerId = session.customer!.toString()
//         const customer = (await stripe.customers.retrieve(customerId)) as Stripe.Customer
//         const priceId = session.line_items?.data[0].price?.id!

//         console.log(`Searchig the user ${customer.email} in the database.`)
//         const user = await User.findOne({
//           customerId: customer.id
//         })

//         if (!user) {
//           console.error(`User ${customer.email} not found in database`)
//           throw new Error(`User ${customer.email} not found in database`)
//         }

//         // Update user data + Grant user access to your product. It's a boolean in the database, but could be a number of credits, etc...
//         user.priceId = priceId
//         user.hasAccess = true
//         await user.save()

//         // Extra: >>>>> send email to dashboard <<<<
//         break
//       }

//       case 'customer.subscription.deleted': {
//         // ❌ Revoke access to the product
//         // The customer might have changed the plan (higher or lower plan, cancel soon etc...)
//         const subscription = await stripe.subscriptions.retrieve(
//           (data.object as { id: string }).id
//         )

//         const user = await User.findOne({
//           customerId: subscription.customer
//         })

//         if (!user) {
//           console.error('No user found')
//           throw new Error('No user found')
//         }

//         // Revoke access to your product
//         user.hasAccess = false
//         await user.save()
//         break
//       }

//       default:
//         // Unhandled event type
//         console.warn(`Unhandled event type: ${eventType}`)
//         break
//     }
//   } catch (error) {
//     const { message } = error as unknown as Error
//     console.error(
//       `Stripe Error: ${message} | EVENT TYPE: ${eventType}`
//     )
//   }

//   return NextResponse.json({}, { status: 200 })
// }
