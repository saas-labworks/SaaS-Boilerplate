import { faqs } from '@/src/components/Faqs'
import { BasicLayout } from '@/src/components/layouts'
import { Separator } from '@/src/components/ui/separator'

export default function FaqsPage() {
  return (
    <BasicLayout
      title='Frequest Asked Questions'
      subtitle='Get answers to common questions about v0, the new generative UI tool by Vercel.'
    >
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
    </BasicLayout>
  )
}
