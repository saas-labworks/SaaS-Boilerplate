import { auth } from '@/src/lib/auth'
import { /* getSubscription, */ getUserById } from '@/src/lib/data-access'
// import { BillingDetails } from './BillingDetails'
import { ProfileDetails } from './ProfileDetails'
import { redirect } from 'next/navigation'
import { AppLinks } from '@/src/content'

export default async function ProfileDashboardPage() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  console.log({ session })
  const user = await getUserById(session.user.id!)
  // const subscription = await getSubscription(user!.id)

  return (
    <main className='flex flex-col gap-8 p-4 lg:p-6'>
      {/* Profile */}
      <ProfileDetails user={user!} />

      {/* Billing Details */}
      {/* <BillingDetails user={user!} subscription={subscription!} /> */}
    </main>
  )
}
