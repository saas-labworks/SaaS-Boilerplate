import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

export function SignInWithEmail() {
  const { pending } = useFormStatus()

  return (
    <>
      <div className='grid gap-2'>
        <Label htmlFor='email'>Email</Label>
        <Input
          id='email'
          name='email'
          type='email'
          placeholder='m@example.com'
        />
      </div>
      <Button
        type='submit'
        className='w-full flex gap-2'
        disabled={pending}
      >
        {pending && <div className='loader inline-block' />}
        <span>Login with Email</span>
      </Button>
    </>
  )
}
