'use client'
import { TableCellHeader } from '@/components/tables'
import { Currency } from '@/lib/db'
import { ColumnDef } from '@tanstack/react-table'

export const columnsNames = [
  'name',
  'code',
  'symbol'
]

export const columnsDetails = [
  {
    key: 'name',
    label: 'Name',
    type: 'string'
  },
  {
    key: 'code',
    label: 'Code',
    type: 'string'
  },
  {
    key: 'symbol',
    label: 'Symbol',
    type: 'string'
  }
]

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
