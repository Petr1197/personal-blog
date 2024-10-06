// lib/types/post.ts
import { WithId } from "@/lib/types/withId"; // Adjust the import path as necessary

export interface Post {
  title: string;
  content: string;
  date?: Date; // Add any other fields you need
}

export type PostWithId = WithId<Post>; // Use the custom WithId type
