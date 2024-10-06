"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link
            className="text-gray-800 hover:text-blue-600 transition-colors"
            href="/"
          >
            MyBlog
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <button
                onClick={() => window.location.reload()} // Reloads the page, refreshing data
                className="text-gray-800 hover:text-blue-600 transition-colors"
              >
                Reload Posts
              </button>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-blue-600 transition-colors"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-blue-600 transition-colors"
                href="/post-blog"
              >
                Post a Blog
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-blue-600 transition-colors"
                href="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
