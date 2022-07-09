import { Link, Route, Routes } from "react-router-dom";
import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <>
      <div className="container header">
        <div className="col-10 d-flex m-auto justify-content-between">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a target="_blank" href="http://www.facebook.com/z1kkan">Facebook</a>
          <a target="_blank" href="http://www.instagram.com/zkkan">Instagram</a>
        </div>
      </div>
    </>
  );
}
