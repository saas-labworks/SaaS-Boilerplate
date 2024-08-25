import { Button } from '../ui/button'
import { UserDropdown } from '../UserDropdown'

export function BasicHeader() {
  return (
    <header className='flex justify-between py-4 px-2 items-center'>
      <div className='flex gap-3 items-center'>
        <h1 className='text-2xl font-bold'>ICON</h1>
        <span className='text-xl text-muted-foreground'>/</span>
        <p>Terms of Service</p>
      </div>

      <div className='flex gap-4'>
        <Button>Start Building</Button>
        <Button variant='outline'>FeedBack</Button>
        <UserDropdown />
      </div>
    </header>
  )
}
