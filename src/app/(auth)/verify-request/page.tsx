import { buttonVariants } from '@/src/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/src/components/ui/card'
import { globalConfig } from '@/global.config'
import Link from 'next/link'

export default function VerifyUserPage() {
  return (
    <main className='h-screen grid place-content-center'>
      <Card className='max-w-md p-3'>
        <CardHeader>
          <CardTitle className='text-2xl text-center'>Check your email</CardTitle>
        </CardHeader>
        <CardDescription className='text-center flex flex-col gap-4'>
          <p className='text-lg'>
            A sign in link has been sent to your email address.
          </p>
          <Link
            href='/'
            className={buttonVariants({
              variant: 'link',
              className: 'text-lg'
            })}
          >
            {globalConfig.app.host}
          </Link>
        </CardDescription>
      </Card>
    </main>
  )
}
