import { CircleUser } from 'lucide-react'
import { Button } from '@/src/components/ui/button'
import { Separator } from '@/src/components/ui/separator'
import {
  DropdownMenu, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuTrigger
} from '@/src/components/ui/dropdown-menu'
import Link from 'next/link'
import { SideMenuItem } from '@/src/interface/menu'
import { ButtonSignOut } from './ButtonSignOut'

type Props = {
  items: SideMenuItem[];
}

export function UserDropdownMenu({ items }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon' className='rounded-full'>
          <CircleUser className='h-5 w-5' />
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.link}
          >
            <DropdownMenuItem>
              {/* {item.icon}  */}
              {item.text}
            </DropdownMenuItem>
          </Link>
        ))}
        <Separator />
        <DropdownMenuItem>
          <ButtonSignOut />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
