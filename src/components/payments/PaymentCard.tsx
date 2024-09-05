import { CircleCheck } from 'lucide-react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'
import { cn } from '@/src/lib/utils'
import { PaymentDetails } from '@/src/interface/pricing'

interface Props extends PaymentDetails {
  isYearly: boolean,
  metadata?: {
    defaultEmail?: string;
  }
}

export function PaymentCard({
  title, description,
  isYearly, price,
  features,
  metadata,
  featured = false
}: Props) {
  const plan = isYearly ? price.yearly : price.monthly
  const saved = 12 * (price.monthly.value - price.yearly.value)
  const percent = Math.round((saved / (price.monthly.value * 12)) * 100)

  return (
    <Card className={cn('grid gap-6 p-6 sm:p-8', { 'bg-primary text-primary-foreground': featured })}>
      <div className='grid gap-2'>
        <h3 className='text-2xl font-bold'>{title}</h3>
        <p className='text-muted-foreground'>{description}</p>
      </div>
      <div className='flex items-end gap-2'>
        {isYearly && (
          <span className='line-through text-lg'>${price.monthly.value}</span>
        )}
        <span className='text-5xl font-bold'>${plan.value}</span>
        <div className='flex flex-col text-xs text-muted-foreground'>
          {isYearly && (
            <>
              <span>save {percent}%</span>
              <span>billing yearly ${plan.value * 12}</span>
            </>
          )}
          <span className='text-muted-foreground font-bold'>/month</span>
        </div>
      </div>
      <Button className='w-full'>
        <a
          target='_blank'
          rel='noreferrer'
          href={plan.buy_url + '?prefilled_email=' + metadata?.defaultEmail}
        >
          Get Started
        </a>
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
