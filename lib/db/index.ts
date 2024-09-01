import * as schema from './schema'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'
import { AppConstants } from '../config'

export * from './schema'
export * from './schema-types'

const pg = postgres(AppConstants.DatabaseUrl, { max: 1 })
const database = drizzle(pg, { schema })

export { database, pg }
