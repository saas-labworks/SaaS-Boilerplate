export default function SignIn () {
  return (
    <div className='w-96 m-auto card bg-base-300 p-6'>

      <div className='w-full flex flex-col gap-4 items-center'>
        <div className='flex gap-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='32' height='32'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='text-primary'
          >
            <path d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z' />
            <path d='m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z' />
            <path d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0' />
            <path d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5' />
          </svg>
          <span className='font-bold'>SaaS Lab Works</span>
        </div>
        <h1 className='text-3xl font-bold'>Welcome back!</h1>
      </div>

      <div className='flex flex-col gap-4 mt-10'>
        <label className='input input-bordered flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 opacity-70'
          >
            <path
              d='M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z'
            />
            <path
              d='M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z'
            />
          </svg>
          <input type='email' className='grow' placeholder='Email' />
        </label>

        <input type='text' className='input input-bordered' placeholder='Code' />
        <button className='btn btn-primary w-full rounded-badge'>Login</button>
      </div>

      <div className='divider my-6'>OR</div>

      <div>
        <button className='btn w-full flex gap-2 rounded-badge bg-base-100 hover:bg-base-100/60'>
          <svg
            viewBox='0 0 32 32'
            width='24px' height='24px'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16' fill='#00ac47' />
            <path d='M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16' fill='#4285f4' />
            <path d='M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z' fill='#ffba00' />
            <polygon fill='#2ab2db' points='8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374' />
            <path d='M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z' fill='#ea4435' />
            <polygon fill='#2ab2db' points='8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626' />
            <path d='M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z' fill='#4285f4' />
          </svg>

          <span className='font-bold'>Login with Google</span>
        </button>
      </div>
    </div>
  )
}
