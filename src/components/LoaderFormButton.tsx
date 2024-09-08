'use client'
import { ReactNode } from 'react'
import { Button } from './ui/button'
import { useFormStatus } from 'react-dom'
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
      {pending && <div className='loader inline-block' />}
      {children}
    </Button>
  )
}
