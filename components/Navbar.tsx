import Image from 'next/image'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { DesktopNavbar, MobileNavbar } from './landing/header'
import { navbarItems } from '@/content'

export function Navbar() {
  return (
    <nav className='w-full flex justify-between p-4 fixed backdrop-blur-sm'>

      <div className='md:hidden'>
        <MobileNavbar
          button={<Image src='/logo.webp' height={50} width={50} alt='SaaS Lab' />}
          items={navbarItems}
        />
        <Image
          src='/logo.webp'
          height={50} width={50}
          alt='SaaS Lab'
          className='hidden md:block'
        />
      </div>

      <div className='hidden md:flex w-full justify-end mr-6'>
        <DesktopNavbar items={navbarItems} />
      </div>

      <div>
        <Link href='/signin' className={buttonVariants({ variant: 'default' })}>Start building</Link>
      </div>
    </nav>
  )
}
