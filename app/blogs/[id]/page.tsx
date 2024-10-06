
import fetchSinglePost from "@/lib/fetchSinglePost"; // Adjust the import path
import { notFound } from "next/navigation";
import { PostWithId } from "@/lib/types/post"; // Adjust the import path as necessary
import DeleteButton from "../../components/DeleteButton";
export default async function PostPage({ params }: { params: { id: string } }) {
  const post: PostWithId | null = await fetchSinglePost(params.id);

  if (!post) {
    notFound(); // Render a 404 page if no post is found
  }

  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-4">
        {post.date
          ? new Date(post.date).toLocaleDateString()
          : "No date available"}
      </p>
      <p className="text-gray-800 mb-6">{post.content}</p>
      <div className="flex justify-end">
        <DeleteButton postId={post._id.toString()} />
      </div>
    </div>
  );
}
