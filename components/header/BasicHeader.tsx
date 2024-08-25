import Image from 'next/image'
import Link from 'next/link'
import { Button, buttonVariants } from '../ui/button'
import { UserDropdown } from '../UserDropdown'
import { AppLinks } from '@/content'

type Props = {
  title: string;
}

export function BasicHeader({ title }: Props) {
  return (
    <header className='flex justify-between p-4 items-center'>
      <div className='flex gap-3 items-center'>
        <Image
          src='/vercel.svg'
          alt='Vercel Logo'
          height={70}
          width={70}
        />
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
        <Button variant='outline'>FeedBack</Button>
        <UserDropdown />
      </div>
    </header>
  )
}
