'use client'
import { TableCellHeader } from '@/src/components/tables'
import { Currency } from '@/src/lib/db'
import { ColumnDef } from '@tanstack/react-table'

export const columns: ColumnDef<Currency>[] = [
  {
    accessorKey: 'name',
    header: () => <TableCellHeader title='Name' />
  },
  {
    accessorKey: 'code',
    header: () => <TableCellHeader title='Code' />
  },
  {
    accessorKey: 'symbol',
    header: () => <TableCellHeader title='Symbol' />
  }
]
