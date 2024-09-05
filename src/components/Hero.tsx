// https://shipfa.st/docs/components/hero
export function Hero() {
  return (
    <section className='w-full min-h-screen flex justify-center items-center'>
      <div className='max-w-md flex flex-col gap-3 items-center'>
        <h1 className='text-7xl font-bold'>Hello there</h1>
        <p className='text-center'>
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
          quasi.
        </p>

        <div className='w-full flex justify-center'>
          <script src='https://widget.senja.io/widget/1bcdaf20-3387-4a19-8f98-914178440bbb/platform.js' type='text/javascript' async />
          <div
            className='senja-embed'
            data-id='1bcdaf20-3387-4a19-8f98-914178440bbb'
            data-mode='shadow'
            data-lazyload='false'
            style={{
              display: 'block'
            }}
          />
        </div>
      </div>
      <div>
        {/* <Image src='/hero.png' alt='hero' width={500} height={500} /> */}
      </div>
    </section>
  )
}
