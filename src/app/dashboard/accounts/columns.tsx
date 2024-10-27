'use client'
import { DataTableColumnHeader } from '@/components/tables'
import { MoneyAccount } from '@/lib/db'
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
    header: () => <DataTableColumnHeader title='Name' />
  },
  {
    accessorKey: 'description',
    header: () => <DataTableColumnHeader title='Description' />
  },
  {
    accessorKey: 'currency',
    header: () => <DataTableColumnHeader title='Currency' />,
    cell: ({ row }) => {
      const currency = row.original.currency
      return currency?.name ?? '--'
    }
  },
  {
    accessorKey: 'balance',
    header: () => <DataTableColumnHeader title='Balance' />
  }

]
