import { relations } from 'drizzle-orm'
import {
  boolean, timestamp,
  pgTable, text,
  primaryKey, integer,
  serial
} from 'drizzle-orm/pg-core'
import type { AdapterAccountType } from 'next-auth/adapters'

export const users = pgTable(
  'user',
  {
    id: text('id')
      .primaryKey()
      .$defaultFn(() => crypto.randomUUID()),
    name: text('name'),
    email: text('email').unique(),
    emailVerified: timestamp('emailVerified', { mode: 'date' }),
    image: text('image')
  }
)

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state')
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId]
    })
  })
)

export const sessions = pgTable(
  'session',
  {
    sessionToken: text('sessionToken').primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    expires: timestamp('expires', { mode: 'date' }).notNull()
  }
)

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull()
  },
  (verificationToken) => ({
    compositePk: primaryKey({
      columns: [verificationToken.identifier, verificationToken.token]
    })
  })
)

export const authenticators = pgTable(
  'authenticator',
  {
    credentialID: text('credentialID').notNull().unique(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    providerAccountId: text('providerAccountId').notNull(),
    credentialPublicKey: text('credentialPublicKey').notNull(),
    counter: integer('counter').notNull(),
    credentialDeviceType: text('credentialDeviceType').notNull(),
    credentialBackedUp: boolean('credentialBackedUp').notNull(),
    transports: text('transports')
  },
  (authenticator) => ({
    compositePK: primaryKey({
      columns: [authenticator.userId, authenticator.credentialID]
    })
  })
)

export const newsletter = pgTable(
  'newsletter',
  {
    id: serial('id').primaryKey(),
    email: text('email').notNull().unique(),
    createdAt: timestamp('createdAt', { mode: 'date' }).$defaultFn(() => new Date())
  }
)

export const subscriptions = pgTable(
  'subscription',
  {
    id: serial('id').primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' })
      .unique(),
    stripeSubscriptionId: text('stripeSubscriptionId').notNull(),
    stripeCustomerId: text('stripeCustomerId').notNull(),
    stripePriceId: text('stripePriceId').notNull(),
    stripeCurrentPeriodStart: timestamp('start', { mode: 'date' }).notNull(),
    stripeCurrentPeriodEnd: timestamp('end', { mode: 'date' }).notNull()
  }
)

export const currencies = pgTable(
  'currency',
  {
    id: serial('id').primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
    symbol: text('symbol').notNull(),
    code: text('code').notNull()
  }
)

export const categories = pgTable(
  'category',
  {
    id: serial('id').primaryKey(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    name: text('name').notNull(),
    parentCategoryId: integer('parentCategoryId')
  }
)

export const categoryRelations = relations(
  categories,
  ({ one }) => ({
    parentCategory: one(categories, {
      fields: [categories.parentCategoryId],
      references: [categories.id]
    })
  })
)

// export const budgets = pgTable(
//   'budget',
//   {
//     id: serial('id').primaryKey(),
//     userId: text('user_id')
//       .notNull()
//       .references(() => users.id, { onDelete: 'cascade' }),
//     currencyId: serial('currency_id')
//       .notNull()
//       .references(() => currencies.id),
//     amount: integer('amount').notNull(),
//     category: serial('category_id')
//       .notNull()
//       .references(() => categories.id, { onDelete: 'restrict' }),
//     startDate: timestamp('start_date', { mode: 'date' }).notNull(),
//     endDate: timestamp('end_date', { mode: 'date' }).notNull()
//   }
// )

export const moneyAccounts = pgTable(
  'money_account',
  {
    id: serial('id').primaryKey(),
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'restrict' }),
    name: text('name').notNull(),
    description: text('description'),
    currencyId: serial('currency_id')
      .notNull()
      .references(() => currencies.id),
    balance: integer('balance').notNull().default(0)
  }
)

// export const expenses = pgTable(
//   'expenses',
//   {
//     id: serial('id').primaryKey(),
//     userId: text('userId')
//       .notNull()
//       .references(() => users.id, { onDelete: 'restrict' }),
//     currencyId: serial('currency_id')
//       .notNull()
//       .references(() => currencies.id),
//     moneyAccountId: serial('money_account_id')
//       .notNull()
//       .references(() => moneyAccounts.id, { onDelete: 'restrict' }),
//     amount: integer('amount').notNull(),
//     category: serial('category_id')
//       .notNull()
//       .references(() => categories.id, { onDelete: 'restrict' }),
//     date: timestamp('date', { mode: 'date' }).notNull(),
//     description: text('description')
//   }
// )

// export const incomes = pgTable(
//   'income',
//   {
//     id: serial('id').primaryKey(),
//     userId: text('user_id')
//       .notNull()
//       .references(() => users.id, { onDelete: 'cascade' }),
//     currencyId: serial('currency_id')
//       .notNull()
//       .references(() => currencies.id),
//     amount: integer('amount').notNull(),
//     category: text('category'),
//     date: timestamp('date', { mode: 'date' }).notNull(),
//     description: text('description'),
//     createdAt: timestamp('created_at', { mode: 'date' }).$defaultFn(() => new Date())
//   }
// )

// export const transferences = pgTable(
//   'transference',
//   {
//     id: serial('id').primaryKey(),
//     userId: text('user_id')
//       .notNull()
//       .references(() => users.id, { onDelete: 'cascade' }),
//     fromCurrencyId: serial('from_currency_id')
//       .notNull()
//       .references(() => currencies.id),
//     toCurrencyId: serial('to_currency_id')
//       .notNull()
//       .references(() => currencies.id),
//     amount: integer('amount').notNull(),
//     date: timestamp('date', { mode: 'date' }).notNull(),
//     description: text('description'),
//     createdAt: timestamp('created_at', { mode: 'date' }).$defaultFn(() => new Date())
//   }
// )
