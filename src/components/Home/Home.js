import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";

function Home() {
  return (
    <main>
      <h1>Web Accessibility Demo Examples</h1>
      <ul>
        <li>
          <Link to="/bad-semantics">Bad Semantic HTML</Link>
        </li>
        <li>
          <Link to="/good-semantics">Good Semantic HTML</Link>
        </li>
        <li>
          <Link to="/bad-form">Bad Inaccessible Form</Link>
        </li>
        <li>
          <Link to="/good-form">Accessible Form</Link>
        </li>
        <li>
          <Link to="/good-images">Accessible Images</Link>
        </li>
        <li>
          <Link to="/bad-images">Inaccessible Images</Link>
        </li>
      </ul>
    </main>
  );
}

export default Home;
