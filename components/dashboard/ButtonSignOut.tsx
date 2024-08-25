'use client'
// import { signOut } from '@/lib/auth'
import { signOut } from 'next-auth/react'

export function ButtonSignOut() {
  return (
    <button
      onClick={() => signOut({
        redirect: true, callbackUrl: '/signin'
      })}
    > Logout
    </button>
  )
}
