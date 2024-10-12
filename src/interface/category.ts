import { Category } from '../lib/db'

export type CreateCategoryDto = Omit<Category, 'id'>
export type UpdateCategoryDto = Partial<Omit<Category, 'id'>>
