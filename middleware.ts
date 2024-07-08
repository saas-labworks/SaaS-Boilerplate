import NextAuth from 'next-auth'
import authConfig from './lib/auth.config'
import { Redis } from '@upstash/redis'
import { Ratelimit } from '@upstash/ratelimit'
import { NextRequest, NextResponse } from 'next/server'

// https://upstash.com/docs/oss/sdks/ts/ratelimit/overview
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN
})

const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.slidingWindow(5, '60 s')
})

const { auth } = NextAuth(authConfig)
export default auth(async function middleware (request: NextRequest) {
  // const ip = request.ip ?? '127.0.0.1'
  // const { success } = await ratelimit.limit(ip)

  // return success
  //   ? NextResponse.next()
  //   : NextResponse.redirect(
  //     new URL('/blocked', request.url),
  //     { status: 429 }
  //   )

  return NextResponse.next()
})

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ]
}
