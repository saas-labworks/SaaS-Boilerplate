'use client'
import React, { ReactNode } from 'react'
import { Button, ButtonProps } from '../ui/button'
import { cn } from '../../lib/utils'
import { Loader2Icon } from 'lucide-react'

type Props = {
  children: ReactNode
  isLoading: boolean;
} & ButtonProps
// } & React.ComponentPropsWithoutRef<'button'>

export function LoaderButton({ className, children, isLoading, ...props }: Props) {
  return (
    <Button
      className={cn('w-full flex gap-2', className)}
      disabled={isLoading}
      aria-disabled={isLoading}
      type='submit'
      {...props}
    >
      {isLoading && <Loader2Icon className='animate-spin w-4 h-4' />}
      {children}
    </Button>
  )
}
