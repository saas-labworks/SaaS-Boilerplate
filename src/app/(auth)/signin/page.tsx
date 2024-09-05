'use client'
import {
  Card, CardContent,
  CardDescription,
  CardHeader, CardTitle
} from '@/src/components/ui/card'
import { Separator } from '@/src/components/ui/separator'
import { siginInMagicLink, siginInOAuth } from './signin.actions'
import { SignInWithEmail, SignInWithOAuth } from '@/src/components/signin'

export default function SingInPage() {
  return (
    <div className='w-full h-screen grid place-content-center'>
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={siginInMagicLink}>
            <SignInWithEmail />
          </form>

          <div className='w-full grid grid-cols-[1fr_20px_1fr] items-center gap-4 my-4'>
            <Separator orientation='horizontal' />
            <strong className='text-muted-foreground'>OR</strong>
            <Separator orientation='horizontal' />
          </div>

          <form action={siginInOAuth}>
            <SignInWithOAuth />
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
