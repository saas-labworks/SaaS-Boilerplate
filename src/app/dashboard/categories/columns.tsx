'use client'
import { TableCellHeader } from '@/src/components/tables'
import { Category } from '@/src/lib/db'
import { ColumnDef } from '@tanstack/react-table'

export const columnsNames = [
  'name',
  'parentCategory'
]

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: 'name',
    header: () => <TableCellHeader title='Name' />
  },
  {
    accessorKey: 'parentCategory',
    header: () => <TableCellHeader title='Parent Category' />,
    cell: ({ row }) => {
      const category = row.original.parentCategory
      return category?.name ?? '--'
    }
  }
]
