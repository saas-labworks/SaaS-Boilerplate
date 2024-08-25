import { ReactNode } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { UserDropdown } from '@/components/UserDropdown'

type Props = {
  children: ReactNode
}

export default async function LegalLayout({ children }: Props) {
  return (
    <>
      <header className='flex justify-between py-4 px-2 items-center'>
        <div className='flex gap-3 items-center'>
          <h1 className='text-2xl font-bold'>ICON</h1>
          <span className='text-xl text-muted-foreground'>/</span>
          <p>Terms of Service</p>
        </div>

        <div className='flex gap-4'>
          <Button>Start Building</Button>
          <Button variant='outline'>FeedBack</Button>
          <UserDropdown />
        </div>
      </header>
      <main className='flex flex-col min-h-screen'>
        <header className='w-full h-72 flex items-center justify-center bg-gray-100'>
          <h1 className='text-4xl font-bold'>Terms of Service</h1>
        </header>
        {children}
        <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
          <p className='text-xs text-muted-foreground'>© {new Date().getFullYear()} SaaS Boilerplate. All rights reserved.</p>
          <nav className='sm:ml-auto flex gap-4 sm:gap-6 text-xs'>
            <Link href='/faqs' className='hover:underline'>FAQs</Link>
            <Link href='/tos' className='hover:underline'>Terms</Link>
            <Link href='/privacy-policy' className='hover:underline'>Privacy</Link>
            <Link href='/ai-policy' className='hover:underline'>AI Policy</Link>
          </nav>
        </footer>
      </main>
    </>
  )
}
