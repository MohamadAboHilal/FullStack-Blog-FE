import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";
import toast from "react-hot-toast";
import BlogCard from "../components/BlogCard";

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null); // State to store post data
  const [loading, setLoading] = useState(true); // State for loading status
  const [detail, setDetail] = useState(true); // State for detail page active status

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await fetchPostById(id); // Fetch post by ID
        setPost(data); // Update state with post data
        setLoading(false); // Update loading state
      } catch (error) {
        console.error("Error getting post:", error);
        toast.error("Error getting post"); // Display toast error
        setLoading(false); // Update loading state
      }
    };

    fetchPost(); // Invoke the fetchPost function
  }, [id]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (!post) return <div>No post found</div>; // Handle case where no post is found

  return (
    <div>
      <BlogCard post={post} detail={detail} />
    </div>
  );
};

export default PostDetailsPage;
