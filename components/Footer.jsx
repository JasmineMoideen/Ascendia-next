"use client"; // required for WOW animations & scroll interactions

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer footer-style-4">
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              {/* Logo & description */}
              <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".2s">
                  <div className="logo">
                    <Link href="/">
                      <Image
                        src="/img/logo/ascendiologo.png"
                        alt="Ascendia"
                        width={180}
                        height={45}
                      />
                    </Link>
                  </div>
                  <p className="desc">
                    Integrated AI, business, trade, and promotion solutions for
                    global growth.
                  </p>
                  <ul className="socials">
                    <li>
                      <a href="#" aria-label="Facebook">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Twitter">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="Instagram">
                        <i className="lni lni-instagram-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" aria-label="LinkedIn">
                        <i className="lni lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Quick links */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".3s">
                  <h6>Quick Link</h6>
                  <ul className="links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                  </ul>
                </div>
              </div>

              {/* Services */}
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget wow fadeInUp" data-wow-delay=".4s">
                  <h6>Services</h6>
                  <ul className="links">
                    <li>
                      <a href="#services">
                        Artificial Intelligence & Technology Development
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        Business Support & Promotion Services
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        Trade, Logistics & Import–Export Services
                      </a>
                    </li>
                    <li>
                      <a href="#services">
                        Specialized Promotion & Agency Services
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="copyright-wrapper wow fadeInUp"
            data-wow-delay=".2s"
          >
            <p>
              Design and Developed by{" "}
              <a href="#" rel="nofollow" target="_blank">
                Ascendia
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Cursor & Scroll-to-top */}
      <div className="cursor-dot"></div>
      <div className="cursor-circle"></div>
      <a href="#" className="scroll-top" aria-label="Scroll to top">
        <i className="lni lni-chevron-up"></i>
      </a>
    </>
  );
}
