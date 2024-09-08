import { eq } from 'drizzle-orm'
import { database, subscriptions } from '../db'

export async function createSubscription(subscription: {
  userId: string,
  stripeSubscriptionId: string,
  stripeCustomerId: string,
  stripePriceId: string,
  stripeCurrentPeriodStart: Date,
  stripeCurrentPeriodEnd: Date
}) {
  await database.insert(subscriptions).values(subscription)
}

export async function updateSubscription(params: {
  stripeSubscriptionId: string,
  stripePriceId: string,
  stripeCurrentPeriodEnd: Date
}) {
  await database
    .update(subscriptions)
    .set(params)
    .where(eq(subscriptions.stripeSubscriptionId, params.stripeSubscriptionId))
}

export async function getSubscription(userId: string) {
  const query = await database
    .select()
    .from(subscriptions)
    .where(eq(subscriptions.userId, userId))
  return query.length > 0 ? query[0] : null
}
