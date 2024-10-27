'use server'
import { z } from 'zod'
import { actionClient, ActionError } from '../safe-action'
import { auth } from '../auth'
import { createCurrency, getCurrencies } from '@/lib/data-access'

const createCurrencySchema = z.object({
  name: z.string({ message: 'Currency name is required' }),
  code: z.string({ message: 'Currency code is required' }),
  symbol: z.string({ message: 'Currency symbol is required' })
    .length(1, { message: 'Symbol must has length 1' })
})

export const createCurrencyAction = actionClient
  .metadata({ actionName: 'createCurrency' })
  .schema(createCurrencySchema)
  .action(async ({ parsedInput }) => {
    const userSession = await auth()
    if (!userSession?.user) {
      throw new ActionError('User is not authenticated')
    }

    const userId = userSession.user.id!
    try {
      await createCurrency({
        code: parsedInput.code,
        name: parsedInput.name,
        symbol: parsedInput.symbol,
        userId
      })
    } catch (error) {
      const errorMessage = (error as { message: string }).message
      throw new ActionError(errorMessage)
    }
  })

const getPaginatedCurrenciesSchema = z.object({
  pageIndex: z.number().min(0).default(0),
  pageSize: z.number().min(1).default(10)
})

export const getPaginatedCurrenciesAction = actionClient
  .metadata({ actionName: 'getPaginatedCurrencies' })
  .schema(getPaginatedCurrenciesSchema)
  .action(async ({ parsedInput }) => {
    const userSession = await auth()
    if (!userSession?.user) {
      throw new ActionError('User is not authenticated')
    }

    const userId = userSession.user.id!
    try {
      const currencies = await getCurrencies(userId, {
        pagination: {
          offset: parsedInput.pageIndex * parsedInput.pageSize,
          limit: parsedInput.pageSize
        }
      })

      return currencies
    } catch (error) {
      const errorMessage = (error as { message: string }).message
      throw new ActionError(errorMessage)
    }
  })
