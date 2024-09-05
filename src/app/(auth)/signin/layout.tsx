import { ReactNode } from 'react'
import { redirect, RedirectType } from 'next/navigation'
import { Alert, AlertDescription, AlertTitle } from '@/src/components/ui/alert'
import { auth } from '@/src/lib/auth'

type Props = {
  children: ReactNode;
  searchParams: {
    error?: string
  }
}

export default async function SignInLayout({ searchParams, children }: Props) {
  const session = await auth()
  if (session?.user) {
    console.log('User logged. Redirect to dashboard')
    return redirect('/dashboard/profile', RedirectType.replace)
  }

  return (
    <div className='w-full h-screen grid place-content-center'>
      {searchParams?.error && (
        <Alert variant='destructive' className='mb-4'>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            {searchParams.error}
          </AlertDescription>
        </Alert>
      )}
      {children}
    </div>
  )
}
