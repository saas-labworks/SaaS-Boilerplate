import mongoose from 'mongoose'
import { UserDocument } from '@/interface/models'
import toJSON from './plugins/toJSON'

const UserSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Date },
  image: { type: String }
}, {
  timestamps: true
})

UserSchema.plugin(toJSON)

export const User =
  mongoose.models.User ??
  mongoose.model<UserDocument>(
    'User',
    UserSchema
  )
