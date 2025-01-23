import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="navbar px-0 pt-2 border-b border-black pb-2 bg-white">
      <div className="w-11/12 mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-4xl font-medium hover:italic">
            blogg.
          </Link>
        </div>
        <div className="flex-none">
          <Link
            to="/create"
            className="bg-black hover:bg-slate-700 text-white font-light text-sm py-2 px-4"
          >
            + Create Post
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
