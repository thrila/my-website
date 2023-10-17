import Link from 'next/link'
import getFormattedDate from '../../../../lib/getFormattedDate'
import getFormattedString from '../../../../lib/getFormattedString'

type Props = {
  data: BlogPost
}

export const BlogItem = ({ data }: Props) => {
  const { id, title, date } = data
  const formattedDate = getFormattedDate(date)
  const formattedTitle = getFormattedString(title)
  return (
    <div >
      <Link href={`/blog/${id}`} >  <div className='flex justify-between md:space-x-20 py-3 border-b border-zinc-400 font-thin hover:text-xl'>
        <div className='pr-2 w-1/8'><p className='text-button-before'>{formattedDate}</p></div>
        <div className='flex justify-start'><h3 className='text-left md:text-xl'>{formattedTitle} </h3></div>
        <div><p className='text-button-before w-1/8 pl-2'>{id}</p>
        </div>
      </div>
      </Link>
    </div >
  );
}

