import Link from 'next/link'
import { Package2, Bell } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SideMenuItem } from '@/interface/menu'

type Props = {
  items: SideMenuItem[];
}

export function SideDesktopMenu({ items }: Props) {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span className=''>Acme Inc</span>
          </Link>
          <Button variant='outline' size='icon' className='ml-auto h-8 w-8'>
            <Bell className='h-4 w-4' />
            <span className='sr-only'>Toggle notifications</span>
          </Button>
        </div>
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
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
        </div>
      </div>
    </div>
  )
}
