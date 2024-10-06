// lib/fetchAllPosts.ts
import clientPromise from "@/lib/mongodb"; // Adjust the import path as necessary
import { PostWithId } from "@/lib/types/post"; // Adjust the import path as necessary

export default async function fetchAllPosts(): Promise<PostWithId[]> {
  const client = await clientPromise;
  const db = client.db("blog");

  // Fetch all posts
  const posts: PostWithId[] = await db.collection<PostWithId>("posts").find({}).toArray();

  return posts; // This returns an array of posts
}
