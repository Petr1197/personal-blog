// app/components/DeleteButton.tsx
"use client";

import React, { useState } from "react";

export default function DeleteButton({ postId }: { postId: string }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/posts/${postId}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        throw new Error("Failed to delete post");
      }

      alert("Post deleted successfully!");

      // Optionally refresh the page or update the UI after deletion
      window.location.reload();
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
