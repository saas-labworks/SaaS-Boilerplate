import { SessionDocument } from '@/interface/models'
import mongoose from 'mongoose'

const SessionSchema = new mongoose.Schema<SessionDocument>({
  sessionToken: { type: String, required: true, unique: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  expires: { type: Date, required: true }
}, {
  timestamps: true
})

export const Session =
  mongoose.models.Session ??
  mongoose.model<SessionDocument>(
    'Session',
    SessionSchema
  )
