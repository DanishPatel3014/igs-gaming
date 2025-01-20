import React from "react";
import { useState } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitContactForm = async () => {
    const axios = require('axios');
  const FormData = require('form-data');
  let data = new FormData();
  data.append('name', 'danishgb');
  data.append('email', 'danish@.com');
  data.append('phone', '00222565');
  data.append('message', 'fddfdfdf');

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'https://innovativegamestudio.com/submit.php',

    data : data
  };

  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });

  };

  return (
    <>
      <section className="team-sec py-48" data-scroll-section>
        <div className="container mx-auto">
          <div className="sr-wrap mb-36">
            <ul className="slist mb-20">
              <li>
                <div className="s-h">
                  <h4>work with us</h4>
                </div>
              </li>
              <li>
                <div className="m-h col-span-2">
                  <h1>
                    Hey! Lets chat
                    <br />
                    about your project
                  </h1>
                </div>
              </li>
            </ul>
          </div>
          <div className="ct-wrap">
            <form id="basicForm" method="post">
              <div className="ct-bx">
                <label>Whats your name?</label>
                <input
                  placeholder="Full Name"
                  type="text"
                  // onChange={(e) =>
                  //   setFormData({ ...formData, name: e.target.value })
                  // }
                  name="name"
                />
              </div>
              <div className="ct-bx">
                <label>Your email?</label>
                <input
                  placeholder="Email Address"
                  type="email"
                  // onChange={(e) =>
                  //   setFormData({ ...formData, email: e.target.value })
                  // }
                  name="email"
                />
              </div>
              <div className="ct-bx">
                <label>Whats your number?</label>
                <input
                  placeholder="Phone Number"
                  type="phone"
                  // onChange={(e) =>
                  //   setFormData({ ...formData, phone: e.target.value })
                  // }
                  name="phone"
                />
              </div>
              <div className="ct-bx">
                <label>Tell us about your project</label>
                <input
                  placeholder="Project overview"
                  type="text"
                  // onChange={(e) =>
                  //   setFormData({ ...formData, message: e.target.value })
                  // }
                  name="message"
                />
              </div>
              <div className="ct-btn">
                <button onClick={() => submitContactForm()}>
                  Submit Form
                  <span className="arw">
                    <BsArrowUpRight />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
