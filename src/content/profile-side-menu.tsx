import { SideMenuItem } from '@/src/interface/menu'
import { CreditCard, LineChart } from 'lucide-react'

interface ProfileSideMenuContent {
  items: SideMenuItem[]
}

export const profileSideMenuContent: ProfileSideMenuContent = {
  items: [
    {
      icon: <LineChart className='h-4 w-4' />,
      text: 'Analytics',
      link: '/dashboard/profile/analystics'
    },
    {
      icon: <CreditCard className='h-4 w-4' />,
      text: 'Billings',
      link: '/dashboard/profile/billings'
    }
  ]
}
