import { createTransport } from 'nodemailer'

export interface SendEmailProps {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: SendEmailProps) {
  const transport = createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: +(process.env.EMAIL_SERVER_PORT ?? '0'),
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    }
  })

  const result = await transport.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html
  })

  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(', ')}) could not be sent`)
  }
}
