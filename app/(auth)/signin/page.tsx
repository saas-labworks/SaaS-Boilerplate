import { Button } from '@/components/ui/button'
import {
  Card, CardContent,
  CardDescription,
  CardHeader, CardTitle
} from '@/components/ui/card'
import { auth, signIn } from '@/lib/auth'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AuthError } from 'next-auth'
import { redirect, RedirectType } from 'next/navigation'
import { Separator } from '@/components/ui/separator'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

type Props = {
  searchParams: {
    error?: string
  }
}

export default async function SingInPage({ searchParams }: Props) {
  const session = await auth()
  if (!session) {
    console.log('User no logged. Continue in this page')
  }
  if (session?.user) {
    console.log('User logged. Redirect to dashboard')
    return redirect('/dashboard/profile', RedirectType.replace)
  }

  const siginInOAuth = async () => {
    'use server'
    try {
      await signIn('google')
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`$/signin?error=${error.type}`)
      }
      throw error
    }
  }

  const siginInMagicLink = async (formData: FormData) => {
    'use server'
    try {
      // await signIn('nodemailer', formData)
      await signIn('resend', formData)
    } catch (error) {
      if (error instanceof AuthError) {
        return redirect(`$/signin?error=${error.type}`)
      }
      throw error
    }
  }

  return (
    <div className='w-full h-screen grid place-content-center'>
      {searchParams.error && (
        <Alert variant='destructive' className='mb-4'>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {searchParams.error}
          </AlertDescription>
        </Alert>
      )}
      <Card className='mx-auto max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={siginInMagicLink}>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                name='email'
                type='email'
                placeholder='m@example.com'
              />
            </div>
            <Button type='submit' className='w-full'>
              Login with email
            </Button>
          </form>

          <div className='w-full grid grid-cols-[1fr_20px_1fr] items-center gap-4 my-4'>
            <Separator orientation='horizontal' />
            <strong className='text-muted-foreground'>OR</strong>
            <Separator orientation='horizontal' />
          </div>

          <form
            action={siginInOAuth}
          >
            <Button type='submit' variant='outline' className='w-full'>
              Login with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
