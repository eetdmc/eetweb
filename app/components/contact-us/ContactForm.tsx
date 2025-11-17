"use client";
import { motion } from "motion/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { moveUp } from "../motionVarients";
import { Listbox, Transition } from "@headlessui/react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  enquireAbout: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquireValue, setEnquireValue] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setEnquireValue("");
    }, 5000);
  };

  const options = [
    { value: "general", label: "General Inquiry" },
    { value: "support", label: "Support" },
    { value: "sales", label: "Sales" },
    { value: "partnership", label: "Partnership" },
    { value: "other", label: "Other" },
  ];
  return (
    <div className="container">
      <div className="w-full max-w-[1428px] mx-auto">
        {isSubmitted ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <svg
              className="w-16 h-16 text-green-500 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Thank You!
            </h2>
            <p className="text-gray-600">
              Your message has been sent successfully. We&apos;ll get back to
              you soon.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 cnt-form"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative pt-5">
                  <motion.input
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    id="name"
                    type="text"
                    placeholder=" "
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                    className={`w-full border-b ${
                      errors.name ? "border-red-500" : "border-primary-light"
                    } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors peer`}
                  />
                  <motion.label
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    htmlFor="name"
                    className="absolute left-0 top-0 text-19 leading-[1.294117647058824] font-light text-black transition-text duration-300 peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Name
                  </motion.label>
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="relative pt-5">
                  <motion.input
                    variants={moveUp(0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    id="phone"
                    type="tel"
                    placeholder=" "
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    className={`w-full border-b ${
                      errors.phone ? "border-red-500" : "border-primary-light"
                    } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors peer`}
                  />
                  <motion.label
                    variants={moveUp(0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    htmlFor="phone"
                    className="transition-colors duration-300 ease-in-out absolute left-0 top-0 text-19 leading-[1.294117647058824] font-light text-black transition-text  peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Phone
                  </motion.label>
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                <div className="relative pt-5">
                  <motion.input
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    id="email"
                    type="email"
                    placeholder=" "
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Please enter a valid email address",
                      },
                    })}
                    className={`w-full border-b ${
                      errors.email ? "border-red-500" : "border-primary-light"
                    } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors peer`}
                  />
                  <motion.label
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    htmlFor="email"
                    className="transition-colors duration-300 ease-in-out absolute left-0 top-0 text-19 leading-[1.294117647058824] font-light text-black transition-text peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
                  >
                    Email
                  </motion.label>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="relative pt-5">
                  <motion.div
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: "all" }}
                    className="relative z-10"
                  >
                    <Listbox
                      value={enquireValue}
                      onChange={(val) => setEnquireValue(val)}
                    >
                      <div className="relative">
                        {/* Button styled like input */}
                        <Listbox.Button
                          className={`w-full border-b ${
                            errors.enquireAbout
                              ? "border-red-500"
                              : "border-primary-light"
                          } bg-transparent text-19 pb-2 pt-5 pr-8 font-light text-forground appearance-none focus:outline-none focus:border-green-500 transition-colors duration-300 peer cursor-pointer flex justify-between items-center`}
                        >
                          <span
                            className={`${
                              enquireValue
                                ? "text-black absolute -top-11"
                                : "text-black absolute -top-11" // placeholder style
                            }`}
                          >
                            {enquireValue
                              ? options.find((o) => o.value === enquireValue)
                                  ?.label
                              : "Enquire About"}{" "}
                            {/* Placeholder text initially */}
                          </span>

                          {/* Dropdown arrow */}
                          <svg
                            className="absolute right-0 -top-6 w-5 h-5 text-black opacity-60 pointer-events-none"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </Listbox.Button>

                        {/* Floating label for accessibility, hidden but keeps form structure */}
                        <motion.label
                          htmlFor="enquireAbout"
                          className="absolute left-0 top-0 text-xs font-light text-black opacity-0 pointer-events-none"
                        >
                          Enquire About
                        </motion.label>

                        {/* Dropdown list */}
                        <Transition
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute mt-[2px] w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-27 overflow-auto z-20 text-sm">
                            {options.map((option) => (
                              <Listbox.Option
                                key={option.value}
                                value={option.value}
                                as={Fragment}
                              >
                                {({ active, selected }) => (
                                  <li
                                    className={`cursor-pointer select-none px-3 py-2 ${
                                      active
                                        ? "bg-primary text-white"
                                        : "text-black"
                                    } ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {option.label}
                                  </li>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </Listbox>
                  </motion.div>

                  {/* Error message */}
                  {errors.enquireAbout && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.enquireAbout.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="relative pt-5">
                <motion.textarea
                  variants={moveUp(0.6)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                  id="message"
                  rows={4}
                  placeholder=" "
                  {...register("message", {
                    required: "Message is required",
                    minLength: {
                      value: 10,
                      message: "Message must be at least 10 characters",
                    },
                  })}
                  className={`w-full border-b ${
                    errors.message ? "border-red-500" : "border-primary-light"
                  } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors resize-none peer`}
                />
                <motion.label
                  variants={moveUp(0.2)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: "all" }}
                  htmlFor="message"
                  className="absolute left-0 top-0 text-19 leading-[1.294117647058824] font-light text-black transition-text duration-300 peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none"
                >
                  Message
                </motion.label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.div
                variants={moveUp(0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: "all" }}
                className="flex items-center relative group/main overflow-hidden w-fit"
              >
                <button
                  aria-label="Submit"
                  onClick={handleSubmit(onSubmit)}
                  className="border border-black text-black font-light font-inter bg-transparent px-5 py-2 flex items-center gap-2 rounded-3xl relative z-10 group overflow-hidden hover:text-white"
                >
                  <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
                  <span className="relative z-10">Send</span>
                </button>
              </motion.div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
