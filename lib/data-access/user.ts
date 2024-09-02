import { eq } from 'drizzle-orm'
import { database, users } from '../db'
import { UpdateUser } from '../db/schema-types'

export async function getUserById(userId: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.id, userId)
  })
  return user
}

export async function getUserByEmail(email: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.email, email)
  })
  return user
}

export async function getUserByCustomerId(customerId: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.customerId, customerId)
  })
  return user
}

export async function updateUser(userId: string, data: UpdateUser) {
  await database
    .update(users)
    .set(data)
    .where(eq(users.id, userId))
}

export async function giveAccess(userId: string, planId: string) {
  await database
    .update(users)
    .set({ planId, hasAccess: true })
    .where(eq(users.id, userId))
}

export async function revokeAccess(userId: string) {
  await database
    .update(users)
    .set({ planId: null, hasAccess: false })
    .where(eq(users.id, userId))
}
