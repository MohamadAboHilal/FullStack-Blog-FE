import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
  const { id, title, content, cover } = post;
  const truncatedContent =
    content.length > 50 ? `${content.substring(0, 50)}...` : content;

  return (
    <div className="card w-full shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-none bg-white">
      {cover && (
        <figure className="max-h-64 overflow-hidden">
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
      <div className="card-body p-0 pt-4">
        <h2 className="card-title text-md font-bold">{title}</h2>
        <p className="text-gray-600 text-xs">{truncatedContent}</p>
        <div className="card-actions justify-start mt-4">
          <Link
            to={`/post/${id}`}
            className="text-xs font-regular hover:italic"
          >
            Read More &#8250;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
