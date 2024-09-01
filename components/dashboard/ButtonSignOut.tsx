'use client'
import { signOut } from 'next-auth/react'
import { ReactNode } from 'react'

type Props = {
  icon?: ReactNode
}

export function ButtonSignOut({ icon }: Props) {
  return (
    <button
      className='flex gap-2'
      onClick={() => signOut({
        redirect: true, callbackUrl: '/signin'
      })}
    >
      {icon}
      Logout
    </button>
  )
}
