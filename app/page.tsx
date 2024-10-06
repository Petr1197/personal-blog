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
      <div className="flex flex-col align-center justify-center gap-4">
        <div className="w-fit mx-auto">
          <Link href={"/blogs"}>Blogs</Link>
          <Link href={"/post-blog"}>Post a new Blog</Link>
        </div>
        {/* Pass serialized comments to the dynamically loaded client-side component */}
        <HomepageCarousel posts={serializedPosts} />
      </div>
      <footer></footer>
    </>
  );
}
