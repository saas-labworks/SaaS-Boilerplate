'use client'
import { useAction } from 'next-safe-action/hooks'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { createCurrencyAction } from '@/lib/use-cases'
import { LoaderButton } from '@/components/buttons'
import { toast } from 'sonner'
import { Currency } from '@/lib/db'
import { redirect } from 'next/navigation'
import { AppLinks } from '@/content'

type CreateCurrency = Omit<Currency, 'id'>

export default function AddCurrencyPage() {
  const { executeAsync, result, isPending, reset, hasSucceeded } = useAction(createCurrencyAction, {
    onSuccess: () => {
      toast.success('Currency added successfully')
    },
    onError: ({ error }) => {
      toast.error(JSON.stringify(error))
    }
  })

  if (hasSucceeded) {
    reset()
    return redirect(AppLinks.CurrenciesPage)
  }

  return (
    <form
      className='flex flex-col gap-4'
      onSubmit={async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const input = Object.fromEntries(formData) as CreateCurrency

        await executeAsync(input)
      }}
    >
      <div>
        <Label className='text-lg'>Name</Label>
        <Input
          name='name'
          type='text'
          placeholder='US Dollar, MX Peso, ...'
        />
        <p className='text-[13px] text-muted-foreground'>Currency name</p>
        {result.validationErrors?.name?._errors && (
          <p className='text-[13px] text-red-500'>{result.validationErrors?.name?._errors[0]}</p>
        )}
      </div>

      <Separator />

      <div>
        <Label className='text-lg'>Code</Label>
        <Input
          name='code'
          type='text'
          placeholder='USD, MX, ...'
        />
        <p className='text-[13px] text-muted-foreground'>Currency code</p>
        {result.validationErrors?.code?._errors && (
          <p className='text-[13px] text-red-500'>{result.validationErrors?.code?._errors[0]}</p>
        )}
      </div>

      <Separator />

      <div>
        <Label className='text-lg'>Symbol</Label>
        <Input
          name='symbol'
          type='text'
          placeholder='$'
        />
        <p className='text-[13px] text-muted-foreground'>Currency symbol</p>
        {result.validationErrors?.symbol?._errors && (
          <p className='text-[13px] text-red-500'>{result.validationErrors?.symbol?._errors[0]}</p>
        )}
      </div>

      <div className='flex justify-end'>
        <LoaderButton
          isLoading={isPending}
          className='max-w-min'
          type='submit'
        >
          Add Currency
        </LoaderButton>
      </div>
    </form>
  )
}
