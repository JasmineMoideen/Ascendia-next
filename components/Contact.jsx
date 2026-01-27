"use client"; // required for form handling & icons

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch(
        "http://localhost/ascendia-backend/wp-json/leads/v1/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.number,
            subject: formData.subject,
            message: formData.message,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Submission failed");

      setStatus("Thank you! Your message has been sent.");
      setFormData({
        name: "",
        email: "",
        number: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section contact-style-3">
      <div className="container">
        {/* Section title */}
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-10">
            <div className="section-title text-center mb-50">
              <h3 className="mb-15">Get in touch</h3>
              <p>
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact form */}
          <div className="col-lg-8">
            <div className="contact-form-wrapper">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="name"
                        className="form-input"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <i className="lni lni-user"></i>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="email"
                        name="email"
                        className="form-input"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <i className="lni lni-envelope"></i>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="number"
                        className="form-input"
                        placeholder="Number"
                        value={formData.number}
                        onChange={handleChange}
                      />
                      <i className="lni lni-phone"></i>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="subject"
                        className="form-input"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <i className="lni lni-text-format"></i>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="single-input">
                      <textarea
                        name="message"
                        className="form-input"
                        placeholder="Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                      <i className="lni lni-comments-alt"></i>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-button">
                      <button type="submit" className="button">
                        <i className="lni lni-telegram-original"></i> Submit
                      </button>
                    </div>
                    {status && <p className="form-status">{status}</p>}
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact info */}
          <div className="col-lg-4">
            <div className="left-wrapper">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-phone"></i>
                    </div>
                    <div className="text">
                      <p>0045939863784</p>
                      <p>+004389478327</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-envelope"></i>
                    </div>
                    <div className="text">
                      <p>yourmail@gmail.com</p>
                      <p>admin@yourwebsite.com</p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 col-md-6">
                  <div className="single-item">
                    <div className="icon">
                      <i className="lni lni-map-marker"></i>
                    </div>
                    <div className="text">
                      <p>
                        广东省广州市黄埔区揽月路101号2楼267房， Room 267, 2nd
                        Floor, No. 101 Lanyue Road, Huangpu District, Guangzhou
                        City, Guangdong Province, China
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
