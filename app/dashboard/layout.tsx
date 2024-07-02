import React from 'react'
import Image from 'next/image'
import { ChevronsUpDown, CreditCard, LogOut } from 'lucide-react'
import { sideMenuContent } from '@/content'

export default function DashboardLayout () {
  return (
    <div className='drawer'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        {/* Navbar */}
        <div className='navbar w-full flex-none lg:hidden'>
          <label htmlFor='my-drawer-3' aria-label='open sidebar' className='btn btn-square btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <div className='mx-2 flex-1 px-2'>{sideMenuContent.header.appName}</div>
        </div>

        <div className='menu hidden bg-base-200 min-h-screen w-80 p-4 pt-8 lg:flex flex-col justify-between'>
          {/* Sidebar content here */}
          <div>
            <div className='w-full flex gap-3 items-center'>
              <Image
                src={sideMenuContent.header.appImage}
                width={40} height={40}
                alt={sideMenuContent.header.appName}
                className='rounded-btn'
              />
              <h3 className='text-xl font-bold'>{sideMenuContent.header.appName}</h3>
            </div>
            <ul className='mt-4'>
              {sideMenuContent.main.map((res, i) => (
                <li key={i}>
                  <a>
                    {res.icon}
                    <span>{res.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className='mt-3'>
              <h4 className='font-bold text-lg'>Resources</h4>
              <ul className='mt-2'>
                {sideMenuContent.resources.map((res, i) => (
                  <li key={i} className='flex gap-2'>
                    <a>
                      {res.icon}
                      <span>{res.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='dropdown dropdown-top'>
            <div tabIndex={0} role='button' className='btn m-1 flex justify-between items-center px-2'>
              <div className='flex gap-2'>
                <div className='avatar placeholder'>
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
        </div>
      </div>

      {/* ============================================================================================================ */}
      <div className='drawer-side'>
        <label htmlFor='my-drawer-3' aria-label='close sidebar' className='drawer-overlay' />
        <div className='menu bg-base-200 min-h-full w-80 p-4 pt-8 flex flex-col justify-between'>
          {/* Sidebar content here */}
          <div>
            <div className='w-full flex gap-3 items-center'>
              <Image
                src={sideMenuContent.header.appImage}
                width={40} height={40}
                alt={sideMenuContent.header.appName}
                className='rounded-btn'
              />
              <h3 className='text-xl font-bold'>{sideMenuContent.header.appName}</h3>
            </div>
            <ul className='mt-4'>
              {sideMenuContent.main.map((res, i) => (
                <li key={i}>
                  <a>
                    {res.icon}
                    <span>{res.text}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className='mt-3'>
              <h4 className='font-bold text-lg'>Resources</h4>
              <ul className='mt-2'>
                {sideMenuContent.resources.map((res, i) => (
                  <li key={i} className='flex gap-2'>
                    <a>
                      {res.icon}
                      <span>{res.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className='dropdown dropdown-top'>
            <div tabIndex={0} role='button' className='btn m-1 flex justify-between items-center px-2'>
              <div className='flex gap-2'>
                <div className='avatar placeholder'>
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
        </div>
      </div>
    </div>
  )
}
