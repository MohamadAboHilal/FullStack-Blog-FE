import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { PostContext } from "../context/PostContext";
import { fetchPostById } from "../services/api.js";
import toast from "react-hot-toast";
import PostEdit from "../components/PostEdit";
import PostDelete from "../components/PostDelete";

const PostDetailsPage = () => {
  const { id } = useParams();
  const { posts } = useContext(PostContext);
  const [post, setPost] = useState(null); // State to store post data
  const [loading, setLoading] = useState(true); // State for loading status
  const [edit, setEdit] = useState(false); // State for edit active status
  const [del, setDel] = useState(false); // State for delete active status

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPostById(id);
        setPost(data); // Update state with post data
        setLoading(false); // Update loading state
      } catch (error) {
        console.error("Error fetching post:", error);
        toast.error("Error getting post"); // Display toast error
        setLoading(false); // Update loading state
      }
    };

    // check if post already in context
    const postFromContext = posts.find((p) => p.id === parseInt(id));
    if (postFromContext) {
      setPost(postFromContext);
      setLoading(false);
    } else {
      getPost();
    }
  }, [id, posts]);

  if (loading) return <div>Loading...</div>; // Show loading state
  if (!post) return <div>No post found</div>; // Handle case where no post is found

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 h-auto pb-30 bg-white">
      <main className="py-8 bg-white">
        <Link to={"/"} className="text-xs font-regular hover:italic">
          &#60; All Posts
        </Link>
        {!edit && !del && (
          <>
            <h2 className="card-title text-2xl font-bold mt-5 mb-5">
              {post.title}
            </h2>
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
                <p className="text-gray-600 text-wrap text-sm">
                  {post.content}
                </p>
                <hr className="border-1 border-gray-700 mt-8" />
                <h3 className="text-center text-sm font-semibold my-8">
                  Author: {post.author}
                </h3>
                <div className="card-actions justify-center mt-4">
                  <button
                    onClick={() => setDel(true)}
                    className="bg-white border border-red-600 hover:bg-red-200 hover:text-black text-red-600 font-light text-sm py-2 px-4"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => setEdit(true)}
                    className="bg-black border border-black hover:bg-slate-700 text-white font-light text-sm py-2 px-4"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
        {edit && <PostEdit post={post} />}
        {del && <PostDelete post={post} />}
      </main>
    </div>
  );
};

export default PostDetailsPage;
