import { SideMenuItem } from '@/src/interface/menu'
import { CircleDollarSign } from 'lucide-react'

interface ProfileSideMenuContent {
  items: SideMenuItem[]
}

export const dashboardSideMenuContent: ProfileSideMenuContent = {
  items: [
    {
      icon: <CircleDollarSign className='h-4 w-4' />,
      text: 'Incomes',
      link: '/dashboard/incomes'
    },
    {
      icon: <CircleDollarSign className='h-4 w-4' />,
      text: 'Expenses',
      link: '/dashboard/expenses'
    },
    {
      icon: <CircleDollarSign className='h-4 w-4' />,
      text: 'Transferences',
      link: '/dashboard/transferences'
    },
    {
      icon: <CircleDollarSign className='h-4 w-4' />,
      text: 'Categories',
      link: '/dashboard/categories'
    },
    {
      icon: <CircleDollarSign className='h-4 w-4' />,
      text: 'Accounts',
      link: '/dashboard/accounts'
    },
    {
      icon: <CircleDollarSign className='h-4 w-4' />,
      text: 'Currencies',
      link: '/dashboard/currencies'
    }
  ]
}
