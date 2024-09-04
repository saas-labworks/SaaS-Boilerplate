import { render } from '@react-email/components'
import { sendEmail } from './send-email'
import { globalConfig } from '@/global.config'
import CompletePaymentEmail from '@/emails/complete-payment'

interface SendCompletePaymentProps {
  to: string;
}

export async function sendCompletePayment(props: SendCompletePaymentProps) {
  const emailHTML = await render(
    <CompletePaymentEmail />
  )

  return sendEmail({
    to: props.to,
    subject: `Welcome to ${globalConfig.app.name}`,
    html: emailHTML
  })
}
