import { VerificationTokenDocument } from '@/interface/models'
import mongoose from 'mongoose'

const VerificationTokenSchema = new mongoose.Schema<VerificationTokenDocument>({
  identifier: { type: String, required: true },
  token: { type: String, required: true },
  expires: { type: Date, required: true }
}, {
  timestamps: true
})

export const VerificationToken =
  mongoose.models.VerificationToken ??
  mongoose.model<VerificationTokenDocument>(
    'verification_tokens',
    VerificationTokenSchema
  )
