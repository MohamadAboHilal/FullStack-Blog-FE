import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { id, title, content, cover } = post;
  const truncatedContent =
    content.length > 30 ? `${content.substring(0, 30)}...` : content;

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {cover && (
        <figure className="h-48 overflow-hidden">
          <img
            src={cover}
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = "https://placehold.co/600x400?text=Cover+Image";
              e.target.alt = "Image not available";
            }}
          />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title text-xl font-bold">{title}</h2>
        <p className="text-gray-600">{truncatedContent}</p>
        <div className="card-actions justify-end mt-4">
          <Link to={`/post/${id}`} className="text-md font-bold">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
