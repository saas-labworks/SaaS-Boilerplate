/* eslint-disable indent */
import Image from 'next/image'
import { Separator } from '@/src/components/ui/separator'
import { BasicLayout } from '@/src/components/layouts'

// Define the structure of a changelog entry
interface ChangelogEntry {
  date: string
  title: string
  description: string | string[]
  resource: string
  isResourceVideo?: boolean
}

// Sample changelog data
const changelogData: ChangelogEntry[] = [
  {
    date: '06/25/2024',
    title: 'Themes',
    description: [
      "We've added the ability to style generations with themes for all users. Subscribers can also create custom themes from prompts, and modify individual design tokens.",
      "In addition, we're enabling Quality mode for all users by default."
    ],
    resource: '/changelog/themes.mp4',
    isResourceVideo: true
  },
  {
    date: '06/12/2024',
    title: 'Cleaner code view',
    description: [
      'We cleaned up the code view by removing some text and improving the UI for our CLI command options.',
      'On mobile, this increases the space for code by up to 25%!'
    ],
    resource: '/changelog/mobile-code-space.avif'
  },
  {
    date: '06/10/2024',
    title: 'Click to delete elements',
    description: 'We added the ability to remove elements from a generation without consuming credits or submitting a new prompt. To use this feature, click the pointer icon in the prompt bar to start a Refinement.',
    resource: '/changelog/new-toolbar.avif'
  },
  {
    date: '05/02/2024',
    title: 'New toolbar interface and generation improvements',
    description: "v0's user interface has been given an uplift and now features a Full Screen button and improved design. We've also released optimizations so you'll see your generation faster.",
    resource: '/changelog/changelog-image.avif'
  }
]

export default function Component() {
  return (
    <BasicLayout
      title='Changelog'
      subtitle='All the latest updates, improvements, and fixes to v0.'
    >
      <div className='container max-w-[75ch] mx-auto my-24'>
        <div className='space-y-8'>
          {changelogData.map((changes, index) => (
            <section key={index}>
              <div className='grid grid-cols-1 md:grid-cols-[100px_1fr] gap-6'>
                <div>
                  <time
                    className='text-sm text-muted-foreground'
                    dateTime={changes.date}
                  >
                    {changes.date}
                  </time>
                </div>
                <div className='space-y-4'>
                  {changes.isResourceVideo
                    ? (
                      <video
                        src={changes.resource}
                        width={1000}
                        height={1000}
                        autoPlay
                        muted
                        loop
                        className='w-full max-w-[600px]'
                      />
                    )
                    : (
                      <Image
                        src={changes.resource}
                        alt={changes.title}
                        width={1000}
                        height={1000}
                        className='w-full max-w-[600px]'
                      />
                    )}

                  <h3 className='text-2xl font-bold'>{changes.title}</h3>
                  <p className='text-muted-foreground'>{changes.description}</p>
                </div>
              </div>
              <Separator className='my-12' />
            </section>
          ))}

          <div>
            <h3 className='text-2xl font-bold'>Changelog!</h3>
            <p className='text-muted-foreground'>v0 has been long overdue for a changelog. Welcome to our changelog!</p>
          </div>
        </div>
      </div>
    </BasicLayout>

  )
}
