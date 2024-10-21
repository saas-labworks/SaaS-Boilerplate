import { eq } from 'drizzle-orm'
import { database, MoneyAccount, moneyAccounts } from '../db'

export async function getMoneyAccounts(userId: string) {
  const accots = await database.query.moneyAccounts.findMany({
    // with: { category: true },
    where: eq(moneyAccounts.userId, userId)
  })

  return accots as MoneyAccount[]
}

export async function getMoneyAccountById(moneyAccountId: number) {
  return await database.query.moneyAccounts.findFirst({
    where: eq(moneyAccounts.id, moneyAccountId)
  })
}

export async function createMoneyAccount(data: MoneyAccount) {
  await database.insert(moneyAccounts).values(data).execute()
}

export async function updateMoneyAccount(moneyAccountId: number, data: MoneyAccount) {
  await database
    .update(moneyAccounts)
    .set(data)
    .where(eq(moneyAccounts.id, moneyAccountId))
    .execute()
}
