import { Check, X } from 'lucide-react'

export function Pricing () {
  return (
    <section className='w-full flex flex-col items-center my-28'>
      <div className='flex items-center gap-4 mb-6'>
        <span className='font-bold'>MONTHLY</span>
        <input type='checkbox' className='toggle toggle-primary' />
        <span className='font-bold'>YEARLY</span>
      </div>
      <div className='w-full flex flex-col items-center lg:flex-row justify-center gap-5'>

        <div className='relative border-2 border-primary rounded-box'>
          <div className='badge badge-primary absolute z-10 text-xs font-bold -top-2 left-1/3'>LAUNCH OFFER</div>
          <div className='card w-[420px] flex flex-col gap-6 p-6 bg-base-200'>
            <div>
              <h2 className='card-title text-accent'>Started</h2>
              <p className='text-sm mt-1'>50% off for the first 100 customer</p>
            </div>

            <div className='flex items-end my-4'>
              <span className='line-through mb-2 mr-2'>$20</span>
              <span className='text-5xl font-bold'>$10</span>
              <span className='font-bold text-sm'>/MONTH</span>
            </div>

            <ul className='flex flex-col gap-3 text-sm'>
              <li className='flex gap-2'><Check size={24} /><span>Fully usable editor</span></li>
              <li className='flex gap-2'><Check size={24} /><span>Save and edit infinite snaps</span></li>
              <li className='flex gap-2'><Check size={24} /><span>Advanced tools for inset</span></li>
              <li className='flex gap-2'><Check size={24} /><span>Advanced tools for shadows</span></li>
              <li className='flex gap-2'><Check size={24} /><span>Advanced tools for border</span></li>
              <li className='flex gap-2'><Check size={24} /><span>Advanced tools for backgrounds</span></li>

              <li className='flex gap-2 text-gray-500'><X size={24} /><span>Personalize watermark</span></li>
              <li className='flex gap-2 text-gray-500'><X size={24} /><span>Remove watermark</span></li>
              <li className='flex gap-2 text-gray-500'><X size={24} /><span>Priority Support</span></li>
            </ul>

            <div className='card-actions'>
              <button className='btn btn-primary w-full'>Start Building</button>
            </div>
          </div>
        </div>

        <div className='card w-[420px] flex flex-col gap-6 p-6 bg-base-200'>
          <div>
            <h2 className='card-title text-accent'>Premium</h2>
            <p className='text-sm mt-1'>50% off for the first 100 customer</p>
          </div>

          <div className='flex items-end my-4'>
            <span className='line-through mb-2 mr-2'>$20</span>
            <span className='text-5xl font-bold'>$10</span>
            <span className='font-bold text-sm'>/MONTH</span>
          </div>

          <ul className='flex flex-col gap-3 text-sm'>
            <li className='flex gap-2'><Check size={24} /><span>Fully usable editor</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Save and edit infinite snaps</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Advanced tools for inset</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Advanced tools for shadows</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Advanced tools for border</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Advanced tools for backgrounds</span></li>

            <li className='flex gap-2'><Check size={24} /><span>Personalize watermark</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Remove watermark</span></li>
            <li className='flex gap-2'><Check size={24} /><span>Priority Support</span></li>
          </ul>

          <div className='card-actions'>
            <button className='btn btn-primary w-full'>Start Building</button>
          </div>
        </div>
      </div>
    </section>
  )
}
