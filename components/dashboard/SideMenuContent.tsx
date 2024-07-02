import React from 'react'
import Image from 'next/image'
import { BookText, ChevronsUpDown, CreditCard, Headset, LogOut, MessageCircleMore, Users } from 'lucide-react'

export function SideMenuContent () {
  return (
    <>
      <div>
        <div className='flex gap-3 items-center'>
          <Image src='/logo2.jpg' width={40} height={40} alt='saas-boilerplate' className='rounded-btn' />
          <h3 className='text-xl font-bold'>SaaS Name</h3>
        </div>
        <ul className='mt-4'>
          <li>
            <a>
              <Users width={20} height={20} />
              <span>Dashboard</span>
            </a>
          </li>
        </ul>

        <div className='mt-3'>
          <h4 className='font-bold text-lg'>Resources</h4>
          <ul className='mt-2'>
            <li className='flex gap-2'>
              <a>
                <BookText width={20} height={20} />
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a>
                <Headset width={20} height={20} />
                <a>Support</a>
              </a>
            </li>
            <li>
              <a>
                <MessageCircleMore width={20} height={20} />
                <a>Feedback</a>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className='dropdown dropdown-top'>
        <div tabIndex={0} role='button' className='btn m-1 flex justify-between items-center px-2'>
          <div className='flex gap-2'>
            <div className='avatar online placeholder'>
              <div className='bg-neutral text-neutral-content w-12 rounded-full'>
                <span className='text-xl'>AI</span>
              </div>
            </div>
            <div className='flex flex-col text-sm items-start justify-center'>
              <span>Carlos M. Gonzalez</span>
              <span className='text-xs font-light'>cmglezpdev@gmail.com</span>
            </div>
          </div>

          <ChevronsUpDown />
        </div>
        <ul tabIndex={0} className='dropdown-content menu bg-base-100 z-[1] rounded-btn w-full shadow'>
          <ul>
            <a className='flex gap-2 justify-start p-2 hover:bg-base-200'>
              <CreditCard width={20} height={20} />
              <span>Billing</span>
            </a>
          </ul>
          <ul>
            <a className='flex gap-2 justify-start p-2 hover:bg-base-200'>
              <LogOut width={20} height={20} />
              <span>SignOut</span>
            </a>
          </ul>
        </ul>
      </div>
    </>
  )
}
