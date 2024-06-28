import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SaaS Boilerplate',
  description: 'SaaS Boilerplate to build awesome products'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(inter.className, 'container min-h-screen m-auto flex flex-col justify-center')}>
        {children}
      </body>
    </html>
  )
}
