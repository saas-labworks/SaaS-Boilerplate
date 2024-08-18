import Link from 'next/link'
import { Menu } from 'lucide-react'
import { SheetContent, SheetTrigger, Sheet } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { SideMenuItem } from '@/interface/menu'

type Props = {
  items: SideMenuItem[];
}

export function SideMobileMenu({ items }: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='shrink-0 md:hidden'
        >
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='flex flex-col'>
        <nav className='grid gap-2 text-lg font-medium'>
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
            >
              {item.icon} {item.text}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
