import { ReactNode } from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { SideDesktopMenu, SideMobileMenu } from '@/components/dashboard'
import { AppRoutes, profileSideMenuContent } from '@/content'
import { UserDropdown } from '@/components/UserDropdown'
import { auth } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { getUserById } from '@/lib/data-access'

type Props = {
  children: ReactNode
}

export default async function AdminDashboardPage({ children }: Props) {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppRoutes.auth.signIn)
  }

  const user = await getUserById(session.user.id!)

  if (!user?.hasAccess) {
    return redirect(AppRoutes.landing.pricing)
  }

  return (
    <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
      {/* Desktop Side Menu */}
      <SideDesktopMenu
        items={profileSideMenuContent.items}
      />
      <div className='flex flex-col'>
        <header className='flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6'>

          {/* Mobile Side Menu */}
          <SideMobileMenu
            items={profileSideMenuContent.items}
          />
          <div className='w-full flex-1'>
            <form>
              <div className='relative'>
                <Search className='absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground' />
                <Input
                  type='search'
                  placeholder='Search products...'
                  className='w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3'
                />
              </div>
            </form>
          </div>
          <UserDropdown />
        </header>
        <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
          {children}
        </main>
      </div>
    </div>
  )
}
