import { ReactNode } from 'react'
import { NavbarItem } from '@/src/interface/navbar'
import { Sheet, SheetContent, SheetTrigger } from '@/src/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/src/components/ui/navigation-menu'
import { buttonVariants } from '@/src/components/ui/button'

type Props = {
  button: ReactNode;
  items: NavbarItem[];
}

export function MobileNavbar({ button, items }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {button}
      </SheetTrigger>
      <SheetContent side='right'>
        <NavigationMenu className='mt-16'>
          <NavigationMenuList className='flex flex-col items-start gap-8'>
            {items.map((item, key) => (
              <NavigationMenuItem key={key} asChild>
                <NavigationMenuLink
                  href={item.href}
                  className={buttonVariants({ variant: 'link' })}
                >
                  {item.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
