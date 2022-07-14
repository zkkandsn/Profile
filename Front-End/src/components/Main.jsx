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
  color: "black"
}
  function background1() {
    document.querySelector("#background").style.background =
      "url('./pictures/background.jpg') center center /cover";
    document.querySelector("h2").style.color = "white";
    document.querySelector("h4").style.color = "white";
    document.querySelector("p").style.color = "white";
    document.querySelector("div").style.color = "white";
  }
  function background2() {
    document.querySelector("#background").style.background =
      "url('./pictures/background1.jpg') center center /cover";
    document.querySelector("h2").style.color = "black";
    document.querySelector("h4").style.color = "black";
    document.querySelector("p").style.color = "black";
    document.querySelector("#blackTag").style.color = "black";
  }
  function background3() {
    document.querySelector("#background").style.background =
      "rgb(250, 140, 151)";
    document.querySelector("h2").style.color = "white";
    document.querySelector("h4").style.color = "white";
    document.querySelector("p").style.color = "white";
    document.querySelector("div").style.color = "white";
  }
  return (
    <>
      <div id="background">
        <Header />
        <div className="m-auto d-flex flex-column mt-5">
          <img className="profilePic" src={data?.img?.profile} alt="profile" />
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
          <div>
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
            <img src={data?.backgrounds?.background} alt="" />
          </div>
          <div className="backChange mt-1" id="btn" onClick={background2}>
            <img src={data?.backgrounds?.background1} alt="" />
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
