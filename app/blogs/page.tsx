
import fetchAllPosts from "@/lib/fetchAllPosts"; // Adjust the import path
import Link from "next/link";
import { PostWithId } from "@/lib/types/post"; // Adjust the import path as necessary
import DeleteButton from "../components/DeleteButton";

export default async function BlogPage() {
  const posts: PostWithId[] = await fetchAllPosts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li
            key={post._id.toString()}
            className="mb-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <Link href={`/blogs/${post._id}`} className="block w-full h-full">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2 hover:text-blue-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {post.content}
              </p>
            </Link>
            <div className="flex justify-end">
              <DeleteButton postId={post._id.toString()} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
