'use client'
import { useState } from 'react'
import { Check, SlidersHorizontalIcon } from 'lucide-react'
import { Command, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'

type Props = {
  columns: string[]
}

export function TableFilterSection({ columns }: Props) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<string[]>([])

  const alreadySelected = (name: string) => selected.includes(name.trim().toLowerCase())
  const toggleSelection = (name: string) => {
    if (alreadySelected(name)) {
      setSelected(s => s.filter(c => c !== name))
    } else {
      setSelected(s => [...s, name])
    }
  }
  const toggleAll = () => {
    if (selected.length === 0) setSelected(columns)
    else setSelected([])
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' className='flex gap-1'>
          <SlidersHorizontalIcon size={20} />
          <span>Columns</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className='flex justify-between text-sm'>
          <span>Toogle columns</span>
          <button
            type='button'
            className='hover:underline'
            onClick={toggleAll}
          >
            {selected.length === 0 ? 'Select All' : 'Deselect All'}
          </button>
        </div>
        <Command>
          <CommandInput />
          <CommandList>
            <CommandGroup>
              {columns.map((column) => (
                <CommandItem
                  key={column}
                  value={column}
                  onSelect={(currCol) => toggleSelection(currCol)}
                >
                  <Check
                    className={cn(
                      'mr-2 h-4 w-4',
                      alreadySelected(column) ? 'opacity-100' : 'opacity-0'
                    )}
                  />
                  {column}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
