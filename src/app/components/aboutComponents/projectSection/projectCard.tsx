import Link from 'next/link'
import React from 'react'

const Card = () => {
  return (
    <div className='border-white border container mx-auto '>
      <Link href='#' className=''>
        <h1> This is the title</h1>
        <p>This is a simple explanation of what it does </p>
      </Link>
    </div>
  )
}

export default Card
