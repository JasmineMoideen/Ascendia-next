"use client"; // required for WOW animations

import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="about-section about-style-4">
      <div className="container">
        <div className="row align-items-center">
          {/* Left content */}
          <div className="col-xl-5 col-lg-6">
            <div className="about-content-wrapper">
              <div className="section-title mb-30">
                <h3 className="mb-25 wow fadeInUp" data-wow-delay=".2s">
                  About Us
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                  We are a multidisciplinary solutions company focused on
                  driving innovation, growth, and global connectivity.
                </p>
              </div>

              <ul>
                <li className="wow fadeInUp" data-wow-delay=".35s">
                  <i className="lni lni-checkmark-circle"></i>
                  By combining artificial intelligence, strategic business
                  support, international trade expertise, and specialized
                  promotion services, we help startups, enterprises, and
                  institutions scale efficiently and sustainably.
                </li>

                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <i className="lni lni-checkmark-circle"></i>
                  Our approach is practical, result-oriented, and globally
                  aligned—ensuring every project moves forward with clarity,
                  compliance, and measurable impact.
                </li>

                <li className="wow fadeInUp" data-wow-delay=".45s">
                  <i className="lni lni-checkmark-circle"></i>
                  Stop wasting time and money designing and managing a website
                  that doesn’t get results.
                </li>
              </ul>

              <a
                href="#contact"
                className="button button-lg radius-10 wow fadeInUp"
                data-wow-delay=".5s"
              >
                Talk To Our Experts
              </a>
            </div>
          </div>

          {/* Right image */}
          <div className="col-xl-7 col-lg-6">
            <div
              className="about-image text-lg-right wow fadeInUp"
              data-wow-delay=".5s"
            >
              <Image
                src="/img/about/about-4/about-img.jpg"
                alt="About Ascendia"
                width={600}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
