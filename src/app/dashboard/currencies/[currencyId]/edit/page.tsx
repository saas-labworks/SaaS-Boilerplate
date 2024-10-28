import { redirect } from 'next/navigation'
import { getCurrencyById } from '@/lib/data-access'
import EditCurrencyPage from './EditCurrencyPage'
import { AppLinks } from '@/content'
import { auth } from '@/lib/auth'

type Props = {
  params: {
    currencyId: string
  };
}

export default async function EditPage({ params }: Props) {
  const { currencyId } = params
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const currency = await getCurrencyById(Number(currencyId), session.user.id!)

  if (!currency) {
    return redirect(AppLinks.CurrencyNotFoundPage)
  }

  return (
    <EditCurrencyPage currency={currency} />
  )
}
