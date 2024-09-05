'use client'
import { ReactNode, useState } from 'react'
import { Angry, Frown, Laugh, Meh, Smile } from 'lucide-react'
import {
  Dialog, DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '../ui/dialog'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { cn } from '@/src/lib/utils'

type Props = {
  children: ReactNode;
}

const faces = [
  { label: Angry, value: 1, icon: <Angry /> },
  { label: Frown, value: 2, icon: <Frown /> },
  { label: Meh, value: 3, icon: <Meh /> },
  { label: Smile, value: 4, icon: <Smile /> },
  { label: Laugh, value: 5, icon: <Laugh /> }
]

export function FeedBack({ children }: Props) {
  const [face, setFace] = useState<number>(0)

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-3xl text-center'>Leave feedback</DialogTitle>
          <DialogDescription className='text-center'>
            We'd love to hear what went well or how we can improve the product experience.
          </DialogDescription>
        </DialogHeader>
        <form className='flex flex-col gap-5'>
          <Textarea />
          <div className='flex justify-center gap-2'>
            {faces.map(item => (
              <Button
                key={item.value}
                type='button'
                variant='outline'
                onClick={() => setFace(item.value)}
                className={cn({
                  'text-yellow-500 hover:text-yellow-500': item.value === face
                })}
              >
                {item.icon}
              </Button>
            ))}
          </div>

          <Button type='submit'>
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
