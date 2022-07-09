import "../styles/main.css";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Collapse } from "react-bootstrap";

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
  console.log(data);
  return (
    <>
      <div className="background">
        <Header />
        <div className="m-auto d-flex flex-column mt-5">
          <img
            className="profilePic"
            src="./pictures/profile.jpeg"
            alt="profile"
          />
          <div
            className="name col-8 m-auto d-flex flex-column align-items-center
        "
          >
            <h2 className="">{data.name}</h2>
            <h4>
              {data && data?.major?.major1}|{data && data?.major?.major2}|
              {data && data?.major?.major3}
            </h4>
          </div>
        </div>

        <div className="container mt-5">
          <div>
            <div className="main mb-4">
              <p
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                type="button"
              >
                About me
              </p>
              <Collapse in={open}>
                <div className="aboutme" id="example-collapse-text">
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
                <div className="aboutme" id="example-collapse-text">
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
                <div className="aboutme" id="example-collapse-text">
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
                      <a className="phone1"  href="tel:976-99844998">
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
                <div className="aboutme d-flex justify-content-between col-6 m-auto" id="example-collapse-text">
                  <li>{data?.family?.wife}</li>
                  <li>{data?.family?.girl}</li>
                  <li>{data?.family?.boy}</li>
                </div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
