"use client"; // required because WOW animations use browser APIs

export default function Services() {
  return (
    <section id="services" className="feature-section feature-style-5">
      <div className="container">
        {/* Section title */}
        <div className="row justify-content-center">
          <div className="col-xxl-5 col-xl-5 col-lg-7 col-md-8">
            <div className="section-title text-center mb-60">
              <h3 className="mb-15 wow fadeInUp" data-wow-delay=".2s">
                Our Services
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".4s">
                AI, business, trade, and promotion solutions delivered with
                global expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="features-section">
          <div className="row">
            {/* Service 1 */}
            <div className="col-lg-6 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".2s">
                <div className="icon">
                  <i className="lni lni-code-alt"></i>
                </div>
                <div className="content">
                  <h5>AI & Technology Development</h5>
                  <p>Artificial Intelligence Application Software Development</p>
                  <p>Artificial Intelligence General Application Systems</p>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="col-lg-6 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".4s">
                <div className="icon">
                  <i className="lni lni-briefcase"></i>
                </div>
                <div className="content">
                  <h5>Business Support & Promotion Services</h5>
                  <p>Incorporation to Breakeven Support</p>
                  <p>Marketing, Branding & Business Promotion Services</p>
                  <p>
                    Product & Project Promotion Services (Domestic &
                    International)
                  </p>
                  <p>Business Matching & Lead Generation Services</p>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="col-lg-6 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div className="icon">
                  <i className="lni lni-package"></i>
                </div>
                <div className="content">
                  <h5>Trade, Logistics & Import–Export Services</h5>
                  <p>
                    Domestic Freight Transportation & Logistics Coordination
                  </p>
                  <p>Goods Import & Export Services</p>
                  <p>Technology Import & Export Solutions</p>
                  <p>Import & Export Agency & Documentation Services</p>
                </div>
              </div>
            </div>

            {/* Service 4 */}
            <div className="col-lg-6 col-md-6">
              <div className="single-feature wow fadeInUp" data-wow-delay=".6s">
                <div className="icon">
                  <i className="lni lni-handshake"></i>
                </div>
                <div className="content">
                  <h5>Specialized Promotion & Agency Services</h5>
                  <p>
                    Prefabricated Housing Promotion & Project Facilitation
                  </p>
                  <p>Smart Home & Smart Fitness Equipment Promotion</p>
                  <p>Education Consultancy & Student-to-Institution</p>
                  <p>Overseas Business & Project Referral Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
