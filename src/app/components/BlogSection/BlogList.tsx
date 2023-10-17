import { getSortedPostsData } from '../../../../lib/posts'
import { BlogItem } from './blogItem'


export default function BlogList() {
  const posts = getSortedPostsData()
  return (
    <div className='container max-w-3xl mx-auto mt-5 mb-20'>
      {
        posts.map((post) => {
          return <BlogItem key={post.id} data={post} />
        })
      }
    </div>
  )
}

// export async function getStaticProps() {
//   const allPostData = getSortedPostsData();
//   return {
//     props: {
//       allPostData,
//     },
//   };
// }


