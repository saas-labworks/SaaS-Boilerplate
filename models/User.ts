import mongoose from 'mongoose'
import { UserDocument } from '@/interface/models'
import toJSON from './plugins/toJSON'

const UserSchema = new mongoose.Schema<UserDocument>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  emailVerified: { type: Date },
  customerId: { type: String },
  hasAccess: { type: Boolean, default: false },
  priceId: { type: String },
  image: { type: String }
}, {
  timestamps: true
})

UserSchema.plugin(toJSON)

export const User =
  mongoose.models.User as mongoose.Model<UserDocument> ??
  mongoose.model<UserDocument>('User', UserSchema)
