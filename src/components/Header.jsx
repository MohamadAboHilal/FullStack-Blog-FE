import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar px-0 pt-4">
      <div className="w-10/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-3xl font-extrabold">
            blogg.
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/create-post" className="btn btn-neutral">
            + Create Post
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
