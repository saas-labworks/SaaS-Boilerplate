import { ReactNode } from 'react'
import { NavbarItem } from '@/interface/navbar'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu'

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
              <NavigationMenuItem
                key={key} asChild
              >
                <NavigationMenuLink href={item.href}>{item.name}</NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </SheetContent>
    </Sheet>
  )
}
