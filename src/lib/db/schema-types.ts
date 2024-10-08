import { authenticators, users, verificationTokens, sessions, accounts } from './schema'

/**
 * TYPES
 *
 * You can create and export types from your schema to use in your application.
 * This is useful when you need to know the shape of the data you are working with
 * in a component or function.
 */
export type User = typeof users.$inferSelect
export type UpdateUser = Pick<Partial<User>, 'name' | 'image' | 'customerId'>

export type Account = typeof accounts.$inferSelect
export type Session = typeof sessions.$inferSelect
export type VerificationToken = typeof verificationTokens.$inferSelect
export type Authenticator = typeof authenticators.$inferSelect
