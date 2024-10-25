import Image from 'next/image'
import { Camera } from 'lucide-react'
import { LoaderFormButton } from '@/components/buttons/LoaderFormButton'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Skeleton } from '@/components/ui/skeleton'
import { updateUser } from '@/lib/data-access'
import { User } from '@/lib/db'

type Props = {
  user: User
}

export function ProfileDetails({ user }: Props) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Profile Details</CardTitle>
      </CardHeader>
      <form
        action={async (formData: FormData) => {
          'use server'
          const name = formData.get('name') as string | null
          if (!name || name === user!.name) return

          await updateUser(user!.id, { name })
        }}
        className='flex flex-col gap-2'
      >
        <CardContent className='flex gap-10'>
          <div className='relative min-w-min rounded-full border-2 border-primary overflow-hidden'>
            <label htmlFor='image'>
              <Camera className='w-12 h-12 absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer' />
            </label>
            <input type='file' id='image' name='image' className='hidden' accept='image/*' />
            {user?.image
              ? <Image src={user.image} width={160} height={160} alt={user.name ?? 'profile'} />
              : <Skeleton className='w-40 h-40 rounded-full' />}
          </div>
          <div className='w-full flex flex-col gap-3'>
            <div>
              <Label htmlFor='name'>Name</Label>
              <Input
                type='text'
                name='name'
                placeholder={user?.name ?? 'John Doe'}
              />
            </div>
            <div>
              <Label htmlFor='email'>Email</Label>
              <Input
                type='email'
                name='email'
                value={user!.email!}
                disabled
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex justify-between p-4 bg-secondary'>
          <p className='hidden md:inline-block'>Save your profile changes.</p>
          <LoaderFormButton className='max-w-min'>
            Save Changes
          </LoaderFormButton>
        </CardFooter>
      </form>
    </Card>
  )
}
