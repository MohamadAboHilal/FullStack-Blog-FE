import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { createPost } from "../services/api";

const CreatePostPage = () => {
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
  });

  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle post creation
  const handleCreate = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      await createPost(form); // Use the imported `createPost` function
      setForm({ author: "", title: "", content: "", cover: "" });
      navigate("/"); // Redirect to the Home page
      toast.success("Post created"); // Toast success
    } catch (error) {
      console.error("Error creating post:", error);
      toast.error("Error creating post"); // Toast error
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 h-auto pb-30 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-xl font-bold text-black mb-8 text-center">
          Create a Post
        </h2>
        <form
          className="mx-auto max-w-xl space-y-4 w-full"
          onSubmit={handleCreate}
        >
          <div className="w-full">
            <label
              className="label text-sm font-bold, text-black"
              htmlFor="author"
            >
              Author
            </label>
            <input
              className="input input-bordered w-full font-bold, rounded-none border-slate-700"
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
            <label
              className="label text-sm font-bold, text-black"
              htmlFor="title"
            >
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
            <label
              className="label text-sm font-bold, text-black"
              htmlFor="content"
            >
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
            />{" "}
          </div>
          <div className="w-full">
            <label
              className="label text-sm font-bold, text-black"
              htmlFor="cover"
            >
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
              className={`bg-white border border-black hover:bg-zinc-300 text-black font-light text-sm py-2 px-4 ${
                loading ? "btn-disabled" : ""
              }`}
            >
              Cancel
            </Link>
            <button
              className={`bg-black hover:bg-zinc-700 text-white font-light text-sm py-2 px-4 ${
                loading ? "btn-disabled" : ""
              }`}
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? "Creating..." : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
