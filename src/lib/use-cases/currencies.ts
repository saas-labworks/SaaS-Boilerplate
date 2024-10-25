'use server'
import { z } from 'zod'
import { actionClient, ActionError } from '../safe-action'
import { auth } from '../auth'
import { createCurrency } from '@/lib/data-access'

const schema = z.object({
  name: z.string({ message: 'Currency name is required' }),
  code: z.string({ message: 'Currency code is required' }),
  symbol: z.string({ message: 'Currency symbol is required' })
    .length(1, { message: 'Symbol must has length 1' })
})

export const createCurrencyAction = actionClient
  .metadata({ actionName: 'createCurrency' })
  .schema(schema)
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
