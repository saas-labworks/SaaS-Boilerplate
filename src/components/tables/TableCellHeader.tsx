'use client'
/* eslint-disable indent */
import React from 'react'
import { ArrowDownWideNarrowIcon, ArrowUpWideNarrowIcon, ChevronsUpDownIcon } from 'lucide-react'
import { Column } from '@tanstack/react-table'
import { cn } from '@/lib/utils'

interface Props<TData, TValue> extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  column: Column<TData, TValue>
}

export function DataTableColumnHeader<TData, TValue>({
  column,
  title,
  className
}: Props<TData, TValue>) {
  if (!column.getCanSort()) {
    return <div className={cn(className)}>{title}</div>
  }

  // FIXME: fix sort
  return (
    <div
      className='flex justify-between'
      onClick={() => {
        switch (column.getIsSorted()) {
          case 'asc':
            column.toggleSorting(false)
            break
          case 'desc':
            column.toggleSorting(true)
            break
          default:
            column.toggleSorting(true, true)
            break
        }
      }}
    >
      <span>{title}</span>

      {column.getIsSorted() === 'desc'
        ? (<ArrowDownWideNarrowIcon className='ml-2 h-4 w-4' />)
        : column.getIsSorted() === 'asc'
          ? (<ArrowUpWideNarrowIcon className='ml-2 h-4 w-4' />)
          : (<ChevronsUpDownIcon className='ml-2 h-4 w-4' />)}
    </div>
  )
}
