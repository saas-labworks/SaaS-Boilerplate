import { ButtonCustomerPortal } from '@/components/payments/ButtonCustomerPortal'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { subscriptionPlansDetails } from '@/content'
import { Subscription, User } from '@/lib/db'

type Props = {
  user: User;
  subscription: Subscription;
}

export async function BillingDetails({ user, subscription }: Props) {
  const subsData = subscriptionPlansDetails.find(p => [
    p.price.monthly.price_id,
    p.price.yearly.price_id
  ].includes(subscription!.stripePriceId))

  const { stripeCurrentPeriodStart: start, stripeCurrentPeriodEnd: end } = subscription!
  const today = new Date()
  const totalDays = (end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
  const spendDays = Math.ceil((today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24))
  const leftDays = Math.ceil((end.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))
  const progress = Math.ceil(spendDays * 100 / totalDays)

  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl'>
          Plan Summary {' '}
          <Badge variant='secondary' className='scale-105'>Pro</Badge>
        </CardTitle>
      </CardHeader>

      <CardContent className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        <div>
          <p>
            <strong className='text-lg'>{leftDays}</strong>
            {' '}days left
          </p>
          <Progress value={progress} />
        </div>
        <div className='flex justify-between'>
          <div>
            <p className='text-sm'>Price/Month</p>
            <p className='font-bold text-lg'>${subsData?.price.monthly.value}</p>
          </div>
          <div>
            <p className='text-sm'>Renewal Date</p>
            {/* <p className='font-bold text-lg'>Sep 28, 2024</p> */}
            <p className='font-bold text-lg'>{end.toDateString()}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex justify-between p-4 bg-secondary'>
        <p className='hidden md:inline-block'>Manage your subscription on Stripe.</p>
        <ButtonCustomerPortal
          className={buttonVariants({ variant: 'default' })}
        >
          <span>Open customer portal</span>
        </ButtonCustomerPortal>
      </CardFooter>
    </Card>
  )
}
