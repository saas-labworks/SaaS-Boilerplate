/* eslint-disable no-param-reassign */
import { Document } from 'mongoose'

/**
 * A mongoose schema plugin which applies the following in the toJSON transform call:
 *  - removes __v, createdAt, updatedAt, and any path that has private: true
 *  - replaces _id with id
*/

const deleteAtPath = (obj: any, path: string[], index: number) => {
  if (index === path.length - 1) {
    delete obj[path[index]]
    return
  }
  deleteAtPath(obj[path[index]], path, index + 1)
}

const toJSON = <T extends Document>(schema: any) => {
  let transform: (doc: T, ret: any, options: any) => any | undefined

  console.log('=====================')
  console.log(schema)
  console.log('=====================')

  if (schema.options.toJSON && schema.options.toJSON.transform) {
    transform = schema.options.toJSON.transform
  }

  schema.options.toJSON = Object.assign(schema.options.toJSON ?? {}, {
    transform(doc: T, ret: any, options: any) {
      Object.keys(schema.paths).forEach((path) => {
        if (schema.paths[path].options && schema.paths[path].options.private) {
          deleteAtPath(ret, path.split('.'), 0)
        }
      })

      if (ret._id) {
        ret.id = ret._id.toString()
      }
      delete ret._id
      delete ret.__v

      if (transform) {
        return transform(doc, ret, options)
      }

      return ret
    }
  })
}

export default toJSON
