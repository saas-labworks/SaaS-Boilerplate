import { render } from '@react-email/components'
import { sendEmail } from './send-email'
import CancelPaymentEmail from '@/emails/cancel-payment'

interface SendCancelledPaymentProps {
  to: string;
}

export async function sendCancelledPayment(props: SendCancelledPaymentProps) {
  const emailHTML = await render(<CancelPaymentEmail />)

  return sendEmail({
    to: props.to,
    subject: 'Payment Cancelled',
    html: emailHTML
  })
}
