import { useState, useEffect } from "react";
import { fetchPosts } from "../services/api";
import BlogCard from "../components/BlogCard";
import Header from "../components/Header";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchPosts();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setError("Failed to fetch posts. Please try again later.");
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Header />
      <main className="py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Latest Sports Blog Posts
        </h1>
        {isLoading ? (
          <div className="text-center py-8">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : error ? (
          <div className="text-center py-8 text-red-500">{error}</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default HomePage;
