'use server'
import { z } from 'zod'
import { actionClient, ActionError } from '../safe-action'
import { auth } from '../auth'
import { createCategory, getCategories } from '@/lib/data-access'

const createCategorySchema = z.object({
  name: z.string({ message: 'Category name is required' }),
  parentCategoryId: z.number({ message: 'Parent category Id is required' }).positive().optional()
})

export const createCategoryAction = actionClient
  .metadata({ actionName: 'createCategory' })
  .schema(createCategorySchema)
  .action(async ({ parsedInput }) => {
    const userSession = await auth()
    if (!userSession?.user) {
      throw new ActionError('User is not authenticated')
    }

    const userId = userSession.user.id!
    try {
      await createCategory({
        userId,
        name: parsedInput.name,
        parentCategoryId: parsedInput.parentCategoryId
      })
    } catch (error) {
      const errorMessage = (error as { message: string }).message
      throw new ActionError(errorMessage)
    }
  })

const getPaginatedCategoriesSchema = z.object({
  pageIndex: z.number().min(0).default(0),
  pageSize: z.number().min(1).default(10)
})

export const getPaginatedCategoriesAction = actionClient
  .metadata({ actionName: 'getPaginatedCategories' })
  .schema(getPaginatedCategoriesSchema)
  .action(async ({ parsedInput }) => {
    const userSession = await auth()
    if (!userSession?.user) {
      throw new ActionError('User is not authenticated')
    }

    const userId = userSession.user.id!
    try {
      const categories = await getCategories(userId, {
        pagination: {
          offset: parsedInput.pageIndex * parsedInput.pageSize,
          limit: parsedInput.pageSize
        }
      })

      return categories
    } catch (error) {
      const errorMessage = (error as { message: string }).message
      throw new ActionError(errorMessage)
    }
  })
