import Link from "next/link";
import Image from "next/image";
import Header from "./components/commonV2/Header";
import Footer from "./components/commonV2/Footer";
import "./globals.css";

export const metadata = {
  title: "404 | Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <section className="pm-noise relative min-h-screen overflow-hidden py-8 md:pb-16 xl:py-20 ">
          {/* <div className="pointer-events-none absolute left-[-100px] top-[-90px] h-64 w-64 rounded-full bg-primary/15 blur-3xl" /> */}
          {/* <div className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-72 w-72 rounded-full bg-primary-light/20 blur-3xl" /> */}

          <div className="container relative z-10">
            <div className=" mx-auto max-w-[1140px] ">
              {/* <div className="mx-auto flex w-fit items-center gap-3 rounded-full border border-primary-light/40 bg-white px-4 py-2">
                <span className="font-inter text-14 uppercase tracking-[0.14em] text-primary">
                  Error 404
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-ping" />
                <span className="font-inter text-14 uppercase tracking-[0.1em] text-primary-light">
                  Lost Route
                </span>
              </div> */}

              <div className="relative mt-7 text-center">
                <h1 className="relative flex items-center justify-center gap-1 sm:gap-2 text-[105px] sm:text-[160px] xl:text-[210px] leading-[0.8] font-[350] tracking-[-0.04em]">
                  <span className="inline-block bg-gradient-to-b from-primary to-primary-light bg-clip-text text-transparent animate-bounce"
                    style={{ animationDuration: "1.6s" }}
                  >
                    4
                  </span>
                  <span
                    className="inline-block bg-gradient-to-b from-primary-light to-primary bg-clip-text text-transparent animate-bounce"
                    style={{ animationDuration: "1.6s", animationDelay: "0.15s" }}
                  >
                    0
                  </span>
                  <span
                    className="inline-block bg-gradient-to-b from-primary to-primary-light bg-clip-text text-transparent animate-bounce"
                    style={{ animationDuration: "1.6s", animationDelay: "0.3s" }}
                  >
                    4
                  </span>
                </h1>
              </div>

             

              <h2 className="mt-4 text-center text-50 md:text-60 leading-[1] text-forground-two font-[320]"> We can&apos;t find this page </h2>
              <p className="mx-auto mt-4  max-w-[58ch] text-center font-inter text-19 leading-lhtext-19 font-[300] text-lggray">
                The link may be outdated or the page has moved. Use the main
                routes below to get back on track.
              </p>

                {/* <div className="mt-2 flex justify-center">
                  <Image src="/assets/images/logo.svg" alt="EET Logo" width={130} height={130} className="h-auto w-[90px] sm:w-[110px] xl:w-[130px]" priority />
                </div> */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="/"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-black px-4 py-2 xl:px-7 xl:py-3 font-inter text-16 font-[400] text-black"
                >
                  <span className="pointer-events-none absolute inset-0 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full" />
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                    Back To Home
                  </span>
                </Link>
                <Link
                  href="/services"
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-primary px-4 py-2 xl:px-7 xl:py-3 font-inter text-16 font-[400] text-primary"
                >
                  <span className="pointer-events-none absolute inset-0 w-full bg-primary transition-all duration-300 ease-in-out group-hover:w-0" />
                  <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-primary">
                    Explore Services
                  </span>
                </Link>
              </div>

              {/* <div className="mt-10 grid gap-3 md:grid-cols-3">
                <Link
                  href="/about-us"
                  className="block rounded-xl border border-primary-light/30 bg-white px-4 py-4 text-center text-19 leading-[1.3] font-[300] text-forground-two transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  About Us
                </Link>
                <Link
                  href="/destinations/uae"
                  className="block rounded-xl border border-primary-light/30 bg-white px-4 py-4 text-center text-19 leading-[1.3] font-[300] text-forground-two transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  Destinations
                </Link>
                <Link
                  href="/contact-us"
                  className="block rounded-xl border border-primary-light/30 bg-white px-4 py-4 text-center text-19 leading-[1.3] font-[300] text-forground-two transition-colors duration-300 hover:bg-primary hover:text-white"
                >
                  Contact Us
                </Link>
              </div> */}

              <p className="mt-8 text-center font-inter text-16 font-[300] text-lggray">
                Need help now?{" "}
                <a
                  href="mailto:info@eet.ae"
                  className="text-primary hover:text-primary-light transition-colors duration-300"
                >
                  info@eet.ae
                </a>
              </p>
            </div>
          </div>
        </section>
        <Footer />  
      </body>
    </html>
  );
}
