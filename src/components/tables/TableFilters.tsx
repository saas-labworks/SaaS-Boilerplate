import { ArrowLeftIcon, ArrowRightIcon, DownloadIcon, FilterIcon, RefreshCwIcon } from 'lucide-react'
import { Button } from '../ui/button'
import { TableFilterSection } from './TableColumnsToggle'

type Props = {
  columns: string[];
  refresh: () => void;
}

export function TableFilters({ columns, refresh }: Props) {
  return (
    <section className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <div className='flex'>
          <Button variant='outline' size='icon' className='rounded-r-none border-r-0'>
            <ArrowLeftIcon size={20} />
          </Button>
          <Button variant='outline' size='icon' className='rounded-l-none'>
            <ArrowRightIcon size={20} />
          </Button>
        </div>

        <Button variant='outline' className='flex gap-1'>
          <FilterIcon size={20} />
          <span>Filters</span>
        </Button>

        <TableFilterSection
          columns={columns}
        />

        <Button>
          Add Record
        </Button>
      </div>

      <div className='flex gap-2'>
        <div className='flex'>
          <Button variant='outline' size='icon' className='rounded-r-none border-r-0'>
            <ArrowLeftIcon size={20} />
          </Button>
          <div className='size-10 grid place-content-center border-[1px] border-r-0'>50</div>
          <div className='size-10 grid place-content-center border-[1px] border-r-0'>100</div>
          <Button variant='outline' size='icon' className='rounded-l-none'>
            <ArrowRightIcon size={20} />
          </Button>
        </div>

        <Button
          // onClick={() => refresh()}
          variant='outline'
          size='icon'
        >
          <RefreshCwIcon />
        </Button>
        <Button variant='outline' size='icon'>
          <DownloadIcon />
        </Button>
      </div>
    </section>
  )
}
