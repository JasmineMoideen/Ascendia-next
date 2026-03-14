import "./globals.css";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";
import StickyHeader from "@/components/StickyHeader";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from "next/script";


export const metadata = {
  title: "Ascendia",
  description: "Integrated AI, business, trade, and promotion solutions for global growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="stylesheet" href="/css/bootstrap-5.0.0-beta1.min.css" />
        <link rel="stylesheet" href="/css/LineIcons.2.0.css" />
        <link rel="stylesheet" href="/css/tiny-slider.css" />
        <link rel="stylesheet" href="/css/animate.css" />
        <link rel="stylesheet" href="/css/lindy-uikit.css" />
      </head>
      <body>
        {/* <Preloader /> */} 
         <Hero />
        <Services />
        <About />
        <Contact />
        <Footer />
         <WhatsAppButton />
        {/* Custom cursor logic */}
        <CursorEffect />
        <StickyHeader />
        {/* External JS files */}
        <Script
          src="/js/bootstrap-5.0.0-beta1.min.js"
          strategy="afterInteractive"
        />
        <Script src="/js/tiny-slider.js" strategy="afterInteractive" />
        <Script src="/js/wow.min.js" strategy="afterInteractive" />
        {/* <Script src="/js/main.js" strategy="afterInteractive" /> */}
      </body>
    </html>
  );
}
