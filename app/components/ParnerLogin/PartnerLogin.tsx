"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { useTextReveal } from "@/hooks/useTextReveal";

const PartnerLogin = () => {
  const [companyname, setCompanyname] = useState("");
  const [licensenum, setLicensenum] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [postal, setPostal] = useState("");
  const [tax, setTax] = useState("");
  const [phone, setPhone] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [emergency, setEmergency] = useState("");

  // simple stagger effect
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };
  useTextReveal({ selector: ".heading" });

  // Animate subtitles with different settings
  useTextReveal({
    selector: ".subtitle",
    stagger: 0.02,
    duration: 0.4,
    y: 30,
  });
  return (
    <div>
      <section className=" pm-noise">
        <div className="container">
          <div className="text-center py-18 md:py-20 xl:py-30 2xl:pb-[114px] 2xl:pt-[118px]">
            <h2 className="font-light text-65 leading-[1.153846153846154] text-black heading">
              Partner Login
            </h2>
          </div>
        </div>
      </section>

      <section className="pb-[200px] md:pb-[280px] xl:pb-[300px] 2xl:pb-[400px] ptb-[50px] xl:pt-18 2xl:pt-[100px]">
        <div className="container">
          <div className="grid grid-cols-1 xl:grid-cols-[638px_auto] gap-10 xl:gap-14 3xl:gap-[92px]">
            <div className="w-full h-full relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0, x: -80 }} // slide from left
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="w-full h-full relative overflow-hidden"
              >
                <Image
                  src="/assets/images/partner.jpg"
                  alt="partner-login"
                  width={638}
                  height={848}
                  className="hidden xl:block h-40 w-full xl:h-full object-cover object-bottom xl:object-right"
                />
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={container}
              className="flex items-center justify-center"
            >
              <motion.form variants={container} className="w-full text-black">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 2xl:gap-[70px]">
                  {/* Field Example */}
                  {[
                    {
                      id: "companyName",
                      label: "Company Name",
                      value: companyname,
                      setValue: setCompanyname,
                    },
                    {
                      id: "licenseNumber",
                      label: "Company License Number",
                      value: licensenum,
                      setValue: setLicensenum,
                    },
                    {
                      id: "address",
                      label: "Full Address *",
                      value: address,
                      setValue: setAddress,
                      textarea: true,
                      colSpan: true,
                    },
                    {
                      id: "city",
                      label: "City",
                      value: city,
                      setValue: setCity,
                    },
                    {
                      id: "country",
                      label: "Country",
                      value: country,
                      setValue: setCountry,
                    },
                    {
                      id: "postal",
                      label: "Postal Code *",
                      value: postal,
                      setValue: setPostal,
                    },
                    {
                      id: "tax",
                      label: "Tax Registration Number",
                      value: tax,
                      setValue: setTax,
                    },
                    {
                      id: "phone",
                      label: "Phone Number *",
                      value: phone,
                      setValue: setPhone,
                    },
                    {
                      id: "mobile",
                      label: "Mobile *",
                      value: mobile,
                      setValue: setMobile,
                    },
                    {
                      id: "email",
                      label: "Email ID *",
                      value: email,
                      setValue: setEmail,
                    },
                    {
                      id: "emergency",
                      label: "Emergency Contact *",
                      value: emergency,
                      setValue: setEmergency,
                    },
                  ].map((field, i) => (
                    <motion.div
                      key={i}
                      variants={item}
                      className={`${
                        field.colSpan ? "md:col-span-2" : ""
                      } relative`}
                    >
                      {field.textarea ? (
                        <textarea
                          id={field.id}
                          value={field.value}
                          onChange={(e) => field.setValue(e.target.value)}
                          placeholder=" "
                          rows={2}
                          className="peer w-full border-b border-gray-300 font-inter pb-2 text-[#2E2E2E] placeholder-transparent focus:border-[#000] focus:outline-none"
                        />
                      ) : (
                        <input
                          type="text"
                          id={field.id}
                          value={field.value}
                          onChange={(e) => field.setValue(e.target.value)}
                          placeholder=" "
                          className="peer w-full border-b border-gray-300 font-inter pb-2 text-[#2E2E2E] placeholder-transparent focus:border-[#000] focus:outline-none"
                        />
                      )}
                      <label
                        htmlFor={field.id}
                        className={`absolute left-0 -top-6 text-[#5A5A5A] transition-all duration-300 font-inter font-light
                        peer-placeholder-shown:-top-1 peer-placeholder-shown:text-[#9CA3AF] peer-placeholder-shown:text-19
                        peer-focus:-top-8 peer-focus:text-19 peer-focus:text-[#000]
                        ${field.value ? "-top-6 text-19 text-[#000]" : ""}`}
                      >
                        {field.label}
                      </label>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  variants={item}
                  className="mt-8 lg:mt-10 xl:mt-18 flex"
                >
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="
    group cursor-pointer relative overflow-hidden 
    border text-16 border-[#484848] font-inter text-black font-light 
    py-3 px-8 rounded-full hover:text-white
  "
                  >
                    {/* expanding black overlay */}
                    <div
                      className="
      absolute inset-0 w-0 h-full z-0 
      bg-black transition-all duration-300 ease-in-out 
      group-hover:w-full
    "
                    ></div>

                    {/* Button label stays above overlay */}
                    <span className="relative z-10">Submit</span>
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerLogin;
