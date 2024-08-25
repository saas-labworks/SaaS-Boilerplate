import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { CheckIcon, XIcon } from 'lucide-react'

export function WithAndWithout() {
  return (
    <section id='comparison' className='w-full py-12 md:py-24 lg:py-32'>
      <div className='container px-4 md:px-6'>
        <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12'>
          With vs Without Our Boilerplate
        </h2>
        <div className='grid gap-6 lg:grid-cols-2'>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>With Our Boilerplate</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <CheckIcon className='mr-2 h-4 w-4 text-green-500' />
                  Rapid development - launch in weeks, not months
                </li>
                <li className='flex items-center'>
                  <CheckIcon className='mr-2 h-4 w-4 text-green-500' />
                  Pre-built, customizable components
                </li>
                <li className='flex items-center'>
                  <CheckIcon className='mr-2 h-4 w-4 text-green-500' />
                  Scalable architecture from day one
                </li>
                <li className='flex items-center'>
                  <CheckIcon className='mr-2 h-4 w-4 text-green-500' />
                  Built-in best practices and security measures
                </li>
                <li className='flex items-center'>
                  <CheckIcon className='mr-2 h-4 w-4 text-green-500' />
                  Consistent code structure across the project
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className='text-2xl'>Without Our Boilerplate</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <XIcon className='mr-2 h-4 w-4 text-red-500' />
                  Longer development time - start from scratch
                </li>
                <li className='flex items-center'>
                  <XIcon className='mr-2 h-4 w-4 text-red-500' />
                  Build every component from the ground up
                </li>
                <li className='flex items-center'>
                  <XIcon className='mr-2 h-4 w-4 text-red-500' />
                  Risk of architectural issues as you scale
                </li>
                <li className='flex items-center'>
                  <XIcon className='mr-2 h-4 w-4 text-red-500' />
                  Implement security measures manually
                </li>
                <li className='flex items-center'>
                  <XIcon className='mr-2 h-4 w-4 text-red-500' />
                  Potential inconsistencies in code structure
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
