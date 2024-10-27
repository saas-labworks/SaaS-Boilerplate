import { redirect } from 'next/navigation'
import { getCategories } from '@/lib/data-access'
import { AppLinks } from '@/content'
import { auth } from '@/lib/auth'
import { AddCategoryPage } from './AddCategoryPage'

export default async function Page() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const categories = await getCategories(session.user.id!)
  console.log(categories)

  return (
    <AddCategoryPage categories={categories} />
  )
}
