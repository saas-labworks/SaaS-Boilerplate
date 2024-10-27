'use client'
import { DataTableColumnHeader } from '@/components/tables'
import { Checkbox } from '@/components/ui/checkbox'
import { Category } from '@/lib/db'
import { ColumnDef } from '@tanstack/react-table'

export const columnsNames = [
  'name',
  'parentCategory'
]

export const columns: ColumnDef<Category>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader
        title='Name'
        column={column}
      />
    )
  },
  {
    accessorKey: 'parentCategory',
    header: ({ column }) => (
      <DataTableColumnHeader
        title='Parent Category'
        column={column}
      />
    ),
    cell: ({ row }) => {
      const category = row.original.parentCategory
      return category?.name ?? '--'
    }
  }
]
