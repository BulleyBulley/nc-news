import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav_class">
      <Link className="nav_text" to="/reading_list">
        Reading List
      </Link>
      <Link className="nav_text" to="/post">
        Post
      </Link>
      <Link className="nav_text" to="/login">
        Login
      </Link>
    </nav>
  );
};

export default Nav;
