import { BasicLayout } from '@/components/layouts'
import { Separator } from '@/components/ui/separator'

export default function TermsAndConditionsPage() {
  return (
    <BasicLayout
      title='Terms of Use'
      subtitle='This Agreement governs your use of this service'
    >
      <main className='max-w-[75ch] mx-auto space-y-8 py-8'>
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
        <Separator />
        <section className='my-10 flex items-center justify-center'>
          <p className='text-lg text-muted-foreground'>Last updated: August 18, 2024</p>
        </section>
      </main>
    </BasicLayout>
  )
}
