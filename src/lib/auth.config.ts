import type { NextAuthConfig } from 'next-auth'
import Google from 'next-auth/providers/google'
import Nodemailer from 'next-auth/providers/nodemailer'
import { sendMagicLink } from './email'
import { AppConstants } from './config'
import { globalConfig } from '@/global.config'

export default {
  providers: [
    Google,
    Nodemailer({
      server: AppConstants.EmailServer,
      from: globalConfig.mail.from,
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
