import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold">
          <Link className="text-gray-800 hover:text-gray-600" href="/">
            MyBlog
          </Link>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link className="text-gray-800 hover:text-gray-600" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-800 hover:text-gray-600"
                href="/post-blog"
              >
                Post a Blog
              </Link>
            </li>
            <li>
              <Link className="text-gray-800 hover:text-gray-600" href="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
