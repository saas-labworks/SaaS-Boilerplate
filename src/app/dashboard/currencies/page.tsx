import { redirect } from 'next/navigation'
import { DataTable } from '../data-table'
import { columns } from './columns'
import { auth } from '@/src/lib/auth'
import { AppLinks } from '@/src/content'
import { getCurrencies } from '@/src/lib/data-access'

export default async function ExpensesPage() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const currencies = await getCurrencies(session.user.id!)

  return (
    <div className='container mx-auto py-10'>
      <DataTable columns={columns} data={currencies} />
    </div>
  )
}
