import { UserIcon, CreditCardIcon, BarChartIcon, MailIcon, ShieldIcon, CodeIcon } from 'lucide-react'

export function Features() {
  return (
    <section id='features' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>Features</h2>
        <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3'>
          <div className='flex flex-col items-center space-y-3 text-center'>
            <div className='p-3 rounded-full bg-primary/10'>
              <UserIcon className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>User Authentication</h3>
            <p className='text-muted-foreground'>Secure and customizable authentication system out of the box.</p>
          </div>
          <div className='flex flex-col items-center space-y-3 text-center'>
            <div className='p-3 rounded-full bg-primary/10'>
              <CreditCardIcon className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Payment Integration</h3>
            <p className='text-muted-foreground'>Seamless integration with popular payment gateways.</p>
          </div>
          <div className='flex flex-col items-center space-y-3 text-center'>
            <div className='p-3 rounded-full bg-primary/10'>
              <BarChartIcon className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Analytics Dashboard</h3>
            <p className='text-muted-foreground'>Insightful analytics to track your SaaS performance.</p>
          </div>
          <div className='flex flex-col items-center space-y-3 text-center'>
            <div className='p-3 rounded-full bg-primary/10'>
              <MailIcon className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Email System</h3>
            <p className='text-muted-foreground'>Robust email notification and newsletter system.</p>
          </div>
          <div className='flex flex-col items-center space-y-3 text-center'>
            <div className='p-3 rounded-full bg-primary/10'>
              <ShieldIcon className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>Role-based Access</h3>
            <p className='text-muted-foreground'>Flexible user roles and permissions management.</p>
          </div>
          <div className='flex flex-col items-center space-y-3 text-center'>
            <div className='p-3 rounded-full bg-primary/10'>
              <CodeIcon className='w-6 h-6 text-primary' />
            </div>
            <h3 className='text-xl font-bold'>API Ready</h3>
            <p className='text-muted-foreground'>RESTful API endpoints for easy third-party integrations.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
