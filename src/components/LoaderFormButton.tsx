'use client'
import { ReactNode } from 'react'
import { useFormStatus } from 'react-dom'
import { Loader2Icon } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '../lib/utils'

type Props = {
  children: ReactNode
  className?: string;
}

export function LoaderFormButton({ className, children }: Props) {
  const { pending } = useFormStatus()

  return (
    <Button
      className={cn('w-full flex gap-2', className)}
      disabled={pending}
      aria-disabled={pending}
      type='submit'
    >
      {pending && <Loader2Icon className='animate-spin w-4 h-4' />}
      {children}
    </Button>
  )
}
