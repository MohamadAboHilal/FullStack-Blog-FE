import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { updatePost } from "../services/api";

const PostEdit = ({ post }) => {
  const [form, setForm] = useState({
    author: post.author,
    title: post.title,
    content: post.content,
    cover: post.cover,
  });
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleEditPost = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await updatePost(post.id, form);
      navigate("/"); // Redirect to the Home page
      toast.success("Post updated"); // Toast success
    } catch (error) {
      console.error("Error updating post:", error);
      toast.error("Error updating post"); // Toast error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="max-w-md mx-auto bg-white pb-24 mt-5">
        <h2 className="text-xl font-bold mb-8 text-center">
          Edit Post "{form.title}"
        </h2>
        <form
          className="mx-auto max-w-xl space-y-4 w-full"
          onSubmit={handleEditPost}
        >
          <div className="w-full">
            <label className="label text-sm" htmlFor="author">
              Author
            </label>
            <input
              className="input input-bordered w-full rounded-none border-slate-700"
              id="author"
              type="text"
              name="author"
              placeholder="Name of the Author"
              value={form.author}
              onChange={handleChange}
              disabled={loading} // Disable input while loading
            />{" "}
          </div>
          <div className="w-full">
            <label className="label text-sm" htmlFor="title">
              Title
            </label>
            <input
              className="input input-bordered w-full rounded-none border-slate-700"
              id="title"
              type="text"
              name="title"
              placeholder="Title of the Post"
              value={form.title}
              onChange={handleChange}
              disabled={loading} // Disable input while loading
              required
            />
          </div>
          <div className="w-full">
            <label className="label text-sm" htmlFor="content">
              Content
            </label>
            <textarea
              rows="4"
              className="textarea textarea-bordered w-full rounded-none border-slate-700"
              id="content"
              name="content"
              placeholder="Post Content"
              value={form.content}
              onChange={handleChange}
              disabled={loading} // Disable input while loading
              required
            />
          </div>
          <div className="w-full">
            <label className="label text-sm" htmlFor="cover">
              Cover Image
            </label>
            <input
              className="input input-bordered w-full rounded-none border-slate-700 mb-10"
              id="cover"
              type="text"
              name="cover"
              placeholder="Image Link"
              value={form.cover}
              onChange={handleChange}
              disabled={loading} // Disable input while loading
              required
            />
          </div>
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
              {loading ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostEdit;
