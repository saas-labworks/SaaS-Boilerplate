'use client'
import { TableCellHeader } from '@/src/components/tables'
import { MoneyAccount } from '@/src/lib/db'
import { ColumnDef } from '@tanstack/react-table'

export const columnsNames = [
  'name',
  'description',
  'currency',
  'balance'
]

export const columns: ColumnDef<MoneyAccount>[] = [
  {
    accessorKey: 'name',
    header: () => <TableCellHeader title='Name' />
  },
  {
    accessorKey: 'description',
    header: () => <TableCellHeader title='Description' />
  },
  {
    accessorKey: 'currency',
    header: () => <TableCellHeader title='Currency' />,
    cell: ({ row }) => {
      const currency = row.original.currency
      return currency?.name ?? '--'
    }
  },
  {
    accessorKey: 'balance',
    header: () => <TableCellHeader title='Balance' />
  }

]
