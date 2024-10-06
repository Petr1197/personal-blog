"use client"; // This ensures the component only runs on the client side

import React, { useEffect, useRef } from "react";
import Flickity from "flickity"; // Flickity is a client-side library
import Link from "next/link";

type Posts = {
  _id: string;
  title: string;
  content: string;
};

type Props = {
  posts: Posts[];
};

const HomepageCarousel: React.FC<Props> = ({ posts }) => {
  const flickityRef = useRef<Flickity | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Only initialize Flickity on the client side after mount
  useEffect(() => {
    if (carouselRef.current) {
      flickityRef.current = new Flickity(carouselRef.current, {
        cellAlign: "left",
        contain: true,
        pageDots: true,
        wrapAround: true,
      });
    }

    return () => {
      // Cleanup Flickity instance
      flickityRef.current?.destroy();
    };
  }, []);

  return (
    <div className="carousel bg-white w-full" ref={carouselRef}>
      {posts.map((post) => (
        <div
          className="carousel-cell w-full h-300 bg-white shadow-lg rounded-md mr-6 p-6 px-[4rem] flex flex-col justify-between transform hover:scale-105 transition-transform duration-300 ease-in-out"
          key={post._id}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
          <Link
            href={`/blogs/${post._id}`}
            className="text-blue-500 hover:text-blue-700 font-medium mt-auto"
          >
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomepageCarousel;
