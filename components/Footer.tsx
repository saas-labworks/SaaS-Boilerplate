import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className='w-full flex flex-col items-center justify-between gap-10 md:flex-row p-10'>
      <div className='w-full md:w-auto flex flex-col items-center'>
        <Image src='/logo.webp' alt='SaaS Boilerplate' width={100} height={100} />
        <p className='mt-2 text-center'>
          <strong>SaaS Boilerplate</strong>
          <br />
          Launch my startup faster way
          <br />
          <span className='text-primary/60 text-sm'>
            Copyright &copy; 2024 - All right reserved
          </span>
        </p>
      </div>

      <nav className='flex flex-col items-center md:items-start'>
        <h6 className='text-lg font-bold'>Links</h6>
        <Link href='/' className='hover:underline py-1'>Support</Link>
        <Link href='/' className='hover:underline py-1'>Features</Link>
        <Link href='/' className='hover:underline py-1'>Pricing</Link>
      </nav>

      <nav className='flex flex-col items-center md:items-start'>
        <h6 className='text-lg font-bold'>Legal</h6>
        <Link href='/tos' className='hover:underline py-1'>Terms of use</Link>
        <Link href='/privacy-policy' className='hover:underline py-1'>Privacy policy</Link>
      </nav>
    </footer>
  )
}
