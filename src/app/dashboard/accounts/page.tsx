import { redirect } from 'next/navigation'
import { DataTable } from '../data-table'
import { columns /* columnsNames */ } from './columns'
import { auth } from '@/lib/auth'
import { AppLinks } from '@/content'
import { getMoneyAccounts } from '@/lib/data-access'
// import { TableFilters } from '@/components/tables'

export default async function AccountsPage() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const moneyAccounts = await getMoneyAccounts(session.user.id!)
  // const refreshAccounts = async () => {
  //   await getMoneyAccounts(session.user!.id!)
  // }

  return (
    <div className='container mx-auto py-10 flex flex-col gap-3'>
      {/* <TableFilters
        refresh={() => { }}
        columns={columnsNames}
      /> */}
      <DataTable columns={columns} data={moneyAccounts} />
    </div>
  )
}
