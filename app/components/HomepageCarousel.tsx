"use client"; // This ensures the component only runs on the client side

import React, { useEffect, useRef } from "react";
import Flickity from "flickity"; // Flickity is a client-side library

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
    <div className="carousel w-full" ref={carouselRef}>
      {posts.map((post) => (
        <div
          className="carousel-cell w-full h-300 mr-3 bg-slate-300"
          key={post._id}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default HomepageCarousel;
