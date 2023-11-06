import React from 'react'
import { SlSocialGithub, SlSocialTwitter, SlSocialLinkedin } from 'react-icons/sl'
import { SiDiscord, SiHackernoon, SiHackerrank } from 'react-icons/si'


const Socials = () => {
  return (
    <div className=' mx-auto'>
      <div className=' flex items-center space-x-5 md:space-x-10 m-3'>
        <a target="_blank" rel="noopener noreferrer" href='https://www.github.com/thrila' className='text-white text-4xl md:text-6xl font-thin hover:text-button-before'aria-label="Github"> <SlSocialGithub /> </a>
        <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/michael-ndubuizu-3a49a31b7/' className='text-white text-4xl md:text-6xl font-thin hover:text-button-before' aria-label='linkedin'> <SlSocialLinkedin /> </a>
        <a target="_blank" rel="noopener noreferrer" href='https://twitter.com/nino_da_creator' className='text-white text-4xl md:text-6xl font-thin hover:text-button-before' aria-label='twitter'> <SlSocialTwitter /> </a>
        <a target="_blank" rel="noopener noreferrer" href='discordapp.com/users/830840937273229332' className='text-white text-4xl md:text-6xl font-thin hover:text-button-before' aria-label='discord'> <SiDiscord /> </a>
        <a target="_blank" rel="noopener noreferrer" href='https://hackernoon.com/u/indieboy' className='text-white text-4xl md:text-6xl font-thin hover:text-button-before' aria-label='hackernoon'> <SiHackernoon /> </a>
      </div>
    </div>
  )
}

export default Socials
