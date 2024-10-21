'use client'
import { TableCellHeader } from '@/components/tables'
import { Category } from '@/lib/db'
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
