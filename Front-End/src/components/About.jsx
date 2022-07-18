import { Link } from "react-router-dom";
import "../styles/about.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import { Collapse } from "react-bootstrap";

export default function About() {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="container">
        <div className="about col-8 d-flex m-auto justify-content-between">
          <Link to="/">Home</Link>
          <Link id="clicked" to="/about">
            About
          </Link>
          <Link to="/about1">About1</Link>
          <Link to="/contact">Contact</Link>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.facebook.com/z1kkan"
          >
            Facebook
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="http://www.instagram.com/zkkan"
          >
            Instagram
          </a>
        </div>
        <div className="d-flex mt-5 justify-content-around">
          <div className="profile">
            <div
              onMouseOver={() => setOpen(!open)}
              onMouseLeave={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
              className="span d-flex justify-content-center align-items-center"
            >
              <span>ABOUT ME</span>
            </div>
            <img
              className="profile"
              src="http://localhost:3000/pictures/profile1.jpg"
              alt=""
            />
          </div>
          <div className="profile">
            <div
              onMouseOver={() => setOpen1(!open1)}
              onMouseLeave={() => setOpen1(!open1)}
              aria-controls="example-collapse-text"
              aria-expanded={open1}
              className="span d-flex justify-content-center align-items-center"
            >
              <span>HOBBY</span>
            </div>
            <img
              className="profile"
              src="http://localhost:3000/pictures/profile.jpeg"
              alt=""
            />
          </div>

          <div className="profile">
            <div
              onMouseOver={() => setOpen2(!open2)}
              onMouseLeave={() => setOpen2(!open2)}
              aria-controls="example-collapse-text"
              aria-expanded={open2}
              className="span d-flex justify-content-center align-items-center"
            >
              <span>LIFESTYLE</span>
            </div>
            <img
              className="profile"
              src="http://localhost:3000/pictures/profile3.jpg"
              alt=""
            />
          </div>
        </div>
        <Collapse in={open}>
          <div className="aboutName">
            <h1>
              {data.firstname}&nbsp;
              {data.name}
            </h1>
            <li>{data.born}</li>
            <li>{data.highschool}</li>
            <li>{data.university}</li>
            <li>{data.university1}</li>
            <li>{data.academy}</li>
          </div>
        </Collapse>
        <Collapse in={open1}>
          <li>{data?.hobbys?.hobby1}</li>
        </Collapse>
        <Collapse in={open2}>
          <li>{data?.lifestyle?.style1}</li>
        </Collapse>
        <Footer />
      </div>
    </>
  );
}
