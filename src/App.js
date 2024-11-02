import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Homepage/HomePage";
import Gallery from "./Homepage/Gallery";
import Enquiry from "./Homepage/Enquiry";
import AboutUs from "./Homepage/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/enquiry" element={<Enquiry />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default App;
