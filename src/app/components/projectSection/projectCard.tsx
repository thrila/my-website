import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='border-white  container max-w-3xl py-2 border-2 rounded'>
      <Link href='#' className='flex flex-col justify-center items-center '>
        <h1 className='font-bold text-2xl'> This is the title</h1>
        <p className='font-normal text'>This is a simple explanation of what it does </p>

      </Link>
    </div>
  )
}

export default Card
