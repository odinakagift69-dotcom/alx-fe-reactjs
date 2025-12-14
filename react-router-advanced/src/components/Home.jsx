import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home</h1>
    <nav>
      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/post/123">Dynamic Post</Link>
    </nav>
  </div>
);

export default Home;
