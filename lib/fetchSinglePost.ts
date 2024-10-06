// lib/fetchSinglePost.ts
import clientPromise from "@/lib/mongodb"; // Adjust the import path as necessary
import { PostWithId } from "@/lib/types/post"; // Adjust the import path as necessary
import { ObjectId } from "mongodb";

export default async function fetchSinglePost(id: string): Promise<PostWithId | null> {
  const client = await clientPromise;
  const db = client.db("blog");

  // Fetch a single post by ID
  const post = await db.collection<PostWithId>("posts").findOne({ _id: new ObjectId(id) });

  return post; // This will return the post or null if not found
}
