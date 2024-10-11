import { faqs } from '../content/faq'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from './ui/accordion'

export async function Faqs() {
  return (
    <section className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 my-10'>
      <div>
        <h3 className='text-3xl font-bold'>Frequently Asked Questions</h3>
        <p className='text-sm mt-3 flex gap-1'>
          <span>Have another question? Contact me on</span>
          <a href='https://x.com/cmglezpdev' target='_blank' className='font-bold text-accent-foreground underline' rel='noreferrer'>Twitter</a>
          <span>or by</span>
          <a href='mailto:cmglezpdev@gmail.com' className='font-bold text-accent-foreground underline'>email</a>
        </p>
      </div>
      <Accordion type='single' collapsible className='mt-6 lg:mt-0'>
        {
          faqs.map((faq, i) => (
            <AccordionItem key={i} value={`question-${i}`}>
              <AccordionTrigger>{faq.title}</AccordionTrigger>
              <AccordionContent>{faq.content}</AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </section>
  )
}
