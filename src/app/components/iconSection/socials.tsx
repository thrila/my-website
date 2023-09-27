import Link from 'next/link'
import React from 'react'
import { SlSocialGithub, SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl'
import { SiDiscord, SiHackernoon, SiHackerrank } from 'react-icons/si'


const Socials = () => {
  return (
    <div className=' mx-auto'>
      <div className=' flex items-center space-x-5 md:space-x-10 m-3'>
        <Link href='#' className='text-white text-4xl md:text-6xl font-thin'> <SlSocialGithub /> </Link>
        <Link href='#' className='text-white text-4xl md:text-6xl font-thin'> <SlSocialLinkedin /> </Link>
        <Link href='#' className='text-white text-4xl md:text-6xl font-thin'> <SlSocialTwitter /> </Link>
        <Link href='#' className='text-white text-4xl md:text-6xl font-thin'> <SiDiscord /> </Link>
        <Link href='#' className='text-white text-4xl md:text-6xl font-thin'> <SiHackernoon /> </Link>
      </div>
    </div>
  )
}

export default Socials
