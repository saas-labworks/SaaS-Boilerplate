import { CircleCheck } from 'lucide-react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import { OnePaymentPlansDetails } from '@/interface/pricing'
import { createStripeCheckout } from '@/lib/use-cases'

interface Props extends OnePaymentPlansDetails {
  metadata?: {
    defaultEmail?: string;
  }
}

export function OnePaymentCard({
  price,
  features,
  metadata,
  featured = false
}: Props) {
  return (
    <Card className={cn('max-w-sm w-full grid gap-6 p-6 sm:p-8', { 'bg-primary text-primary-foreground': featured })}>
      <div className='flex items-end gap-2'>
        <span className='text-5xl font-bold'>${price.value}</span>
        <div className='flex flex-col text-xs text-muted-foreground'>
          <span className='text-muted-foreground font-bold'>/forever</span>
        </div>
      </div>

      <ul className='grid gap-2 text-muted-foreground'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center gap-2'>
            <CircleCheck className={cn('h-4 w-4', { 'text-green-500': feature.included })} />
            {feature.text}
          </li>
        ))}
      </ul>

      <div>
        <Button
          className='w-full'
          onClick={() => createStripeCheckout({
            priceId: price.price_id,
            mode: 'subscription'
          })}
        >
          Your forever
        </Button>
        <p className='text-sm mt-2 text-center'>One-time payment, then <span className='underline'>it's yours forever</span></p>
      </div>

    </Card>
  )
}
