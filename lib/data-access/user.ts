import { eq } from 'drizzle-orm'
import { database, users } from '../db'
import { UpdateUser } from '../db/schema-types'

export async function getUser(userId: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.id, userId)
  })
  return user
}

export async function updateUser(userId: string, data: UpdateUser) {
  await database
    .update(users)
    .set(data)
    .where(eq(users.id, userId))
}
