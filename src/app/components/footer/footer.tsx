import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container  border-t mx-auto'>
      <div className='flex flex-row space-x-40 text-zinc-600 text-center mt-10 mb-5 '>
        <div className='flex flex-col space-y-6 p-5'>
          <Link href='#'>Home</Link>
          <Link href='#'>Hackernoon</Link>
          <Link href='#'>Twitter</Link>
        </div>
        <div className='flex flex-col space-y-6 text-center p-5'>
          <Link href='#'>About</Link>
          <Link href='#'>Linkedin</Link>
          <Link href='#'>Github</Link>
        </div>
        <div className='flex flex-col space-y-6 text-center p-5'>
          <Link href='#'>Blog</Link>
          <Link href='#'>Discord</Link>
        </div>

      </div>

    </div>
  )
}

export default Footer
