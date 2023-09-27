import Link from 'next/link'
import React from 'react'

export const Blog = () => {
  return (
    <div className='max-w-3xl mx-auto mt-5 mb-20'>
      <div className='flex flex-col justify-evenly'>
        <div><h2 className='text-4xl  mt-8 mb-3 max-w-xs mx-auto'>Latest Posts</h2></div>
      </div>
      <div className='flex space-x-20 py-3 border-b border-zinc-400 text-xl'>
        <div className='pr-5 w-1/8'><p className='text-zinc-600'>01</p></div>
        <div><h3 className='text-left'>First post is too short aparently alalalalal</h3></div>
        <div><p className='text-zinc-600 w-1/8'>26/09/2023</p>
        </div>
      </div>
      <Link href='#' className='font-thin'>All posts → </Link>
    </div>
  )
}
