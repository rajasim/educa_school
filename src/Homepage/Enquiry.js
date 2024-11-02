import React, { useRef, useState } from "react";
import "./Enquiry.css";
import Navbar from "./InsideHomePage/Navbar";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Enquiry() {
  const [formdata, setformdata] = useState({
    name: "",
    phone: 0,
    gender: "",
    description: "",
  });

  const [loading, setloading] = useState(false);

  const formref = useRef();

  function handlesubmit(e) {
    e.preventDefault();
    setloading(true);
    axios
      .post("http://localhost/sendmail/sendmail.php", formdata)
      .then((res) => {
        setloading(false);
        toast.success("Submitted Successfully", {
          position: "bottom-center",
        });

        formref.current.reset();
      })
      .catch((err) => {
        console.log(err);
        setloading(false);
      });
  }
  return (
    <>
      <ToastContainer />
      <Navbar />
      <section className="enquiry">
        <h1>Student Enquiry Form</h1>
        <form onSubmit={handlesubmit} ref={formref}>
          <blockquote>
            <label>Name of Student</label>
            <input
              type="text"
              placeholder="Enter Full Name"
              onChange={(e) =>
                setformdata({ ...formdata, name: e.target.value })
              }
              onInput={(e) => {
                const input = e.target;
                const value = input.value;
                input.value = value.replace(/[^a-zA-Z\s]/g, "");
              }}
              required
            />
          </blockquote>
          <aside>
            <blockquote>
              <label>Phone Number</label>
              <input
                type="number"
                placeholder="Enter Phone Number"
                onChange={(e) =>
                  setformdata({ ...formdata, phone: e.target.value })
                }
                onInput={(e) => {
                  const input = e.target;
                  let value = input.value;
                  value = value.replace(/[^0-9]/g, "");
                  if (value.length > 10) {
                    value = value.slice(0, 10);
                  }

                  input.value = value;
                }}
                required
              />
            </blockquote>
            <blockquote>
              <label>Select Gender</label>
              <select
                onChange={(e) => {
                  setformdata({ ...formdata, gender: e.target.value });
                }}
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </blockquote>
          </aside>

          <blockquote>
            <label>Description</label>
            <textarea
              rows={10}
              placeholder="Enter Query Description"
              onChange={(e) =>
                setformdata({ ...formdata, description: e.target.value })
              }
              required
            />
          </blockquote>

          <button type="submit">
            {loading ? (
              <i
                class="fa-solid fa-spinner fa-spin"
                style={{ fontSize: "1.5rem" }}
              ></i>
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </section>
    </>
  );
}

export default Enquiry;
