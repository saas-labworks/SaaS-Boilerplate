import { auth } from '@/lib/auth'
import connectMongo from '@/lib/mongoose'
import { User } from '@/models'

export default async function Page() {
  await connectMongo()
  const session = await auth()
  const users = await User.find()

  return users.map((user) => (
    <div key={user._id}>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  ))
}
