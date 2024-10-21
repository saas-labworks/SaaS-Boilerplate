import { redirect } from 'next/navigation'
import { DataTable } from '../data-table'
import { columns /* columnsNames */ } from './columns'
import { auth } from '@/src/lib/auth'
import { AppLinks } from '@/src/content'
import { getCurrencies } from '@/src/lib/data-access'
// import { TableFilters } from '@/src/components/tables'

export default async function ExpensesPage() {
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
      {/* <TableFilters
        refresh={() => { }}
        columns={columnsNames}
      /> */}
      <DataTable columns={columns} data={currencies} />
    </div>
  )
}
