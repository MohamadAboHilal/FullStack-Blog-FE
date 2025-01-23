import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { deletePost } from "../services/api";

const PostDelete = ({ post }) => {
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleDeletePost = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await deletePost(post.id);
      navigate("/"); // Redirect to the Home page
      toast.success("Post deleted"); // Toast success
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post"); // Toast error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto bg-white">
        <h2 className="text-xl font-bold mb-8 text-center">
          Delete Post "{post.title}"
        </h2>
        <p className="text-lg text-red-600 font-bold mb-8 text-center">
          Are you sure?
        </p>
        <form onSubmit={handleDeletePost}>
          <div className="button-create-post flex flex-row justify-center space-x-2">
            <Link
              to={"/"}
              className={`bg-white border border-black hover:bg-slate-200 text-black font-light text-sm py-2 px-4 ${
                loading ? "btn-disabled" : ""
              }`}
            >
              Cancel
            </Link>
            <button
              className={`bg-black hover:bg-slate-700 text-white font-light text-sm py-2 px-4 ${
                loading ? "btn-disabled" : ""
              }`}
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Deleting..." : "Delete"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostDelete;
