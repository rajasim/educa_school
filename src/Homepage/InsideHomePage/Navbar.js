import React, { useRef } from "react";
import "./Navbar.css";
import logo from "../../Images/Image 571.png";
import logoname from "../../Images/Image 572.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const nav = useNavigate();
  const optionref = useRef();
  return (
    <>
      <nav className="navbar">
        <figure
          onClick={() => {
            nav("/");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src={logo} />
          <img src={logoname} />
        </figure>
        <aside>
          <blockquote>
            <mark
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "purple",
                color: "white",
                padding: "0 0.5rem",
              }}
              onClick={() => nav("/enquiry")}
            >
              <i class="fa-solid fa-address-card"></i>
              <p>Enquiry Form</p>
            </mark>
            <mark
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "darkblue",
                color: "white",
                padding: "0 0.5rem",
              }}
              onClick={() => {
                window.scrollTo({
                  top: 3500,
                  behavior: "smooth",
                });
              }}
            >
              <i class="fa-regular fa-user"></i>
              <p>Contact Us</p>
            </mark>
          </blockquote>
          <blockquote>
            <mark>
              <a href="/">Home</a>
            </mark>
            <mark>
              <p onClick={() => nav("/about")}>About Eduka</p>
            </mark>

            <mark>
              <p>Admissions</p>
              <i class="fa-solid fa-caret-down"></i>
            </mark>
            <mark
              onClick={() => {
                window.scrollTo({
                  top: 3000,
                  behavior: "smooth",
                });
              }}
            >
              <p>Locate Us</p>
            </mark>
          </blockquote>
        </aside>
        <aside ref={optionref} style={{ display: "none" }}>
          <blockquote>
            <mark
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "purple",
                color: "white",
                padding: "0 0.5rem",
              }}
              onClick={() => nav("/enquiry")}
            >
              <i class="fa-solid fa-address-card"></i>
              <p>Enquiry Form</p>
            </mark>
            <mark
              style={{
                borderRadius: "0.5rem",
                backgroundColor: "darkblue",
                color: "white",
                padding: "0 0.5rem",
              }}
              onClick={() => {
                window.scrollTo({
                  top: 3500,
                  behavior: "smooth",
                });
              }}
            >
              <i class="fa-regular fa-user"></i>
              <p>Contact Us</p>
            </mark>
          </blockquote>
          <blockquote>
            <mark>
              <a href="/">Home</a>
            </mark>
            <mark>
              <p onClick={() => nav("/about")}>About Eduka</p>
            </mark>

            <mark>
              <p>Admissions</p>
              <i class="fa-solid fa-caret-down"></i>
            </mark>
            <mark
              onClick={() => {
                window.scrollTo({
                  top: 3000,
                  behavior: "smooth",
                });
              }}
            >
              <p>Locate Us</p>
            </mark>
          </blockquote>
        </aside>
        <button
          className="barsIcon"
          onClick={() => {
            if (optionref.current.style.display === "flex") {
              optionref.current.style.display = "none";
            } else {
              optionref.current.style.display = "flex";
            }
          }}
        >
          <i class="fa-solid fa-bars"></i>
        </button>
      </nav>
      <div className="belowNavbar"></div>
    </>
  );
}

export default Navbar;
