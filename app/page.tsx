import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'

export default function Home () {
  return (
    <main className='w-full'>
      <Navbar />
      <Hero />
      <Pricing />
      <Faqs />
      <Footer />
    </main>
  )
}
