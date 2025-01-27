import React, { useState, useContext } from "react";
import { PostContext } from "../context/PostContext";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const { posts, loading } = useContext(PostContext);
  const [error, setError] = useState(null);

  return (
    <div className="container mx-auto m-12 px-6 pb-30">
      <main className="py-8 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Your Sports Blog Daily Posts
        </h1>
        <p className="mb-12 text-center text-xs font-light">
          Stay updated with the latest sports news, in-depth analysis, and
          compelling stories from the world of athletics.
        </p>
        {loading && <div className="text-center">Loading...</div>}
        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-12 gap-x-12">
            {posts.length === 0 ? (
              <p className="col-span-full text-center">No posts found.</p>
            ) : (
              posts.map((post) => <BlogCard key={post.id} post={post} />)
            )}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
