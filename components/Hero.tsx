import { Button } from './ui/button'

// https://shipfa.st/docs/components/hero
export function Hero () {
  return (
    <section className='w-full min-h-screen flex justify-center items-center'>
      <div className='max-w-md flex flex-col items-center'>
        <h1 className='text-5xl font-bold'>Hello there</h1>
        <p className='py-6 text-center'>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi. In deleniti eaque aut repudiandae et a id nisi.
        </p>

        <Button>Start Building</Button>
      </div>
    </section>
  )
}
