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
    jwt: ({ token, user, account }) => {
      console.log({
        token,
        user,
        account
      })
      if (user) {
        token.id = user.id
      }
      return token
    }
    // session: ({ session, user }) => {
    //   console.log({
    //     session,
    //     user
    //   })
    //   return {
    //     ...session,
    //     user: {
    //       ...session.user,
    //       id: user.id
    //     }
    //   }
    // }
  },
  pages: {
    signIn: '/signin'
  }
} satisfies NextAuthConfig
