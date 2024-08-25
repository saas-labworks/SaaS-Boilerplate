import { ReactNode } from 'react'
import { BasicFooter } from '@/components/footer'
import { BasicHeader } from '@/components/header'

type Props = {
  children: ReactNode
  title: string;
  subtitle?: string;
}

export function BasicLayout({ children, ...props }: Props) {
  return (
    <>
      <BasicHeader
        title={props.title}
      />
      <main className='flex flex-col min-h-screen'>
        <header className='w-full h-72 flex flex-col gap-3 items-center justify-center bg-muted'>
          <h1 className='text-6xl font-bold'>{props.title}</h1>
          {props.subtitle && (
            <h3 className='text-xl'>{props.subtitle}</h3>
          )}
        </header>
        {children}
        <BasicFooter />
      </main>
    </>
  )
}
