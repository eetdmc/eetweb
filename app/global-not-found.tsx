import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "404 | Page Not Found",
  description: "The page you are looking for could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="antialiased">
        <section className="pm-noise min-h-screen flex items-center py-6 md:py-24 xl:py-32">
          <div className="container w-full">
            <div className="error-404-shell mx-auto max-w-[1000px] border border-primary-light/30 bg-white/70 backdrop-blur-[2px] xl:rounded-[28px] p-4 sm:p-12 xl:p-16">
              <span className="error-404-display block xl:hidden">404</span>
              <div className="error-404-kicker mb-6 items-center gap-3 sm:gap-4 flex flex-wrap xl:hidden">
                <p className="font-inter text-16 tracking-[0.12em] uppercase text-primary">
                  Error 404
                </p>
                <span className="h-px w-6 sm:w-16 bg-primary-light/60"></span>
                <p className="font-inter text-14 uppercase tracking-[0.08em] text-primary-light">
                  Lost Route
                </p>
              </div>
              <div className="error-404-title grid gap-5 xl:grid-cols-[1.25fr_0.75fr] xl:gap-12">
                <div>
                  <h1 className="error-404-shimmer text-50 md:text-60 leading-[1.2] xl:leading-[1] text-forground-two font-[300] xl:max-w-[14ch]">
                    The page you&apos;re looking for has moved or no longer
                    exists.
                  </h1>
                  <p className="error-404-copy mt-6 text-19 leading-lhtext-19 font-[300] font-inter text-lggray max-w-[52ch]">
                    Let us guide you back to the destination that fits your
                    journey. You can return to the homepage or browse our
                    services.
                  </p>

                  <div className="w-full h-px bg-gradient-to-r from-primary-light/15 via-primary-light to-primary-light/15 my-4 xl:my-8"></div>

                  <div className="error-404-actions flex flex-wrap gap-4">
                    <Link href="/"
                      className="group relative inline-flex items-center justify-center rounded-full border border-black px-2 py-1 xl:px-6 xl:py-3 font-inter text-16 font-[400] text-black overflow-hidden"
                    >
                      <span className="absolute inset-0 w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white leading-[1]">
                        Back To Home
                      </span>
                    </Link>
                    <Link
                      href="/services"
                      className="group relative inline-flex items-center justify-center rounded-full border border-primary  px-2 py-1 xl:px-6 xl:py-3 font-inter text-16 font-[400] text-primary overflow-hidden"
                    >
                      <span className="absolute inset-0 w-full bg-primary transition-all duration-300 ease-in-out group-hover:w-0"></span>
                      <span className="relative z-10 text-white transition-colors duration-300 group-hover:text-primary leading-[1]">
                        Explore Services
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="error-404-meta border-t xl:border-t-0 xl:border-l border-primary-light/40 pt-6 xl:pt-1 xl:pl-8 flex flex-col">
                 <div className="big-404-text">
                    <h3 className="error-404-display hidden xl:block mb-5 xl:mb-50">
                      404
                    </h3>
                    <div className="error-404-kicker mb-6 items-center gap-3 sm:gap-4 hidden xl:flex">
                      <p className="font-inter text-16 tracking-[0.12em] uppercase text-primary">
                        Error 404
                      </p>
                      <span className="h-px w-10 sm:w-16 bg-primary-light/60"></span>
                      <p className="font-inter text-14 uppercase tracking-[0.08em] text-primary-light">
                        Lost Route
                      </p>
                    </div>
                 </div>
                 <div className="error-404-links mt-auto xl:border-t border-primary-light/40 xl:pt-6">
                    <p className="font-inter text-14 uppercase tracking-[0.1em] text-primary-light mb-5 ">
                      Quick Routes
                    </p>
                    <div className="space-y-2 xl:space-y-3">
                      <Link
                        href="/about-us"
                        className="block text-19 leading-[1.3] font-[300] text-forground-two hover:text-primary transition-colors duration-300"
                      >
                        About Us
                      </Link>
                      <Link
                        href="/destinations/uae"
                        className="block text-19 leading-[1.3] font-[300] text-forground-two hover:text-primary transition-colors duration-300"
                      >
                        Destinations
                      </Link>
                      <Link
                        href="/contact-us"
                        className="block text-19 leading-[1.3] font-[300] text-forground-two hover:text-primary transition-colors duration-300"
                      >
                        Contact Us
                      </Link>
                    </div>
                    <p className="mt-8 text-16 font-inter font-[300] text-lggray">
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
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  );
}
