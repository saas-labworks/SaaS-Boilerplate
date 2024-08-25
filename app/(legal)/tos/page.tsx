import Link from 'next/link'
import { MountainIcon } from 'lucide-react'

export default function TermsAndConditions() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='px-4 lg:px-6 h-14 flex items-center'>
        <Link className='flex items-center justify-center' href='/'>
          <MountainIcon className='h-6 w-6' />
          <span className='sr-only'>SaaS Boilerplate</span>
        </Link>
        <nav className='ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-sm font-medium hover:underline underline-offset-4' href='/'>
            Home
          </Link>
        </nav>
      </header>
      <main className='flex-1 container mx-auto px-4 py-8'>
        <h1 className='text-3xl font-bold mb-6'>Terms and Conditions</h1>
        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the SaaS Boilerplate service, you agree to be bound by these Terms and Conditions.
              If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>2. Use of Service</h2>
            <p>
              Our service is provided "as is". We do not warrant that the service will be uninterrupted or error-free.
              You agree to use the service at your own risk.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>3. User Accounts</h2>
            <p>
              You are responsible for safeguarding the password that you use to access the service and for any
              activities or actions under your password.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>4. Intellectual Property</h2>
            <p>
              The service and its original content, features, and functionality are and will remain the exclusive
              property of SaaS Boilerplate and its licensors.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>5. Termination</h2>
            <p>
              We may terminate or suspend access to our service immediately, without prior notice or liability, for any
              reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>6. Limitation of Liability</h2>
            <p>
              In no event shall SaaS Boilerplate, nor its directors, employees, partners, agents, suppliers, or
              affiliates, be liable for any indirect, incidental, special, consequential or punitive damages.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>7. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. What
              constitutes a material change will be determined at our sole discretion.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>8. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at{' '}
              <a href='mailto:support@saasboilerplate.com' className='text-primary hover:underline'>
                support@saasboilerplate.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>© 2023 SaaS Boilerplate. All rights reserved.</p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='/privacy-policy'>
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
