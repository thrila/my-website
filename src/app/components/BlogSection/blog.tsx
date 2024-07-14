import { getRecentBlog } from "../../../../lib/getRecentBlog";
import { getSortedPostsData } from "../../../../lib/posts";
import { BlogItem } from "./blogItem";
import Link from "next/link";

export const Blog = () => {
  const posts = getSortedPostsData();
  const newPosts = getRecentBlog(posts);
  return (
    <div className="container max-w-3xl text-white mx-auto mt-5 mb-20">
      <div className="flex flex-col ">
        <div>
          <h2 className="text-3xl text-left md:text-4xl  mt-8 mb-3 md:max-w-xs ">Latest Posts</h2>
        </div>
      </div>
      {newPosts.map((post) => {
        return <BlogItem key={post.id} data={post} />;
      })}

      <div className="my-4">
        <Link href="/blog" className="font-thin">
          All posts →{" "}
        </Link>
      </div>
    </div>
  );
};
