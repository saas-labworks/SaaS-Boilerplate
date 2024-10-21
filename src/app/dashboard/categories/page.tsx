import { redirect } from 'next/navigation'
import { DataTable } from '../data-table'
import { columns /* columnsNames */ } from './columns'
import { auth } from '@/lib/auth'
import { AppLinks } from '@/content'
import { getCategories } from '@/lib/data-access'
// import { TableFilters } from '@/components/tables'

export default async function CategoriesPage() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const categories = await getCategories(session.user.id!)
  // const refreshCurrencies = async () => {
  //   await getCurrencies(session.user!.id!)
  // }

  return (
    <div className='container mx-auto py-10 flex flex-col gap-3'>
      {/* <TableFilters
        refresh={() => { }}
        columns={columnsNames}
      /> */}
      <DataTable columns={columns} data={categories} />
    </div>
  )
}
