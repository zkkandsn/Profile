import { Routes, Route, Navigate } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
