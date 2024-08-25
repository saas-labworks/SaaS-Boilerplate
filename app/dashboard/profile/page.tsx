import { ButtonCustomerPortal } from '@/components/payments/ButtonCustomerPortal'
import { buttonVariants } from '@/components/ui/button'

export default function AdminDashboardPage() {
  return (
    <main className='flex flex-col p-4 lg:p-6'>
      {/* TODO: Maybe show plans here! */}
      <div className='w-40'>
        <ButtonCustomerPortal
          className={buttonVariants({ variant: 'default', className: 'w-full' })}
        />
      </div>
    </main>
  )
}
