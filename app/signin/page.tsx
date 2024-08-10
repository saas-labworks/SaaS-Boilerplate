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

export default function SingInPage() {
  const oAuthLoginAction = async (formData: FormData) => {
    'use server'
    await signIn('google', formData)
  }
  const magicLoginAction = async (formData: FormData) => {
    'use server'
    // const email = formData.get('email') as string
    // console.log(formData)
    await signIn()
  }

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
          <div className='grid gap-4'>
            <form action={magicLoginAction}>
              <div className='grid gap-2'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  required
                />
              </div>
              <Button type='submit' className='w-full'>
                Login with email
              </Button>
            </form>
            <form action={oAuthLoginAction}>
              <Button variant='outline' className='w-full'>
                Login with Google
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
