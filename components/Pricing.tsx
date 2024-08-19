'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { PaymentCard } from './payments/PaymentCard'
import { pricingDetails } from '@/content/pricing'
import { cn } from '@/lib/utils'

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id='pricing' className='w-full py-12 md:py-24 lg:py-32 dark:bg-muted bg-background'>
      <div className='container grid gap-8 px-4 md:px-6'>
        <div className='grid gap-4 text-center'>
          <h2 className='text-3xl font-bold tracking-tighter md:text-4xl'>Pricing</h2>
          <p className='max-w-[600px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
            Choose the plan that fits your needs. Switch between monthly and yearly billing.
          </p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <span className='text-sm font-medium'>Monthly</span>
          <Switch
            id='yearly-toggle'
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className='relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'
          >
            <span className='sr-only'>Toggle yearly/monthly</span>
            <span
              aria-hidden='true'
              className={cn(
                'pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out',
                { 'translate-x-5 bg-primary': isYearly },
                { 'translate-x-0 bg-muted-foreground/50': !isYearly }
              )}
            />
          </Switch>
          <span className='text-sm font-medium'>Yearly</span>
        </div>
        <div className='flex flex-wrap justify-center gap-6'>
          {pricingDetails.map((pricing, index) => (
            <PaymentCard
              key={index}
              title={pricing.title}
              description={pricing.description}
              price={pricing.price}
              isYearly={isYearly}
              features={pricing.features}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
