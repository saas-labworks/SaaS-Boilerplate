import { redirect } from 'next/navigation'
import { getCategories } from '@/lib/data-access'
import { AppLinks } from '@/content'
import { auth } from '@/lib/auth'
import { AddCategoryPage } from './AddCategoryPage'
import { Category } from '@/lib/db'

export default async function Page() {
  const session = await auth()
  if (!session?.user) {
    return redirect(AppLinks.SignInPage)
  }

  const categories = await getCategories(session.user.id!)

  const categoriesTree = new Map<number, Category[]>()
  for (const category of categories) {
    if (!categoriesTree.has(category.parentCategoryId ?? -1)) {
      categoriesTree.set(category.parentCategoryId!, [])
    }

    categoriesTree.get(category.parentCategoryId!)?.push(category)
  }

  categoriesTree.forEach((value, key) => {
    if (value.length === 0) {
      categoriesTree.delete(key)
    }
  })

  return (
    <AddCategoryPage
      categories={categories}
      categoriesTree={categoriesTree}
    />
  )
}
