import { and, eq } from 'drizzle-orm'
import { database, Currency, currencies } from '../db'

type Pagination = {
  offset: number;
  limit: number;
}
type Filter = {}

type Extras = {
  pagination?: Pagination
  filters?: Filter[];
}

export async function getCurrencies(userId: string, extras?: Extras) {
  return await database.query.currencies.findMany({
    where: eq(currencies.userId, userId),
    ...(extras?.pagination ?? {})
  })
}

export async function getCurrencyById(currencyId: number, userId: string) {
  return await database.query.currencies.findFirst({
    where: and(
      eq(currencies.id, currencyId),
      eq(currencies.userId, userId)
    )
  })
}

export async function createCurrency(data: Omit<Currency, 'id'>) {
  await database.insert(currencies).values(data).execute()
}

export async function updateCurrency(currencyId: number, data: Omit<Currency, 'id'>) {
  await database
    .update(currencies)
    .set(data)
    .where(eq(currencies.id, currencyId))
    .execute()
}
