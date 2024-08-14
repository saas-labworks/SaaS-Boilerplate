import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Suspense } from 'react'

export default function Home() {
  return (
    <>
      <Suspense>
        <Navbar />
      </Suspense>
      <main className='w-full'>
        <Hero />
        {/* <Problem /> */}
        {/* <FeaturesAccordion /> */}
        <Pricing />
        <Faqs />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  )
}
