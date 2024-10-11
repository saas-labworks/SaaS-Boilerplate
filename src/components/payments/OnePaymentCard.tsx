import { CircleCheck } from 'lucide-react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '@/src/lib/utils'
import { OnePaymentPlansDetails } from '@/src/interface/pricing'
import { createStripeCheckout } from '@/src/lib/use-cases'

interface Props extends OnePaymentPlansDetails {
  metadata?: {
    defaultEmail?: string;
  }
}

export function OnePaymentCard({
  title, description,
  price,
  features,
  metadata,
  featured = false
}: Props) {
  return (
    <Card className={cn('max-w-sm w-full grid gap-6 p-6 sm:p-8', { 'bg-primary text-primary-foreground': featured })}>
      <div className='grid gap-2'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-muted-foreground'>{description}</p>
      </div>
      <div className='flex items-end gap-2'>
        <span className='text-5xl font-bold'>${price.value}</span>
        <div className='flex flex-col text-xs text-muted-foreground'>
          <span className='text-muted-foreground font-bold'>/forever</span>
        </div>
      </div>

      <Button
        className='w-full'
        onClick={() => createStripeCheckout({
          priceId: price.price_id,
          mode: 'subscription'
        })}
      >
        Your forever
      </Button>

      <ul className='grid gap-2 text-muted-foreground'>
        {features.map((feature, index) => (
          <li key={index} className='flex items-center gap-2'>
            <CircleCheck className={cn('h-4 w-4', { 'text-green-500': feature.included })} />
            {feature.text}
          </li>
        ))}
      </ul>
    </Card>
  )
}
