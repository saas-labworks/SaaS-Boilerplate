import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { UserDropdown } from '../UserDropdown'
import { AppLinks } from '@/content'
import { FeedBack } from '../feedback'

type Props = {
  title: string;
}

export function BasicHeader({ title }: Props) {
  return (
    <header className='flex justify-between p-4 items-center'>
      <div className='flex gap-3 items-center'>
        <Link href='/'>
          <Image
            src='/vercel.svg'
            alt='Vercel Logo'
            height={70}
            width={70}
          />
        </Link>
        <span className='text-xl text-muted-foreground'>/</span>
        <p>{title}</p>
      </div>

      <div className='flex gap-4'>
        <Link
          href={AppLinks.SignInPage}
          className={buttonVariants()}
        >
          Start Building
        </Link>
        <FeedBack>
          <Button variant='outline'>FeedBack</Button>
        </FeedBack>
        <UserDropdown />
      </div>
    </header>
  )
}
