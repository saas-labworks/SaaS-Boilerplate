import { ReactNode } from 'react'
import { CUSTOMER_PORTAL_LINK } from '@/content'
import { auth } from '@/lib/auth'

type Props = {
  className?: string;
  children?: ReactNode
}

export async function ButtonCustomerPortal({ className, children }: Props) {
  const session = await auth()

  if (session?.user) {
    return (
      <a
        href={`${CUSTOMER_PORTAL_LINK}?prefilled_email=${session.user.email}`}
        target='_blank'
        rel='noreferrer'
        className={className}
      >
        {children ?? 'Billings'}
      </a>
    )
  }
  return (
    <a
      href={CUSTOMER_PORTAL_LINK}
      target='_blank'
      rel='noreferrer'
      className={className}
    >
      {children ?? 'Billings'}
    </a>
  )
}
