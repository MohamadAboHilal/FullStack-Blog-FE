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

  useEffect(() => {
    console.log(form);
  }, [form]);

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
      console.log("Post created:", form);
      console.log("Redirecting to Home page...");
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
    <div className="container mx-auto m-12 px-6">
      <h2 className="text-xl font-bold mb-4 text-center">Create a Post</h2>
      <div className="create-post-page min-h-screen flex flex-col items-center justify-center p-4">
        <form className="form-control m-6 max-w-xl" onSubmit={handleCreate}>
          <label className="label text-sm" htmlFor="author">
            Author
          </label>
          <input
            className="input input-bordered w-full md:w-[250%] rounded-none border-slate-700 mb-3"
            id="author"
            type="text"
            name="author"
            placeholder="Name of the Author"
            value={form.author}
            onChange={handleChange}
            disabled={loading} // Disable input while loading
          />
          <label className="label text-sm" htmlFor="title">
            Title
          </label>
          <input
            className="input input-bordered w-full md:w-[250%] rounded-none border-slate-700 mb-3"
            id="title"
            type="text"
            name="title"
            placeholder="Title of the Post"
            value={form.title}
            onChange={handleChange}
            disabled={loading} // Disable input while loading
            required
          />
          <label className="label text-sm" htmlFor="content">
            Content
          </label>
          <textarea
            className="textarea textarea-bordered md:w-[250%] rounded-none border-slate-700 mb-3"
            id="content"
            name="content"
            placeholder="Post Content"
            value={form.content}
            onChange={handleChange}
            disabled={loading} // Disable input while loading
            required
          />
          <label className="label text-sm" htmlFor="cover">
            Cover Image
          </label>
          <input
            className="input input-bordered w-full md:w-[250%] rounded-none border-slate-700 mb-3"
            id="cover"
            type="text"
            name="cover"
            placeholder="Image Link"
            value={form.cover}
            onChange={handleChange}
            disabled={loading} // Disable input while loading
            required
          />
          <div className="button-create-post flex flex-row justify-center space-x-2 mt-10">
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
              {loading ? "Creating..." : "Create Post"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;
