import { globalConfig } from '@/global.config'
import Link from 'next/link'

export function BasicFooter() {
  return (
    <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
      <p className='text-xs text-muted-foreground'>© {new Date().getFullYear()} {globalConfig.app.name}. All rights reserved.</p>
      <nav className='sm:ml-auto flex gap-4 sm:gap-6 text-xs'>
        <Link href='/faqs' className='hover:underline'>FAQs</Link>
        <Link href='/tos' className='hover:underline'>Terms</Link>
        <Link href='/privacy-policy' className='hover:underline'>Privacy</Link>
        <Link href='/ai-policy' className='hover:underline'>AI Policy</Link>
      </nav>
    </footer>
  )
}
