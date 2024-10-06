"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import useRouter for navigation

export default function DeleteButton({ postId }: { postId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const router = useRouter(); // Initialize router
  const pathname = usePathname(); // Get the current path

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }

      // alert("Post deleted successfully!");

      // Navigate to the /blogs page after successful deletion
      router.push("/blogs");
    } catch (error) {
      if (error instanceof Error) {
        alert("Error deleting post: " + error.message);
      } else {
        alert("An unknown error occurred.");
      }
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className={`text-red-500 hover:underline ${isDeleting ? "opacity-50" : ""}`}
      disabled={isDeleting}
    >
      {isDeleting ? "Deleting..." : "Delete"}
    </button>
  );
}
