import "../styles/main.css";
import { useEffect, useState } from "react";
import Header from "./Header";

export default function Main() {
  const [data, setData] = useState([]);
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
              <p type="button">About me</p>
            </div>
            <div className="main mb-4">
              <p type="button">My work</p>
            </div>
            <div className="main mb-4">
              <p type="button">Contact me</p>
            </div>
            <div className="main mb-4">
              <p type="button">My family</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
