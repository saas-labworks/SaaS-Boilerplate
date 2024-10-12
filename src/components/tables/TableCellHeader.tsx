/* eslint-disable indent */
import { useState } from 'react'
import { ArrowDownWideNarrow, ArrowUpWideNarrow, ChevronsUpDown } from 'lucide-react'

type Props = {
  title: string;
}

const SortType = {
  NONE: 0,
  ASC: 1,
  DESC: 2
}

export function TableCellHeader({ title }: Props) {
  const [sortType, setSortType] = useState<number>(SortType.NONE)

  return (
    <div
      className='flex justify-between'
      onClick={() => setSortType(p => (p + 1) % 3)}
    >
      <span>{title}</span>
      {sortType === SortType.NONE
        ? <ChevronsUpDown />
        : (
          sortType === SortType.ASC
            ? <ArrowUpWideNarrow />
            : <ArrowDownWideNarrow />
        )}
    </div>
  )
}
