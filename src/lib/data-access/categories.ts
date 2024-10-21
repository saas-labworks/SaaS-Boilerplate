import { eq } from 'drizzle-orm'
import { database, Category, categories } from '../db'

export async function getCategories(userId: string, includes: string[] = []) {
  const categs = await database.query.categories.findMany({
    with: { parentCategory: true },
    where: eq(categories.userId, userId)
  })

  return categs as Category[]
}

export async function getCategoryById(categoryId: number) {
  return await database.query.categories.findFirst({
    where: eq(categories.id, categoryId)
  })
}

export async function createCategory(data: Category) {
  await database.insert(categories).values(data).execute()
}

export async function updateCategory(categoryId: number, data: Category) {
  await database
    .update(categories)
    .set(data)
    .where(eq(categories.id, categoryId))
    .execute()
}
