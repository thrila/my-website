import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='container  max-w-3xl mx-auto'>
      <div className='flex  border-t flex-row justify-evenly text-button-before text-center mt-5 mb-10 md:mb-5 '>
        <div className='flex flex-col space-y-6 p-5'>
          <Link href='/'>Home</Link>
          <a target="_blank" rel="noopener noreferrer" href='https://hackernoon.com/u/indieboy'>Hackernoon</a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.twitter.com/nino_da_creator'>Twitter</a>
        </div>
        <div className='flex flex-col space-y-6 text-center p-5'>
          <Link href='/about'>About</Link>
          <a target="_blank" rel="noopener noreferrer" href='#'>Linkedin</a>
          <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/thrila'>Github</a>
        </div>
        <div className='flex flex-col space-y-6 text-center p-5'>
          <Link href='/blog'>Blog</Link>
          <a target="_blank" rel="noopener noreferrer" href='https://discordapp.com/users/830840937273229332'>Discord</a>
        </div>

      </div>

    </div>
  )
}

export default Footer
