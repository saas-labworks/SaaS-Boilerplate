'use client'
import { DataTableColumnHeader } from '@/components/tables'
import { Transference } from '@/lib/db'
import { ColumnDef } from '@tanstack/react-table'

export const columnsNames = [
  'id',
  'fromCurrency',
  'toCurrency',
  'amount',
  'date',
  'description'
]

export const columns: ColumnDef<Transference>[] = [
  {
    accessorKey: 'id',
    header: () => <DataTableColumnHeader title='Id' />
  },
  {
    accessorKey: 'fromCurrency',
    header: () => <DataTableColumnHeader title='From Currency' />
  },
  {
    accessorKey: 'toCurrency',
    header: () => <DataTableColumnHeader title='To Currency' />
  },
  {
    accessorKey: 'amount',
    header: () => <DataTableColumnHeader title='Amount' />,
    cell: ({ row }) => {
      // const currency = row.original.currency
      // return currency?.name ?? '--'
      return '--'
    }
  },
  {
    accessorKey: 'date',
    header: () => <DataTableColumnHeader title='Date' />
  },
  {
    accessorKey: 'description',
    header: () => <DataTableColumnHeader title='Description' />
  }
]
