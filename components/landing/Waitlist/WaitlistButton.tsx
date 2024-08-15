import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function WaitListButton() {
  return (
    <section className='max-w-lg flex flex-col gap-4 items-center m-auto'>
      <h3 className='text-xl text-center font-bold md:max-w-lg'>
        Your opportunity is just a click away!
        <br />
        Join the waitlist
      </h3>
      <form className='w-full flex flex-col gap-5 md:gap-2 md:flex-row'>
        <Input
          type='email'
          placeholder='tom@mail.com'
        />
        <Button type='submit'>
          Join Waitlist
        </Button>
      </form>
    </section>
  )
}
