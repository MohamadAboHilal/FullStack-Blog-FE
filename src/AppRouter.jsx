import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { PostProvider } from "./context/PostContext";

const AppRouter = () => {
  return (
    <PostProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreatePostPage />} />
          <Route path="/post/:id" element={<PostDetailsPage />} />
        </Routes>
        <Footer />
      </Router>
    </PostProvider>
  );
};

export default AppRouter;
