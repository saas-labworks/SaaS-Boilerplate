import { AccountDocument } from '@/interface/models'
import mongoose from 'mongoose'

const AccountSchema = new mongoose.Schema<AccountDocument>({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  provider: { type: String, required: true },
  providerAccountId: { type: String, required: true },
  refresh_token: { type: String },
  access_token: { type: String },
  expires_at: { type: Number },
  token_type: { type: String },
  scope: { type: String },
  id_token: { type: String },
  session_state: { type: String }
}, {
  timestamps: true
})

export const Account =
  mongoose.models.Account ??
  mongoose.model<AccountDocument>(
    'Account',
    AccountSchema
  )
