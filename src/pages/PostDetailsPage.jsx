import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../services/api";
import toast from "react-hot-toast";
import PostEdit from "../components/PostEdit";
import PostDelete from "../components/PostDelete";

const PostDetailsPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null); // State to store post data
  const [loading, setLoading] = useState(true); // State for loading status
  const [edit, setEdit] = useState(false); // State for edit active status
  const [del, setDel] = useState(false); // State for delete active status

  const handleDeletePost = () => {
    console.log("handleDeletePost clicked");
  };

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
    <div className="container mx-auto m-12 px-6 bg-white">
      <main className="py-8 bg-white">
        {!edit && !del && (
          <div className="card w-full bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-none">
            {post.cover && (
              <figure className="max-h-64 overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/600x400?text=Cover+Image";
                    e.target.alt = "Image not available";
                  }}
                />
              </figure>
            )}
            <div className="card-body p-0 pt-4">
              <h2 className="card-title text-md font-bold">{post.title}</h2>
              <p className="text-gray-600 text-xs">{post.content}</p>
              <div className="card-actions justify-start mt-4">
                <button
                  onClick={() => setEdit(true)}
                  className="text-xs font-regular hover:italic"
                >
                  Edit
                </button>
                <button
                  onClick={() => setDel(true)}
                  className="text-xs font-regular hover:italic"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
        {edit && <PostEdit post={post} />}
        {del && <PostDelete post={post} />}
      </main>
    </div>
  );
};

export default PostDetailsPage;
