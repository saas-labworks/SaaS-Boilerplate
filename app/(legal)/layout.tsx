import { ReactNode } from 'react'
import { BasicFooter } from '@/components/footer'
import { BasicHeader } from '@/components/header'

type Props = {
  children: ReactNode
}

export default async function LegalLayout({ children }: Props) {
  return (
    <>
      <BasicHeader />
      <main className='flex flex-col min-h-screen'>
        <header className='w-full h-72 flex items-center justify-center bg-gray-100'>
          <h1 className='text-4xl font-bold'>Terms of Service</h1>
        </header>
        {children}
        <BasicFooter />
      </main>
    </>
  )
}
