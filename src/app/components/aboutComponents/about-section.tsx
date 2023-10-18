import Link from "next/link"
import Image from "next/image"

const AboutSection = () => {
  return (
    <div className='container  max-w-3xl mx-auto'>      {/* hero div  */}
      < div className='flex justify-around md:justify-between flex-col-reverse md:flex-row ' >
        <div className='pr-auto md:w-1/2'>
          <div className=' my-3'>
            <h1 className='font-bold font-serif text-3xl md:text-5xl text-custom-text'>Hi there,</h1>
          </div>
          <div className='w-auto md:pr-5'>
            <p className=' text-left font-normal text-custom-text'>my name is Ifeanyi Ndubuzu and i am  a Chemical Engineering student in the <a target="_blank" rel="noopener noreferrer" href='https://fuotuoke.edu.ng/'>Federal University of Otuoke  </a> in my respective University i was the GDSC lead from 2023 to 2024 i believe that as Individuals in The STEM field We owe it to ourselves and our colleges to be computer Literate . My hobbies include reading, listening to music, learning new things and programming i also happen to be a big linux and Open source Nerd. you can contact me via any of my social media handles provided in my <Link href='/' > Homepage </Link>  </p>
          </div>
        </div>
        <div className=' pl-auto rounded-full h-20 w-20 border-2 border-white  md:h-40 md:w-40 relative '>
          <Image className=' w-full h-full overflow-hidden rounded-full'
            alt='an old picture of Ifeanyi '
            src='/danny.jpeg'
            layout='fill'
            objectFit='cover'
            width={0}
            height={0}

          />
        </div>
      </div >


    </div>
  )
}

export default AboutSection
