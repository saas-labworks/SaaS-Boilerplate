import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'

export function SignInWithOAuth() {
  const { pending } = useFormStatus()

  return (
    <Button
      type='submit'
      variant='outline'
      className='w-full flex gap-2'
      disabled={pending}
    >
      {pending && <div className='loader inline-block' />}
      <span>Login with Gmail</span>
    </Button>
  )
}
