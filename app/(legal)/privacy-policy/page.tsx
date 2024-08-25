import Link from 'next/link'
import { MountainIcon } from 'lucide-react'

export default function PrivacyPolicy() {
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
        <h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>
        <div className='space-y-6'>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, use our services,
              or communicate with us. This may include your name, email address, and any other information you choose to
              provide.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to provide, maintain, and improve our services, to communicate with you,
              and to comply with legal obligations.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>3. Information Sharing and Disclosure</h2>
            <p>
              We do not share your personal information with third parties except as described in this policy. We may
              share information with service providers, business partners, or for legal reasons.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>4. Data Security</h2>
            <p>
              We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized
              access, disclosure, alteration, and destruction.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal information. You may also have the right to
              object to or restrict certain processing of your data.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>6. Cookies and Similar Technologies</h2>
            <p>
              We use cookies and similar technologies to collect information about your browsing activities and to
              distinguish you from other users of our services.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>7. Changes to This Policy</h2>
            <p>
              We may change this privacy policy from time to time. If we make changes, we will notify you by revising
              the date at the top of the policy.
            </p>
          </section>
          <section>
            <h2 className='text-2xl font-semibold mb-3'>8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy, please contact us at{' '}
              <a href='mailto:privacy@saasboilerplate.com' className='text-primary hover:underline'>
                privacy@saasboilerplate.com
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>© 2023 SaaS Boilerplate. All rights reserved.</p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link className='text-xs hover:underline underline-offset-4' href='/terms-and-conditions'>
            Terms and Conditions
          </Link>
        </nav>
      </footer>
    </div>
  )
}
