import { CreditCard, LineChart, Users } from 'lucide-react'

export const sideMenuContent = {
  items: [
    {
      icon: <LineChart className='h-4 w-4' />,
      text: 'Analytics',
      link: '/dashboard/analystics'
    },
    {
      icon: <Users className='h-4 w-4' />,
      text: 'Customers',
      link: '/dashboard/customers'
    },
    {
      icon: <CreditCard className='h-4 w-4' />,
      text: 'Transactions',
      link: '/dashboard/transactions'
    }
  ]
}
