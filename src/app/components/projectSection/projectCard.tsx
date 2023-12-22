import Link from 'next/link'
import { FaCode } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

const Card = ({ name, technologies, description, website }: ProjectItem) => {
  return (
    <div className='container max-w-xl py-4 rounded bg-hover-color'>
      <Link href='#' className='flex flex-col justify-center items-left '>
        <h1 className='font-bold text-2xl pb-1 font-serif'>{name}</h1>
        <p className='text-custom-background pb-2 font-mono'>{technologies} </p>
        <p className='font-normal text font-sans'>{description}</p>
        <div className='flex space-x-5 py-2 text-xl font-thin'>
          <a href={website} target='_blank' rel="noopener noreferrer" aria-label='Projects Source code'> <FaCode /> </a>
          <a href='#' target='_blank' rel="noopener noreferrer" aria-label='Projects Live demo'> <TbWorldWww /> </a>
        </div>
      </Link>
    </div>
  )
}

export default Card
