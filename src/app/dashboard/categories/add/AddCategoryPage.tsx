'use client'
import { useState } from 'react'
import { useAction } from 'next-safe-action/hooks'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { CheckIcon, ChevronsUpDownIcon, PlusIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createCategoryAction } from '@/lib/use-cases'
import { LoaderButton } from '@/components/buttons'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { AppLinks } from '@/content'
import { Category } from '@/lib/db'
import { cn } from '@/lib/utils'

type Props = {
  categories: Category[];
  categoriesTree: Map<number, Category[]>;
}

export function AddCategoryPage({ categories, categoriesTree }: Props) {
  const [open, setOpen] = useState(false)
  const [openCombobox, setOpenCombobox] = useState<boolean[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const { executeAsync, result, isPending, reset, hasSucceeded } = useAction(createCategoryAction, {
    onSuccess: () => {
      toast.success('Category added successfully')
    },
    onError: ({ error }) => {
      toast.error(JSON.stringify(error))
    }
  })

  const treeDepth = selectedCategories.length
  const onOpenChange = (index: number, open: boolean) => {
    setOpenCombobox(prev => {
      const newOpenCombobox = [...prev]
      newOpenCombobox[index] = open
      return newOpenCombobox
    })
  }

  if (hasSucceeded) {
    reset()
    return redirect(AppLinks.CategoriesPage)
  }

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const name = formData.get('name') as string
        await executeAsync({ name })
      }}
    >
      <div>
        <Label className='text-lg'>Name *</Label>
        <Input
          name='name'
          type='text'
          placeholder='Technology, Hobby,...'
        />
        {result.validationErrors?.name?._errors && (
          <p className='text-[13px] text-red-500'>{result.validationErrors?.name?._errors[0]}</p>
        )}
      </div>

      <div className='flex flex-col'>
        <Label className='text-lg mb-3'>Parent Category</Label>

        {selectedCategories.map((category, index) => (
          <Popover
            key={category.id}
            open={openCombobox[index]}
            onOpenChange={(open) => onOpenChange(index, open)}
          >
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                role='combobox'
                aria-expanded={openCombobox[index]}
                className='w-[200px] justify-between'
              >
                {categories.find((category) => category.id === selectedCategories[index].id)?.name}
                <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
              <Command>
                <CommandInput placeholder='Search category...' />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {(index === 0
                      ? categories
                      : categoriesTree.get(category.id!) ?? []
                    ).map((category) => (
                      <CommandItem
                        key={category.id}
                        value={category.name}
                        className='flex justify-between'
                        onSelect={() => {
                          if (selectedCategories[index].id === category.id) return
                          setSelectedCategories(prev => [
                            ...selectedCategories.slice(0, index),
                            category
                          ])
                          setOpenCombobox(prev => [
                            ...openCombobox.slice(0, index),
                            false
                          ])
                        }}
                      >
                        <div className='flex'>
                          <CheckIcon
                            className={cn(
                              'mr-2 h-4 w-4',
                              selectedCategories[index].id === category.id ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                          {category.name}
                        </div>

                        {categoriesTree.has(category.id!) && (
                          <PlusIcon className='h-4 w-4' />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        ))}

        {(treeDepth === 0 || categoriesTree.has(selectedCategories[treeDepth - 1].id!)) && (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant='outline'
                role='combobox'
                aria-expanded={open}
                className='w-[200px] justify-between'
              >
                Select category...
                <ChevronsUpDownIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
              </Button>
            </PopoverTrigger>
            <PopoverContent className='w-[200px] p-0'>
              <Command>
                <CommandInput placeholder='Search category...' />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories
                      .filter(c => treeDepth === 0
                        ? true
                        : c.parentCategoryId === selectedCategories[treeDepth - 1].id
                      )
                      .map((category) => (
                        <CommandItem
                          key={category.id}
                          value={category.name}
                          className='flex justify-between'
                          onSelect={() => {
                            setSelectedCategories(prev => [...prev, category])
                            setOpenCombobox(prev => [...prev, false])
                            setOpen(false)
                          }}
                        >
                          {category.name}
                          {categoriesTree.has(category.id!) && (
                            <PlusIcon className='h-4 w-4' />
                          )}
                        </CommandItem>
                      ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </div>

      <div className='flex justify-end'>
        <LoaderButton
          isLoading={isPending}
          className='max-w-min'
          type='submit'
        >
          Add Category
        </LoaderButton>
      </div>
    </form>
  )
}
