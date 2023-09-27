import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container  max-w-3xl mx-auto'>
      <div className='flex  border-t flex-row justify-evenly text-button-before text-center mt-5 mb-10 md:mb-5 '>
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
