import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu'
import { buttonVariants } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <nav className='w-full flex justify-between p-4 fixed backdrop-blur-sm'>
      <div>
        <Image src='/logo.webp' height={50} width={50} alt='SaaS Lab' />
      </div>

      <NavigationMenu>
        <NavigationMenuList className='flex gap-6'>
          <NavigationMenuItem asChild>
            <NavigationMenuLink href='/features'>Features</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem asChild>
            <NavigationMenuLink href='/pricing'>Pricing</NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem asChild>
            <NavigationMenuLink href='/about'>Testimonials</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div>
        <Link href='/signin' className={buttonVariants({ variant: 'default' })}>Start building</Link>
      </div>
    </nav>

  )
}
