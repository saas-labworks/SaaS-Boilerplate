import { redirect } from 'next/navigation'
import { DataTable } from '../data-table'
import { columns } from './columns'
import { auth } from '@/lib/auth'
import { AppLinks } from '@/content'
import { getCurrencies } from '@/lib/data-access'

export default async function CurrenciesPage() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const currencies = await getCurrencies(session.user.id!)
  // const refreshCurrencies = async () => {
  //   await getCurrencies(session.user!.id!)
  // }

  return (
    <div className='container mx-auto py-10 flex flex-col gap-3'>
      <DataTable
        columns={columns}
        data={currencies}
        dashboardSubpage='currencies'
        name='Currency'
      />
    </div>
  )
}
