"use client"; // needed for WOW animation

import Image from "next/image";

export default function ClientsLogo() {
  return (
    <section className="clients-logo-section pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="client-logo wow fadeInUp"
              data-wow-delay=".2s"
            >
              <Image
                src="/img/clients/brands.svg"
                alt="Our Clients"
                width={1200}
                height={200}
                className="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
