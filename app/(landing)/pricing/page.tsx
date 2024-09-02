import { Faqs } from '@/components/Faqs'
import { BasicLayout } from '@/components/layouts'
import { Pricing } from '@/components/Pricing'
import { auth } from '@/lib/auth'

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
