import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { globalConfig } from '@/global.config'
import { ThemeProvider } from '../components/theme'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: globalConfig.app.name,
  description: `${globalConfig.app.name} to build awesome products`
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased scroll-smooth',
        inter.variable
      )}
      >
        <TooltipProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </TooltipProvider>
      </body>
    </html>
  )
}
