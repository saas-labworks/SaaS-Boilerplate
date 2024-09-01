import MagicLinkEmail, { MagicLinkEmailProps } from '@/emails/magic-link'
import { render } from '@react-email/components'
import { sendEmail } from './send-email'
import { globalConfig } from '@/global.config'

interface SendMagicLinkProps extends MagicLinkEmailProps {
  to: string;
}

export async function sendMagicLink(props: SendMagicLinkProps) {
  const emailHTML = await render(
    <MagicLinkEmail magicLink={props.magicLink} />
  )

  return sendEmail({
    to: props.to,
    subject: `Sign in to ${globalConfig.app.name}`,
    html: emailHTML
  })
}
