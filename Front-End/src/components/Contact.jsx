import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  return (
    <>
      <div className="about col-8 d-flex m-auto justify-content-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <a target="_blank" href="http://www.facebook.com/z1kkan">Facebook</a>
      </div>
      <div className="mt-5 align-items-center flex-column m-auto d-flex">
        <h1 className="">Contact me</h1>
        <h3>Таньтай хамтрахдаа таатай байх болно.</h3>
      </div>
      <div className="d-flex mt-5 col-10 m-auto justify-content-around">
        <form className="d-flex flex-column col-5" action="Email">
          <input id="name" type="text" placeholder="Name" />
          <input id="name" className="mt-2" type="email" placeholder="Email" />
          <input className="message mt-2" type="text" placeholder="Message" />
          <button className="button">Submit</button>
        </form>
        <div className="d-flex flex-column col-4">
          <div className="d-flex">
            <img className="icon1" src="./pictures/marker.svg" alt="" />
            <p>{data.address}</p>
          </div>
          <div className="d-flex">
            <img className="icon1" src="./pictures/phone-call.svg" alt="" />
            <a className="phone" href="tel:976-99844998">
              {data?.phone}
            </a>
          </div>
          <div className="d-flex mt-3">
            <img className="icon1" src="./pictures/envelope.svg" alt="" />
            <a className="phone" href="mailto:zkkandsn@gmail.com">
              {data?.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
