// app/actions/deletePost.ts
"use server";

import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function deletePost(postId: string) {
  const client = await clientPromise;
  const db = client.db("blog");

  const result = await db.collection("posts").deleteOne({ _id: new ObjectId(postId) });

  if (result.deletedCount === 0) {
    throw new Error("Post not found");
  }

  return "Post deleted successfully";
}
