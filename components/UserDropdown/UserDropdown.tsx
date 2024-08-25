import Link from 'next/link'
import {
  CircleAlert, CircleDollarSign,
  CircleUser, CreditCard, LogOut,
  ScrollText, User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ButtonSignOut } from '../dashboard/ButtonSignOut'

const items = [
  {
    icon: <User strokeWidth={1.5} />,
    text: 'Profile',
    link: '/profile'
  },
  {
    separator: true,
    icon: <CircleAlert strokeWidth={1.5} />,
    text: 'FAQs',
    link: '/faqs'
  },
  {
    icon: <CreditCard strokeWidth={1.5} />,
    text: 'Billing',
    link: '/billing'
  },
  {
    icon: <CircleDollarSign strokeWidth={1.5} />,
    text: 'Pricing',
    link: '/pricing'
  },
  {
    icon: <ScrollText strokeWidth={1.5} />,
    text: 'Changelog',
    link: '/changelog'
  }
]

export function UserDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='rounded-full'>
          <CircleUser className='h-5 w-5' />
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[200px]'>
        <div className='!min-w-[200px]'>
          <p className='text-sm font-semibold'>Carlos Manuel González Peña</p>
          <p className='text-sm text-muted-foreground'>carlos@gmail.com</p>
        </div>
        <Separator className='my-2' />
        {items.map(item => (
          <div key={item.link}>
            {item.separator && (<Separator className='my-2' />)}
            <DropdownMenuItem className='py-2'>
              <Link href={item.link} className='flex gap-2'>
                {item.icon}
                {item.text}
              </Link>
            </DropdownMenuItem>
          </div>
        ))}
        <Separator className='my-2' />
        <DropdownMenuItem>
          <LogOut />
          <ButtonSignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
