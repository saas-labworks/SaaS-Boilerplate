import { ArrowLeftIcon, ArrowRightIcon, DownloadIcon, FilterIcon, RefreshCwIcon } from 'lucide-react'
import { Button, buttonVariants } from '../ui/button'
import Link from 'next/link'
import { Table } from '@tanstack/react-table'

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu'
import { SimpleTooltip } from '../tooltips'

type Props<TData> = {
  table: Table<TData>;
  dashboardSubpage: string,
  name: string;
}

export function TableFilters<TData>({ table, name, dashboardSubpage }: Props<TData>) {
  return (
    <section className='flex justify-between items-center'>
      <div className='flex gap-2'>
        <Button variant='outline' className='flex gap-1'>
          <FilterIcon size={20} />
          <span>Filters</span>
        </Button>

        {/* Columns Selector */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='ml-auto'>
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className='capitalize'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)}
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Add Record Button */}
        <Link
          href={`${dashboardSubpage}/add`}
          className={buttonVariants({ variant: 'default' })}
        >
          Add {name}
        </Link>
      </div>

      {/* Right Section */}
      <div className='flex gap-2'>
        {/* Pagination */}
        <div className='flex'>
          <Button
            variant='outline'
            size='icon'
            className='rounded-r-none border-r-0'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ArrowLeftIcon size={20} />
          </Button>

          <SimpleTooltip content='Page Index'>
            <input
              className='size-10 text-center border-[1px] border-r-0'
              value={table.getState().pagination.pageIndex}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            />
          </SimpleTooltip>

          <SimpleTooltip content='Page Size'>
            <input
              className='size-10 text-center border-[1px] border-r-0'
              value={table.getState().pagination.pageSize}
              onChange={(e) => table.setPageSize(Number(e.target.value))}
            />
          </SimpleTooltip>

          <Button
            variant='outline'
            size='icon'
            className='rounded-l-none'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ArrowRightIcon size={20} />
          </Button>
        </div>

        {/* Refresh button */}
        <SimpleTooltip content='Refresh'>
          <Button
            variant='outline'
            size='icon'
            type='submit'
          >
            <RefreshCwIcon />
          </Button>
        </SimpleTooltip>

        {/* TODO: implement button to export as CSV & excel */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' size='icon'>
              <DownloadIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='p-2 flex flex-col gap-1'>
            <DropdownMenuItem>Export as CSV</DropdownMenuItem>
            <DropdownMenuItem>Export as EXCEL</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  )
}
