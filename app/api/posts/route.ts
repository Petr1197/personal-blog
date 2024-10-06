
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

type Post = {
  title: string;
  content: string;
};

export async function POST(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('blog');

    // Parse the request body
    const body: Post = await request.json();

    // Validate the request body (optional, but recommended)
    if (!body.title || !body.content) {
      return NextResponse.json(
        { message: 'Title and content are required' },
        { status: 400 }
      );
    }

    // Insert the new post into the 'posts' collection
    const result = await db.collection('posts').insertOne({
      title: body.title,
      content: body.content,
    });

    // Return a success response
    return NextResponse.json(
      { message: 'Post created successfully', postId: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Failed to create post' },
      { status: 500 }
    );
  }
}
