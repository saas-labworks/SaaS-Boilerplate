import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'
import { Suspense } from 'react'
// import { WaitListButton } from '@/components/landing/Waitlist'
import { Cta } from '@/components/landing/CTA'
import { TestimonialsGrid } from '@/components/landing/testimonials'
import { Features, WithAndWithout } from '@/components/landing/Features'
import { DetailedFooter } from '@/components/footer'

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
