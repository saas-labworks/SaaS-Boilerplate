/* eslint-disable no-unused-vars */
import { z } from 'zod'

const envVars = z.object({
  AUTH_SECRET: z.string(),

  DATABASE_URL: z.string().startsWith('postgres://'),

  AUTH_GOOGLE_ID: z.string(),
  AUTH_GOOGLE_SECRET: z.string(),

  EMAIL_SERVER: z.string().startsWith('smtp://'),

  STRIPE_SECRET_KEY: z.string().startsWith('sk_'),
  STRIPE_WEBHOOK_SECRET: z.string().startsWith('whsec_')
})

envVars.parse(process.env)

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVars> { }
  }
}
