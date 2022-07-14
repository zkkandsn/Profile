import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/contact.css";
import Footer from "./Footer";
import emailjs from '@emailjs/browser';
import React, {useRef} from "react"


export default function Contact() {
  const form =useRef()
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/api")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_nxrb07z', form.current, 'eCJkrvRxhE1uRyQ0G')
      .then((result) => {
          window.alert("Амжилттай илгээгдлээ");
      }, (error) => {
          window.alert("Амжилтгүй дахин оролдоно уу.");
      });
      e.target.reset()
  };
  return (
    <>
      <div className="about col-8 d-flex m-auto justify-content-between">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/about1">About1</Link>
        <Link to="/contact">Contact</Link>
        <a target="_blank" rel="noreferrer" href="http://www.facebook.com/z1kkan">Facebook</a>
        <a target="_blank" rel="noreferrer" href="http://www.instagram.com/zkkan">Instagram</a>
      </div>
      <div className="mt-5 align-items-center flex-column m-auto d-flex">
        <h1 className="">Contact me</h1>
        <h3>Таньтай хамтрахдаа таатай байх болно.</h3>
      </div>
      <div className="d-flex mt-5 col-8 m-auto justify-content-around">
        <form ref={form} onSubmit={sendEmail} className="d-flex flex-column col-5" action="Email">
          <input id="name" type="text" name="name" placeholder="Name" />
          <input id="name" className="mt-2" name="email" type="email" placeholder="Email" />
          <input id="name" className="mt-2" type="text" name="subject" placeholder="Subject" />
          <textarea name="message" className="mt-2" id="messages" placeholder="Message"></textarea>
          <button className="button" value="Send message">Submit</button>
        </form>
        <div className="d-flex flex-column col-4">
          <div className="d-flex">
            <img className="icon1" src="./pictures/marker.svg" alt="" />
            <a
                        className="phone"
                        target="_blank"
                        rel="noreferrer"
                        href="https://www.google.com/maps/@47.8975143,106.8929807,19.07z"
                      >
                        {data.address}
                      </a>
          </div>
          <div className="d-flex">
            <img className="icon1 mt-2" src="./pictures/phone-call.svg" alt="" />
            <a className="phone mt-2" href="tel:976-99844998">
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
      <Footer />
    </>
  );
}
