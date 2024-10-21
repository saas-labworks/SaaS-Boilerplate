'use server'

import { signIn } from '@/lib/auth'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

export async function siginInOAuth() {
  try {
    await signIn('google')
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`$/signin?error=${error.type}`)
    }
    throw error
  }
}

export async function siginInMagicLink(formData: FormData) {
  try {
    await signIn('nodemailer', formData)
  } catch (error) {
    if (error instanceof AuthError) {
      return redirect(`$/signin?error=${error.type}`)
    }
    throw error
  }
}
