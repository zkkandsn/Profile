import { Link } from "react-router-dom";
import "../styles/about.css";
import { useEffect, useState } from "react";

export default function About() {
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
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href="http://www.facebook.com/z1kkan">Facebook</a>
        </div>
        <div className="d-flex mt-5">
          <img className="profile" src="./pictures/profile.jpeg" alt="" />
          <div>
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
        </div>
      </div>
    </>
  );
}
