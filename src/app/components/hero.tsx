import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = (props: {}) => {
  return (
    <div className='my-6'  >
      {/* hero div  */}
      < div className='flex justify-around max-w-3xl min-w-3xl ' >
        <div className='pr-auto w-3/4'>
          <div className='text-5xl my-3'>
            <h1 className='font-bold'>Ifeanyi Ndubuizu</h1>
          </div>
          <div className='w-auto pr-5'>
            <p className='text-zinc-300 text-left'> Student of Engineering,<Link className='text-text-light' href='www.github.com/thrila'>Developer </Link>  Linux and Open Source enthausist this is some extra text to make sure it works how i want</p>
          </div>
        </div>
        <div className=' pl-auto rounded-full  h-40 w-40 relative'>
          <Image className=' w-full h-full overflow-hidden rounded-full'
            alt='an old picture of Ifeanyi '
            src='/danny.jpeg'
            layout='fill'
            objectFit='cover'
            width={0}
            height={0}

          />
        </div>
      </div >
    </div >
  )
}
