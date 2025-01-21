import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { createPost } from "../services/api";

const CreatePostPage = () => {
  const [form, setForm] = useState({
    author: "",
    title: "",
    content: "",
    cover: "",
  });

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
    }
  };

  return (
    <form className="form-control m-5" onSubmit={handleCreate}>
      <h2 className="text-2xl">Create Post</h2>
      <label className="label" htmlFor="author">
        Author
      </label>
      <input
        className="input input-bordered w-full max-w-xs"
        id="author"
        type="text"
        name="author"
        placeholder="Name of the Author"
        value={form.author}
        onChange={handleChange}
      />
      <label className="label" htmlFor="title">
        Title
      </label>
      <input
        className="input input-bordered w-full max-w-xs"
        id="title"
        type="text"
        name="title"
        placeholder="Title of the Post"
        value={form.title}
        onChange={handleChange}
        required
      />
      <label className="label" htmlFor="content">
        Content
      </label>
      <textarea
        className="textarea textarea-bordered"
        id="content"
        name="content"
        placeholder="Post Content"
        value={form.content}
        onChange={handleChange}
        required
      />
      <label className="label" htmlFor="cover">
        Cover Image
      </label>
      <input
        className="input input-bordered w-full max-w-xs"
        id="cover"
        type="text"
        name="cover"
        placeholder="Image Link"
        value={form.cover}
        onChange={handleChange}
        required
      />
      <button
        className="btn btn-xs mt-3 sm:btn-sm md:btn-md lg:btn-lg"
        type="submit"
      >
        Create Post
      </button>
    </form>
  );
};

export default CreatePostPage;
