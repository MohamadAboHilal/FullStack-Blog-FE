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
        console.log("Fetched data:", data);
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
    <div className="container mx-auto px-4">
      <main className="py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest Blog Posts
        </h1>
        {isLoading && <div className="text-center">Loading...</div>}
        {error && (
          <div className="text-center text-red-500">Error: {error}</div>
        )}
        {!isLoading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
