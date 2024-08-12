import { UserDocument } from '@/interface/models'
import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Date },
  image: { type: String }
}, {
  timestamps: true
})

export const User =
  mongoose.models.User ??
  mongoose.model('users', UserSchema)
