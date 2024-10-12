import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export default async function DashboardPage({ children }: Props) {
  // const session = await auth()
  // if (!session?.user) {
  //   return redirect(AppRoutes.auth.signIn)
  // }

  // const user = await getUserById(session.user.id!)
  // console.log(user)

  return (
    <div className=''>
      <h1>Resumen</h1>
    </div>
  )
}
