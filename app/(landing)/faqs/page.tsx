import { faqs } from '@/components/Faqs'
import { BasicFooter } from '@/components/footer'
import { BasicHeader } from '@/components/header'
import { Separator } from '@/components/ui/separator'

export default function FaqsPage() {
  return (
    <>
      <BasicHeader />
      <main className='flex flex-col min-h-screen'>
        <header className='w-full h-72 flex flex-col items-center justify-center gap-3 bg-gray-100'>
          <h1 className='text-6xl font-bold'>Frequest Asked Questions</h1>
          <h3 className='text-xl'>Get answers to common questions about v0, the new generative UI tool by Vercel.</h3>
        </header>
        <main className='max-w-[75ch] mx-auto space-y-8 py-8'>
          {faqs.map((question, index) => (
            <section key={index}>
              <h2 className='text-2xl font-semibold mb-3'>{question.title}</h2>
              <p>{question.content}</p>
            </section>
          ))}
          <Separator />
          <section className='my-10 flex items-center justify-center'>
            <p className='text-lg text-muted-foreground'>Last updated: August 18, 2024</p>
          </section>
        </main>
        <BasicFooter />
      </main>
    </>
  )
}
