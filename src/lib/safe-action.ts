import { DEFAULT_SERVER_ERROR_MESSAGE, createSafeActionClient } from 'next-safe-action'
import { zodAdapter } from 'next-safe-action/adapters/zod'
import { z } from 'zod'

export class ActionError extends Error { }

export const actionClient = createSafeActionClient({
  validationAdapter: zodAdapter(),
  handleServerError: (e) => {
    console.error('Action server error occurred: ', e.message)
    if (e instanceof Error) {
      return e.message
    }

    return DEFAULT_SERVER_ERROR_MESSAGE
  },
  defineMetadataSchema: () => z.object({
    actionName: z.string()
  })
}).use(async (data) => {
  const { bindArgsClientInputs, clientInput, metadata, next } = data
  const start = Date.now()
  const result = await next()
  const end = Date.now()
  const durationInMs = end - start
  const logObject: Record<string, any> = {
    durationInMs,
    clientInput,
    bindArgsClientInputs,
    metadata,
    result
  }

  console.log('LOGGING FRON MIDDLEWARE')
  console.dir(logObject, { depth: null })
  return result
})
