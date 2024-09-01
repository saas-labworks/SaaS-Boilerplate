import { createTransport } from 'nodemailer'
import { AppConstants } from '../config'
import { globalConfig } from '@/global.config'

export interface SendEmailProps {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailProps) {
  const transport = createTransport({
    url: AppConstants.EmailServer
  })

  const result = await transport.sendMail({
    from: globalConfig.mail.from,
    to,
    subject,
    html
  })

  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
  }
}
