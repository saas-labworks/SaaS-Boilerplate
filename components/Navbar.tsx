import Link from 'next/link'

// https:// shipfa.st/docs/components/header
export function Navbar () {
  return (
    <nav className='navbar bg-base-200 border-b-base-100 border-b-2'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
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
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow flex gap-2'
          >
            <li><Link href='#'>Features</Link></li>
            <li><Link href='#'>Testimonials</Link></li>
            <li><Link href='#'>Pricing</Link></li>
            <li><Link href='#'>Faqs</Link></li>
          </ul>
        </div>
        <a className='btn btn-ghost text-xl'>SaaS Lab Works</a>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1 flex gap-2'>
          <li><Link href='#'>Features</Link></li>
          <li><Link href='#'>Testimonials</Link></li>
          <li><Link href='#'>Pricing</Link></li>
          <li><Link href='#'>Faqs</Link></li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href='/signin' className='btn btn-primary'>Start Building</Link>
      </div>
    </nav>
  )
}
