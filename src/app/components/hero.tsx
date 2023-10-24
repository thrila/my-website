import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export const Hero = () => {
  return (
    <div className='my-6 container max-w-3xl'>
      {/* hero div  */}
      < div className='flex justify-around md:justify-between flex-col-reverse md:flex-row ' >
        <div className='pr-auto md:w-1/2'>
          <div className=' my-3'>
            <h1 className='font-bold font-serif text-3xl md:text-5xl text-custom-text'>Michael Emmanuel</h1>
          </div>
          <div className='w-auto md:pr-5'>
            <p className=' text-left font-normal text-custom-text'> Student of Engineering, <Link className='text-text-light' href='www.github.com/thrila'>Web Developer</Link>, Linux and Open Source enthusiast with 3+ years of experience making web apps and writing hacky scripts</p>
          </div>
        </div>
        <div className=' pl-auto rounded-full h-20 w-20 border-2 border-white  md:h-40 md:w-40 relative '>
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
