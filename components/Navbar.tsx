import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from './ui/navigation-menu'
import { Button } from './ui/button'
import Image from 'next/image'

export function Navbar () {
  return (
    <nav className='w-full flex justify-between p-4'>
      <div>
        <Image src='/logo.webp' height={50} width={50} alt='SaaS Lab' />
      </div>

      <NavigationMenu>
        <NavigationMenuList className='flex gap-6'>
          <NavigationMenuItem>
            <Link href='/'>
              <NavigationMenuLink>Features</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='/about'>
              <NavigationMenuLink>Pricing</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href='/about'>
              <NavigationMenuLink>Testimonials</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div>
        <Button>Start building</Button>
      </div>
    </nav>

  )
}
