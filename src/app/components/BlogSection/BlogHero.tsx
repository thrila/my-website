import React from 'react'

const BlogHero = () => {
  return (
    <div className='container max-w-3xl flex justify-start items-center'>
      <div className='max-w-3xl block pl-5'>
        <div className='  mb-5'> <h1 className='font-bold font-serif text-3xl md:text-5xl text-custom-text  left-0'>Blog </h1></div>
        <div className=' mb-10'><p className=' text-left font-mono font-thin text-custom-text md:w-1/3 no-wrap'>This is a place for my thoughts , a space for my ideas , a timestamp of things i thought were cool and so on...</p></div>
      </div>
    </div>
  )
}

export default BlogHero
