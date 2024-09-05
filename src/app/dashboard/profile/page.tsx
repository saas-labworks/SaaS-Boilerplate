import { ButtonCustomerPortal } from '@/src/components/payments/ButtonCustomerPortal'
import { Button, buttonVariants } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'
import { auth } from '@/src/lib/auth'
import { getUserById, updateUser } from '@/src/lib/data-access'

export default async function ProfileDashboardPage() {
  const session = await auth()
  const user = await getUserById(session!.user!.id!)
  // TODO: manage formData in a client component

  return (
    <main className='grid grid-cols-1 md:grid-cols-2 gap-8 p-4 lg:p-6'>
      {/* TODO: Maybe show plans here! */}
      <form
        action={async (formData: FormData) => {
          'use server'
          const name = formData.get('name') as string | null
          if (!name || name === user!.name) return

          await updateUser(user!.id, { name })
        }}
        className='flex flex-col gap-2'
      >
        <Label htmlFor='name'>Name</Label>
        <Input
          type='text'
          name='name'
          placeholder={user?.name ?? 'John Doe'}
        />

        <Button
          type='submit'
          className='max-w-min'
        >
          Save Changes
        </Button>
      </form>

      <div className='flex flex-col gap-4'>
        <Label>See your billing details</Label>
        <ButtonCustomerPortal
          className={buttonVariants({ variant: 'default', className: 'max-w-min' })}
        />
      </div>
    </main>
  )
}
