import { Currency } from '../lib/db'

export type CreateCurrencyDto = Omit<Currency, 'id'>
export type UpdateCurrencyDto = Partial<Omit<Currency, 'id'>>
