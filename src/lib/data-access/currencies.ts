import { eq } from 'drizzle-orm'
import { database, Currency, currencies } from '../db'

export async function getCurrencies(userId: string) {
  return await database.query.currencies.findMany({
    where: eq(currencies.userId, userId)
  })
}

export async function getCurrencyById(currencyId: number) {
  return await database.query.currencies.findFirst({
    where: eq(currencies.id, currencyId)
  })
}

export async function createCurrency(data: Omit<Currency, 'id'>) {
  await database.insert(currencies).values(data).execute()
}

export async function updateCurrency(currencyId: number, data: Currency) {
  await database
    .update(currencies)
    .set(data)
    .where(eq(currencies.id, currencyId))
    .execute()
}
