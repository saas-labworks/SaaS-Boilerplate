import { BookText, Headset, MessageCircleMore, Users } from 'lucide-react'

export const sideMenuContent = {
  header: {
    appImage: '/logo.webp',
    appName: 'SaaS Lab'
  },
  main: [
    {
      icon: <Users width={20} height={20} />,
      text: 'Dashboard',
      link: '/dashboard'
    }
  ],
  resources: [
    {
      icon: <BookText width={20} height={20} />,
      text: 'Documentation',
      link: '/docs'
    },
    {
      icon: <Headset width={20} height={20} />,
      text: 'Support',
      link: '/support'
    },
    {
      icon: <MessageCircleMore width={20} height={20} />,
      text: 'Feedback',
      link: '/feedback'
    }
  ]
}
