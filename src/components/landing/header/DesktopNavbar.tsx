import { buttonVariants } from '@/src/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/src/components/ui/navigation-menu'
import { NavbarItem } from '@/src/interface/navbar'

type Props = {
  items: NavbarItem[]
}

export function DesktopNavbar({ items }: Props) {
  return (
    <NavigationMenu>
      <NavigationMenuList className='flex gap-6'>
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
  )
}
