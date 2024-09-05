import { Faqs } from '@/src/components/Faqs'
import { BasicLayout } from '@/src/components/layouts'
import { Pricing } from '@/src/components/Pricing'
import { auth } from '@/src/lib/auth'

export default async function PaymentPage() {
  const session = await auth()

  return (
    <BasicLayout
      title='Pricing'
    >
      <Pricing
        defaultEmail={session?.user?.email ?? ''}
      />
      <Faqs />
    </BasicLayout>
  )
}
