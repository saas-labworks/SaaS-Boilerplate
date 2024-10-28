'use client'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { useAction } from 'next-safe-action/hooks'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { updateCurrencyAction } from '@/lib/use-cases'
import { LoaderButton } from '@/components/buttons'
import { Currency } from '@/lib/db'
import { AppLinks } from '@/content'

type EditCurrency = Omit<Currency, 'id'>

type Props = {
  currency: Currency;
}

export default function EditCurrencyPage({ currency }: Props) {
  const { executeAsync, result, isPending, reset, hasSucceeded } = useAction(updateCurrencyAction, {
    onSuccess: () => {
      toast.success('Currency updated successfully')
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
        const input = Object.fromEntries(formData) as EditCurrency

        await executeAsync({
          ...input,
          id: currency.id
        })
      }}
    >
      <div>
        <Label className='text-lg'>Name</Label>
        <Input
          name='name'
          type='text'
          value={currency.name}
          placeholder='US Dollar, MX Peso, ...'
        />
        {result.validationErrors?.name?._errors && (
          <p className='text-[13px] text-red-500'>{result.validationErrors?.name?._errors[0]}</p>
        )}
      </div>

      <div>
        <Label className='text-lg'>Code</Label>
        <Input
          name='code'
          type='text'
          value={currency.code}
          placeholder='USD, MX, ...'
        />
        {result.validationErrors?.code?._errors && (
          <p className='text-[13px] text-red-500'>{result.validationErrors?.code?._errors[0]}</p>
        )}
      </div>

      <div>
        <Label className='text-lg'>Symbol</Label>
        <Input
          name='symbol'
          type='text'
          value={currency.symbol}
          placeholder='$'
        />
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
          Update Currency
        </LoaderButton>
      </div>
    </form>
  )
}
