import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'
import { ButtonCustomerPortal } from '@/src/components/payments/ButtonCustomerPortal'
import { AppLinks } from '@/src/content'

export default function PaymentSuccessPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center'>
        <CheckCircle className='w-16 h-16 text-green-500 mx-auto mb-4' />
        <h1 className='text-2xl font-bold text-gray-900 mb-2'>Payment Successful!</h1>
        <p className='text-gray-600 mb-6'>
          Thank you for your purchase. Your payment has been processed successfully.
        </p>
        <div className='space-y-4'>
          <Link
            href={AppLinks.Dashboard}
            className={buttonVariants({ variant: 'default', className: 'w-full' })}
          >
            Go to the Dashboard
          </Link>

          <ButtonCustomerPortal
            className={buttonVariants({ variant: 'outline', className: 'w-full' })}
          />
        </div>
      </div>
    </div>
  )
}
