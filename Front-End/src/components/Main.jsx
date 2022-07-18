import "../styles/main.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Collapse } from "react-bootstrap";
import Footer from "./Footer";

export default function Main() {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const style = {
    color: "black",
  };
  function background1() {
    document.querySelector("#background").style.background =
      "url('http://localhost:3000/pictures/background.jpeg') center center /cover";
    const main = document.querySelectorAll(".main");
    for (let i = 0; i < main.length; i++) {
      main[i].style.borderColor = "#FFFF";
    }
    const h4 = document.querySelectorAll("h4");
    for (let i = 0; i < h4.length; i++) {
      h4[i].style.color = "#FFFF";
    }
    const p = document.querySelectorAll("p");
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "#FFFF";
    }
    const blackTag = document.querySelectorAll("h2");
    for (let i = 0; i < blackTag.length; i++) {
      blackTag[i].style.color = "#FFFF";
    }
    const aTag = document.querySelectorAll("a");
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.color = "#FFFF";
    }
  }
  function background2() {
    //   let backGround2 = document.querySelector("#background")
    //  backGround2.style.background ="url('./pictures/background.webp') center center /cover";
    //  document.body.classList.toggle("white-theme")
    document.querySelector("#background").style.background =
      "url('http://localhost:3000/pictures/background.webp') center center /cover";
    const main = document.querySelectorAll(".main");
    for (let i = 0; i < main.length; i++) {
      main[i].style.borderColor = "#FFFF";
    }
    const h4 = document.querySelectorAll("h4");
    for (let i = 0; i < h4.length; i++) {
      h4[i].style.color = "#FFFF";
    }
    const p = document.querySelectorAll("p");
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "#FFFF";
    }
    const blackTag = document.querySelectorAll("h2");
    document.querySelectorAll("a");
    for (let i = 0; i < blackTag.length; i++) {
      blackTag[i].style.color = "#FFFF";
    }
    const aTag = document.querySelectorAll("a");
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.color = "#FFFF";
    }
  }
  function background3() {
    //  let backGround3 = document.querySelector("#background")
    //  backGround3.style.background ="rgb(250, 140, 151)";
    // document.body.classList.toggle("dark-theme")

    document.querySelector("#background").style.background =
      "rgb(250, 140, 151)";
    const main = document.querySelectorAll(".main");
    for (let i = 0; i < main.length; i++) {
      main[i].style.borderColor = "black";
    }
    const h4 = document.querySelectorAll("h4");
    for (let i = 0; i < h4.length; i++) {
      h4[i].style.color = "black";
    }
    const p = document.querySelectorAll("p");
    for (let i = 0; i < p.length; i++) {
      p[i].style.color = "black";
    }
    const blackTag = document.querySelectorAll("h2");
    for (let i = 0; i < blackTag.length; i++) {
      blackTag[i].style.color = "black";
    }
    const aTag = document.querySelectorAll("a");
    for (let i = 0; i < aTag.length; i++) {
      aTag[i].style.color = "black";
    }
  }
  return (
    <>
      <div id="background">
        <Header />
        <div className="m-auto d-flex flex-column mt-5">
          <img
            className="profilePic"
            src="http://localhost:3000/pictures/profile.jpeg"
            alt="profile"
          />
          <div
            className="name col-8 m-auto d-flex flex-column align-items-center
        "
          >
            <h2>{data.name}</h2>
            <h4>
              {data && data?.major?.major1}|{data && data?.major?.major2}|
              {data && data?.major?.major3}
            </h4>
          </div>
        </div>

        <div className="container mt-5">
          <div className="col-8 m-auto">
            <div id="blackTag" className="main mb-4">
              <p
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                type="button"
              >
                About me
              </p>
              <Collapse in={open}>
                <div className="aboutmes" id="example-collapse-text">
                  <li>{data.born}</li>
                  <li>{data.highschool}</li>
                  <li>{data.university}</li>
                  <li>{data.university1}</li>
                  <li>{data.academy}</li>
                </div>
              </Collapse>
            </div>
            <div className="main mb-4">
              <p
                onClick={() => setOpen1(!open1)}
                aria-controls="example-collapse-text"
                aria-expanded={open1}
                type="button"
              >
                My work
              </p>
              <Collapse in={open1}>
                <div className="aboutmes" id="example-collapse-text">
                  <li>{data.work}</li>
                </div>
              </Collapse>
            </div>
            <div className="main mb-4">
              <p
                onClick={() => setOpen2(!open2)}
                aria-controls="example-collapse-text"
                aria-expanded={open2}
                type="button"
              >
                Contact me
              </p>
              <Collapse in={open2}>
                <div className="aboutmes" id="example-collapse-text">
                  <div className="d-flex  justify-content-between col-8 mb-4 m-auto align-items-start">
                    <div className="d-flex">
                      <img
                        className="icon1"
                        src="./pictures/marker.svg"
                        alt=""
                      />
                      <a
                        className="phone1"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/@47.8975143,106.8929807,19.07z"
                      >
                        {data.address}
                      </a>
                    </div>
                    <div className="d-flex">
                      <img
                        className="icon1"
                        src="./pictures/phone-call.svg"
                        alt=""
                      />
                      <a className="phone1" href="tel:976-99844998">
                        {data?.phone}
                      </a>
                    </div>
                    <div className="d-flex">
                      <img
                        className="icon1"
                        src="./pictures/envelope.svg"
                        alt=""
                      />
                      <a className="phone1" href="mailto:zkkandsn@gmail.com">
                        {data?.email}
                      </a>
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="main mb-4">
              <p
                onClick={() => setOpen3(!open3)}
                aria-controls="example-collapse-text"
                aria-expanded={open3}
                type="button"
              >
                My family
              </p>
              <Collapse in={open3}>
                <div className="aboutme" id="example-collapse-text">
                  <p style={style}>Эхнэр:</p> <p> {data?.family?.wife}</p>
                  <p style={style}>Охин:</p> <p> {data?.family?.girl}</p>
                  <p style={style}>Хүү:</p> <p> {data?.family?.boy}</p>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
        <div className="back-frem d-flex justify-content-center m-auto justify-content-around">
          <div className="backChange mt-1" onClick={background1}>
            <img src="http://localhost:3000/pictures/background.jpeg" alt="" />
          </div>
          <div className="backChange mt-1" id="btn" onClick={background2}>
            <img src="http://localhost:3000/pictures/background.webp" alt="" />
          </div>
          <div className="backChange mt-1" onClick={background3}>
            <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
