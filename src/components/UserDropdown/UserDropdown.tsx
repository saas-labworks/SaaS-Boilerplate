import Link from 'next/link'
import Image from 'next/image'
import {
  CircleAlert, CircleDollarSign,
  CircleUser, CreditCard, LogOut,
  ScrollText, UserCircle
} from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/src/components/ui/separator'
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu'
import { ButtonSignOut } from '../dashboard/ButtonSignOut'
import { auth } from '@/src/lib/auth'
import { redirect } from 'next/navigation'
import { getUserById } from '@/src/lib/data-access'

const items = [
  {
    icon: <UserCircle strokeWidth={1.5} />,
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

export async function UserDropdown() {
  const session = await auth()
  if (!session?.user) {
    return redirect('/signin')
  }
  const user = (await getUserById(session.user.id!))!

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='rounded-full'>
          {user.image
            ? (<Image src={user.image} alt={user.name ?? ''} width={32} height={32} />)
            : (<CircleUser className='h-5 w-5' />)}
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='min-w-[280px]'>
        <div className='w-full p-2'>
          <p className='text-sm font-semibold'>{user.name}</p>
          <p className='text-sm text-muted-foreground'>{user.email}</p>
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
          <ButtonSignOut
            icon={<LogOut />}
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
