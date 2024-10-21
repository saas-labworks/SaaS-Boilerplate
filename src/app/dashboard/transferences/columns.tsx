'use client'
import { TableCellHeader } from '@/components/tables'
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
    header: () => <TableCellHeader title='Id' />
  },
  {
    accessorKey: 'fromCurrency',
    header: () => <TableCellHeader title='From Currency' />
  },
  {
    accessorKey: 'toCurrency',
    header: () => <TableCellHeader title='To Currency' />
  },
  {
    accessorKey: 'amount',
    header: () => <TableCellHeader title='Amount' />,
    cell: ({ row }) => {
      // const currency = row.original.currency
      // return currency?.name ?? '--'
      return '--'
    }
  },
  {
    accessorKey: 'date',
    header: () => <TableCellHeader title='Date' />
  },
  {
    accessorKey: 'description',
    header: () => <TableCellHeader title='Description' />
  }
]
