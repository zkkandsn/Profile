import { Link } from "react-router-dom";
import "../styles/abouts.css";
import { useEffect, useState } from "react";
import Footer from "./Footer";

export default function Abouts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  function onClick() {
    let click = document.querySelector("#icon");
    document.body.classList.toggle("dark-theme");
  }
  return (
    <>
      <div className="aboutsHeight">
        <div className="abouts col-8 d-flex m-auto justify-content-between">
          <Link id="myDiv" to="/">
            Home
          </Link>
          <Link to="/about">About</Link>
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
          <img
            onClick={onClick}
            className="mt-4"
            src="./pictures/moon.png"
            id="icon"
            alt=""
          />
          <img
            onClick={onClick}
            className="mt-4"
            src="./pictures/sun.png"
            id="icon"
            alt=""
          />
        </div>
        <div className="cards col-10 d-flex m-auto align-items-center mt-5 justify-content-between">
          <div className="card ms-4 col-4 ">
            <div className="back d-flex justify-content-center">
              <img src={data?.img?.profile1} alt="" />
              <h2 className="d-flex align-items-center">About me</h2>
            </div>
            <div className="front">
              <div className="text-ctr ms-2">
                <h2 className="over">Over Me</h2>
                <h3 className="mt-2">
                  {data.firstname}&nbsp;
                  {data.name}
                </h3>
                <li>{data.born}</li>
                <li>{data.highschool}</li>
                <li>{data.university}</li>
                <li>{data.university1}</li>
                <li>{data.academy}</li>
              </div>
            </div>
          </div>
          <div className="card col-4">
            <div className="back d-flex justify-content-center">
              <img src={data?.img?.profile2} alt="" />
              <h2 className="d-flex align-items-center">Hobby</h2>
            </div>
            <div className="front">
              <div className="text-ctr ms-2">
                <h2 className="over">Over Me</h2>

                <h3>Hobbys</h3>
                <li>{data?.hobbys?.hobby1}</li>
                <li>{data?.hobbys?.hobby2}</li>
                <li>{data?.hobbys?.hobby3}</li>
                <li>{data?.hobbys?.hobby4}</li>
                <li>{data?.hobbys?.hobby5}</li>
                <li>{data?.hobbys?.hobby6}</li>
              </div>
            </div>
          </div>
          <div className="card me-4 col-4">
            <div className="back d-flex justify-content-center">
              <img src={data?.img?.profile3} alt="" />
              <h2 className="d-flex align-items-center">Life style</h2>
            </div>
            <div className="front">
              <div className="text-ctr ms-2">
                <h2 className="over">Over Me</h2>
                <h3>Life Style</h3>
                <li>{data?.lifestyle?.style1}</li>
                <li>{data?.lifestyle?.style2}</li>
                <li>{data?.lifestyle?.style3}</li>
                <li>{data?.lifestyle?.style4}</li>
                <li>{data?.lifestyle?.style5}</li>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
