import React, { useState, useEffect } from "react";
import { fetchPosts } from "../services/api";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error(
          "Error fetching posts:",
          error.response?.data || error.message
        );
        setError(
          error.response?.data?.message ||
            error.message ||
            "An error occurred while fetching posts."
        );
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, []);

  return (
    <div className="container mx-auto m-12 px-6 pb-12">
      <main className="py-8 bg-white">
        <h1 className="text-4xl font-bold mb-4 text-center font-bold, text-black">
          Your Sports Blog Daily Posts
        </h1>
        <p className="mb-8 text-center text-base font-light, text-black">
          Stay updated with the latest sports news, in-depth analysis, and
          compelling stories from the world of athletics.
        </p>
        {isLoading && (
          <div className="text-center text-black text-lg">Loading...</div>
        )}
        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}
        {!isLoading && !error && (
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
