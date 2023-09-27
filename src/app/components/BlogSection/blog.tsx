import Link from 'next/link'
import React from 'react'

export const Blog = () => {
  return (
    <div className='container max-w-3xl mx-auto mt-5 mb-20'>
      <div className='flex flex-col '>
        <div><h2 className='text-3xl text-left md:text-4xl  mt-8 mb-3 md:max-w-xs '>Latest Posts</h2></div>
      </div>
      <div className='flex justify-between md:space-x-20 py-3 border-b border-zinc-400 font-thin'>
        <div className='pr-2 w-1/8'><p className='text-button-before'>01</p></div>
        <div className='flex justify-start'><h3 className='text-left md:text-xl'>First post is too short aparently </h3></div>
        <div><p className='text-button-before w-1/8 pl-2'>26/09/2023</p>
        </div>
      </div>
      <div className='my-4'><Link href='/' className='font-thin'>All posts → </Link>
      </div>
    </div>
  )
}

