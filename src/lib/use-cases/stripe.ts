'use server'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { AppConstants } from '../config'
import { stripe } from '../stripe'
import { actionClient } from '@/src/lib/safe-action'
import { auth } from '../auth'
import { AppLinks } from '@/src/content'

const schema = z.object({
  priceId: z.string().startsWith('price_'),
  mode: z.enum(['subscription', 'payment'])
})

export const createStripeCheckout = actionClient
  .schema(schema)
  .action(async ({ parsedInput: { priceId, mode } }) => {
    const userSession = await auth()
    if (!userSession?.user) {
      return redirect(AppLinks.SignInPage)
    }

    const email = userSession.user.email!
    const userId = userSession.user.id!

    const session = await stripe.checkout.sessions.create({
      success_url: `${AppConstants.HostUrl}/success`,
      cancel_url: `${AppConstants.HostUrl}/cancel`,
      payment_method_types: ['card'],
      customer_email: email ?? undefined,
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1
        }
      ],
      metadata: { userId }
    })

    redirect(session.url!)
  })
