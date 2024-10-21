import {
  authenticators, users, verificationTokens, sessions,
  accounts, subscriptions, currencies, categories,
  moneyAccounts // budgets, expenses, incomes,
  // transferences
} from './schema'

/**
 * TYPES
 *
 * You can create and export types from your schema to use in your application.
 * This is useful when you need to know the shape of the data you are working with
 * in a component or function.
 */
export type User = typeof users.$inferSelect
export type Account = typeof accounts.$inferSelect
export type Session = typeof sessions.$inferSelect
export type VerificationToken = typeof verificationTokens.$inferSelect
export type Authenticator = typeof authenticators.$inferSelect
export type Subscription = typeof subscriptions.$inferSelect

export type Currency = typeof currencies.$inferSelect
export type Category = typeof categories.$inferInsert & {
  parentCategory?: Category;
}
// export type Budget = typeof budgets.$inferInsert
export type MoneyAccount = typeof moneyAccounts.$inferInsert & {
  currency?: Currency;
}
// export type Expense = typeof expenses.$inferInsert
// export type Income = typeof incomes.$inferInsert
// export type Transference = typeof transferences.$inferInsert
