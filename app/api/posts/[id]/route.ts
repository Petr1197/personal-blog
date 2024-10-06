
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // Adjust the import path as necessary
import { ObjectId } from "mongodb";

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const client = await clientPromise;
  const db = client.db("blog");

  try {
    // Ensure that the provided ID is valid
    const postId = params.id;
    const objectId = new ObjectId(postId);

    // Delete the post
    const result = await db.collection("posts").deleteOne({ _id: objectId });

    // Check if a document was deleted
    if (result.deletedCount === 0) {
      return NextResponse.error(); // Handle if no post was found with that ID
    }

    return NextResponse.json({ message: "Post deleted successfully!" });
  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ message: "Failed to delete post" }, { status: 500 });
  }
}
