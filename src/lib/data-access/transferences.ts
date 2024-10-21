import { eq } from 'drizzle-orm'
import { database, Transference, transferences } from '../db'

export async function getTransferences(userId: string) {
  const trans = await database.query.transferences.findMany({
    // with: { fromCate },
    where: eq(transferences.userId, userId)
  })

  return trans as Transference[]
}

export async function getTransferencesAccountById(transferenceId: number) {
  return await database.query.transferences.findFirst({
    where: eq(transferences.id, transferenceId)
  })
}

export async function createTransferenceAccount(data: Transference) {
  await database.insert(transferences).values(data).execute()
}

export async function updateTransferenceAccount(transferenceId: number, data: Transference) {
  await database
    .update(transferences)
    .set(data)
    .where(eq(transferences.id, transferenceId))
    .execute()
}
