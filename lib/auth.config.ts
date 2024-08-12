import type { NextAuthConfig /* User */ } from 'next-auth'
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'

export default {
  providers: [
    Google,
    Nodemailer({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM
    })
  ],
  callbacks: {
    session: ({ session, user }) => {
      console.log({
        session,
        user
      })
      return {
        ...session,
        user: {
          ...session.user,
          id: user.id
        }
      }
    }
  },
  pages: {
    signIn: '/signin'
  }
} satisfies NextAuthConfig
