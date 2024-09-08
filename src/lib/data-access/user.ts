import { eq } from 'drizzle-orm'
import { database, users } from '../db'

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

export async function updateUser(userId: string, data: {
  name?: string,
  image?: string,
}) {
  await database
    .update(users)
    .set(data)
    .where(eq(users.id, userId))
}

// export async function giveAccess(userId: string) {
//   await database
//     .update(users)
//     .set({ hasAccess: true })
//     .where(eq(users.id, userId))
// }

// export async function revokeAccess(userId: string) {
//   await database
//     .update(users)
//     .set({ hasAccess: false })
//     .where(eq(users.id, userId))
// }
