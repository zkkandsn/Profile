import { Routes, Route, Navigate } from "react-router-dom";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Abouts from "../components/Abouts"

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about1" element={<Abouts />} />
      </Routes>
    </div>
  );
}
