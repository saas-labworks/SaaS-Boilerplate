import Link from 'next/link'
import { AlertCircle } from 'lucide-react'
import { buttonVariants } from '@/src/components/ui/button'
import { AppLinks } from '@/src/content'
import { globalConfig } from '@/global.config'

export default function PaymentErrorPage() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4'>
      <div className='max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center'>
        <AlertCircle className='w-16 h-16 text-red-500 mx-auto mb-4' />
        <h1 className='text-2xl font-bold text-gray-900 mb-2'>Payment Failed</h1>
        <p className='text-gray-600 mb-6'>
          We're sorry, but there was an issue processing your payment. Please try again or contact our support team for assistance.
        </p>
        <div className='space-y-4'>
          <Link
            href={AppLinks.PricingPage}
            className={buttonVariants({ variant: 'outline', className: 'w-full' })}
          >
            Try Payment with other card
          </Link>

          <Link
            href={`mailto:${globalConfig.mail.supportEmail}`}
            className={buttonVariants({ variant: 'outline', className: 'w-full' })}
          >
            Contact Support
          </Link>

          <Link
            href={AppLinks.Home}
            className={buttonVariants({ className: 'w-full' })}
          >
            Return to the Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}
