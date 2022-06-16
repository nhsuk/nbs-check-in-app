import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Main({ name }) {
  return (
    <BrowserRouter>
      <h1>Hello {name}</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" component={<p>Home</p>} />
      </Routes>
    </BrowserRouter>
  );
}
