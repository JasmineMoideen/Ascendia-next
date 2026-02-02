"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="hero-section-wrapper-5">
      {/* Header */}
      <header className="header header-6">
        <div className="navbar-area">
          <div className="container">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="#home">
                <Image
                  src="/img/logo/ascendiologo.png"
                  alt="Logo"
                  width={90}
                  height={90}
                />
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent6"
              >
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
                <span className="toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse sub-menu-bar"
                id="navbarSupportedContent6"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <a className="page-scroll active" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#about">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="page-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero content */}
      <div
        className="hero-section hero-style-5 img-bg"
        style={{
          backgroundImage: "url('/img/hero/hero-5/hero-bg.svg')",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div class="hero-content-wrapper">
                <h2>Empowering Innovation Accelerating Global Business</h2>
                <p className="mb-30 wow fadeInUp" data-wow-delay=".4s">
                  We deliver integrated solutions in AI, business growth, trade,
                  and promotion—turning vision into global value.
                </p>

                <a
                  href="#0"
                  className="button button-lg radius-50 wow fadeInUp"
                  data-wow-delay=".6s"
                >
                  Talk to Our Experts <i className="lni lni-chevron-right"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <Image
                src="/img/hero/hero-5/hero-img.png"
                alt="Hero"
                width={600}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
