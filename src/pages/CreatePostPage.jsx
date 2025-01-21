import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    console.log("Post created:", form);
    console.log("Redirecting to Home page...");
    navigate("/"); // Redirect to the Home page
    // try {
    //   await axios.post(`${VITE_BASE_URL}/posts`, {
    //     author: form.author,
    //     title: form.title,
    //     content: form.content,
    //     cover: form.cover,
    //   });
    //   setForm({ author: "", title: "", content: "", cover: "" });
    //   getPosts();
    // } catch (error) {
    //   console.error("Error creating post:", error);
    // }
  };

  return (
    <form onSubmit={handleCreate}>
      <h2>Create Post</h2>
      <label className="input input-bordered flex items-center gap-2">
        Author
        <input
          type="text"
          name="author"
          placeholder="Name of the Author"
          value={form.author}
          onChange={handleChange}
        />
      </label>
      <label className="input input-bordered flex items-center gap-2">
        Title
        <input
          type="text"
          name="title"
          placeholder="Title of the Post"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>

      <textarea
        rows="10"
        cols="50"
        name="content"
        placeholder="Content"
        value={form.content}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cover"
        placeholder="Cover - Image Link"
        value={form.cover}
        onChange={handleChange}
        required
      />
      <button type="submit">Create Post</button>
    </form>
  );
};

export default CreatePostPage;
