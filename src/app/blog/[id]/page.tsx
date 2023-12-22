import getFormattedDate from "../../../../lib/getFormattedDate";
import { getSortedPostsData, getPostData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/app/components/header/navbar";
import Footer from "@/app/components/footer/footer";

export async function generateStaticParams() {
  const posts = getSortedPostsData()

  return posts.map((post) => ({
    id: post.id
  }))
}

export async function generateMetadata({ params }: { params: { id: String } }) {
  const posts = getSortedPostsData()
  const { id } = params
  const post = posts.find(post => post.id === id)
  if (!post) {
    return {
      title: `Thrila |  404`
    }
  }

  return {
    title: `thrila | ${post.id}.md`
  }

}

export default async function Post({ params }: { params: { id: string } }) {

  const posts = getSortedPostsData()
  const { id } = params

  if (!posts.find(post => post.id === id)) notFound()

  const { title, date, contentHtml } = await getPostData(id)

  const pubDate = getFormattedDate(date)

  return (
    <main className="flex flex-col  min-h-screen font-sans bg-custom-background  justify-center items-stretch">
      <NavBar />
      <div className="container max-w-3xl">   <h1 className="text-3xl mt-4 mb-5">{title}</h1>
        <p className="mb-5 font-thin">
          {pubDate}
        </p>
        <article >
          <section className="mb-5 list-disc" dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <p className="mb-5">
            <Link href="/">← Back to Blogs</Link>
          </p>
        </article>
      </div>
      <Footer />
    </main>
  )
}
