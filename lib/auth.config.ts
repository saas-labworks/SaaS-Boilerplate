import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'
import { sendMagicLink } from './email'

export default {
  providers: [
    Google,
    Nodemailer({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: +(process.env.EMAIL_SERVER_PORT ?? '0'),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD
        }
      },
      from: process.env.EMAIL_FROM,
      sendVerificationRequest: ({ identifier, url }) => {
        return sendMagicLink({
          to: identifier,
          magicLink: url
        })
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.sub
        }
      }
    }
  },
  pages: {
    signIn: '/signin',
    verifyRequest: '/verify-request'
    // error: '/error',
    // newUser: '/new-user',
    // signOut: '/signOut',
  }
} satisfies NextAuthConfig
