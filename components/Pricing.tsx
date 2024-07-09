/**
 * v0 by Vercel.
 * @see https://v0.dev/t/v6K7Shzsnkm
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
'use client'

import { useState } from 'react'
import { Switch } from '@/components/ui/switch'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CircleCheck } from 'lucide-react'

export function Pricing () {
  const [isYearly, setIsYearly] = useState(false)
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 dark:bg-muted bg-background'>
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
              className={`pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out ${
                isYearly ? 'translate-x-5 bg-primary' : 'translate-x-0 bg-muted-foreground/50'
              }`}
            />
          </Switch>
          <span className='text-sm font-medium'>Yearly</span>
        </div>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          <Card className='grid gap-6 p-6 sm:p-8'>
            <div className='grid gap-2'>
              <h3 className='text-2xl font-bold'>Starter</h3>
              <p className='text-muted-foreground'>Perfect for individuals and small teams.</p>
            </div>
            <div className='flex items-end gap-2'>
              {isYearly && (
                <span className='line-through text-lg'>$12</span>
              )}
              <span className='text-4xl font-bold'>${isYearly ? 9 : 12}</span>
              <span className='text-muted-foreground'>/{isYearly ? 'yr' : 'mo'}</span>
            </div>
            <ul className='grid gap-2 text-muted-foreground'>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                1 user
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                5 GB storage
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                Basic analytics
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-gray-500' />
                Custom Support
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-gray-500' />
                Custom Integrations
              </li>
            </ul>
            <Button variant='outline' className='w-full'>
              Get Started
            </Button>
          </Card>
          <Card className='grid gap-6 p-6 sm:p-8 bg-primary text-primary-foreground'>
            <div className='grid gap-2'>
              <h3 className='text-2xl font-bold'>Pro</h3>
              <p className='text-primary-foreground/80 dark:text-secondary-foreground/80'>
                For growing teams and businesses.
              </p>
            </div>
            <div className='flex items-end gap-2'>
              {isYearly && (
                <span className='line-through text-lg'>$39</span>
              )}
              <span className='text-4xl font-bold'>${isYearly ? 29 : 39}</span>
              <span className='text-primary-foreground/80 dark:text-secondary-foreground/80'>
                /{isYearly ? 'yr' : 'mo'}
              </span>
            </div>
            <ul className='grid gap-2 text-primary-foreground/80 dark:text-secondary-foreground/80'>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4-foreground text-green-500' />
                5 users
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4-foreground text-green-500' />
                50 GB storage
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4-foreground text-green-500' />
                Advanced analytics
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4-foreground text-green-500' />
                Custom reports
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4-foreground text-gray-500' />
                Custom Integrations
              </li>
            </ul>
            <Button variant='secondary' className='w-full'>Get Started</Button>
          </Card>
          <Card className='grid gap-6 p-6 sm:p-8'>
            <div className='grid gap-2'>
              <h3 className='text-2xl font-bold'>Enterprise</h3>
              <p className='text-muted-foreground'>For large teams and complex businesses.</p>
            </div>
            <div className='flex items-end gap-2'>
              {isYearly && (
                <span className='line-through text-lg'>$129</span>
              )}
              <span className='text-4xl font-bold'>${isYearly ? 99 : 129}</span>
              <span className='text-muted-foreground'>/{isYearly ? 'yr' : 'mo'}</span>
            </div>
            <ul className='grid gap-2 text-muted-foreground'>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                Unlimited users
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                1 TB storage
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                Advanced analytics
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                Dedicated support
              </li>
              <li className='flex items-center gap-2'>
                <CircleCheck className='h-4 w-4 text-green-500' />
                Custom integrations
              </li>
            </ul>
            <Button variant='outline' className='w-full'>
              Contact Sales
            </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
