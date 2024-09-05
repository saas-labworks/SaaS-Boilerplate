import { Button } from '@/src/components/ui/button'

export function Cta() {
  return (
    <section className='w-full min-h-screen flex flex-col items-center justify-center'>
      <h3 className='text-3xl text-center font-bold '>
        Ready to take off? Get our startup boilerplate
      </h3>
      <h5 className='text-lg mt-2'>
        Don't waste your time reinventing the wheel and just focus on what's important
      </h5>
      <form className='mt-7'>
        <Button type='submit' className='w-60'>
          Start building
        </Button>
      </form>
    </section>
  )
}
