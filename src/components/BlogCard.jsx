import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { id, title, content, cover } = post;
  const truncatedContent =
    content.length > 50 ? `${content.substring(0, 50)}...` : content;

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      {cover && (
        <figure className="max-h-72 overflow-hidden">
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
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-gray-600 text-sm">{truncatedContent}</p>
        <div className="card-actions justify-start mt-4">
          <Link
            to={`/post/${id}`}
            className="text-sm font-regular hover:italic"
          >
            Read More ->
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
