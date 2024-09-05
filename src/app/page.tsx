import { Navbar } from '@/src/components/Navbar'
import { Hero } from '@/src/components/Hero'
import { Pricing } from '@/src/components/Pricing'
import { Faqs } from '@/src/components/Faqs'
import { Suspense } from 'react'
// import { WaitListButton } from '@/components/landing/Waitlist'
import { Cta } from '@/src/components/landing/CTA'
import { TestimonialsGrid } from '@/src/components/landing/testimonials'
import { Features, WithAndWithout } from '@/src/components/landing/Features'
import { DetailedFooter } from '@/src/components/footer'
import '@/src/lib/config/env'

export default function Home() {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <main className='w-full px-2'>
        <Hero />
        {/* <Problem /> */}
        <Features />
        <WithAndWithout />
        {/* <FeaturesAccordion /> */}
        <TestimonialsGrid />
        <Pricing />
        <Faqs />
        <Cta />
        {/* <WaitListButton /> */}
      </main>
      <DetailedFooter />
    </>
  )
}
