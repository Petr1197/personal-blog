import Link from "next/link";
import React from "react";
import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";
import dynamic from "next/dynamic";
import { Post } from "@/lib/types/post";

// Dynamically import the HomepageCarousel to prevent SSR for it
const HomepageCarousel = dynamic(
  () => import("./components/HomepageCarousel"),
  {
    ssr: false, // This ensures the component is only rendered on the client side
  }
);

export default async function Home() {
  const client = await clientPromise;
  const db = client.db("blog");

  // Fetch comments
  const posts = await db.collection<Post>("posts").find({}).toArray();

  // Convert MongoDB-specific fields (ObjectId, Date) to plain serializable objects (string)
  const serializedPosts = posts.map((post) => ({
    ...post,
    _id: post._id.toString(),
    title: post.title.toString(),
    content: post.content.toString(),
  }));

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-6">
        <div className="text-center my-10">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Welcome to my Blog Platform
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700">
            Explore, Create, and Share Your Thoughts
          </h2>
        </div>
        <div className="w-fit mx-auto mt-4 flex space-x-8">
          <Link
            href="/blogs"
            className="text-lg font-semibold text-blue-500 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-500 transition-colors duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/post-blog"
            className="text-lg font-semibold text-green-500 hover:text-green-700 border-b-2 border-transparent hover:border-green-500 transition-colors duration-300"
          >
            Post a New Blog
          </Link>
        </div>
        <HomepageCarousel posts={serializedPosts} />
      </div>
    </>
  );
}
