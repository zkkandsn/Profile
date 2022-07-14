import { Link} from "react-router-dom";
import React from "react";
import "../styles/header.css";

export default function Header() {
  function onClicked(){
    document.querySelector("a").style.textDecoration = "underline"
  }
  return (
    <>
      <div className="container header">
        <div className="col-10 d-flex m-auto justify-content-between">
          <Link onClick={onClicked} to="/">Home</Link>
          <Link id="click" onClick={onClicked} to="/about">About</Link>
          <Link id="click" onClick={onClicked} to="/about1">About1</Link>
          <Link id="click" onClick={onClicked} to="/contact">Contact</Link>
          
          <a id="click" onClick={onClicked} target="_blank" rel="noreferrer" href="http://www.facebook.com/z1kkan">Facebook</a>
          <a target="_blank" rel="noreferrer" href="http://www.instagram.com/zkkan">Instagram</a>
        </div>
      </div>
    </>
  );
}
