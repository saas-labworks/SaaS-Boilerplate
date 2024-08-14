import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { signIn } from '@/lib/auth'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AuthError } from 'next-auth'
import { redirect } from 'next/navigation'

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
          <form
            className='grid gap-4'
            action={async (formData) => {
              'use server'
              try {
                // await signIn('nodemailer', formData)
                await signIn('google')
              } catch (error) {
                // Signin can fail for a number of reasons, such as the user
                // not existing, or the user not having the correct role.
                // In some cases, you may want to redirect to a custom error
                if (error instanceof AuthError) {
                  return redirect(`$/signin?error=${error.type}`)
                }

                // Otherwise if a redirects happens NextJS can handle it
                // so you can just re-thrown the error and let NextJS handle it.
                // Docs:
                // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                throw error
              }
            }}
          >
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
            <Button type='submit' variant='outline' className='w-full'>
              Login with Google
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
