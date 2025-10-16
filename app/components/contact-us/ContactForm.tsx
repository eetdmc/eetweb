"use client"
import { assets } from '@/public/assets';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { moveUp } from '../motionVarients';

interface FormData {
  name: string;
  phone: string;
  email: string;
  enquireAbout: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [enquireValue, setEnquireValue] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log('Form data:', data);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      reset();
      setEnquireValue('');
    }, 5000);
  };

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
              Your message has been sent successfully. We&apos;ll get back to you soon.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 cnt-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative pt-5">
                  <motion.input
                    variants={moveUp(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: true,amount: "all"}}
                    id="name"
                    type="text"
                    placeholder=" "
                    {...register('name', {
                      required: 'Name is required',
                      minLength: {
                        value: 2,
                        message: 'Name must be at least 2 characters',
                      },
                    })}
                    className={`w-full border-b ${errors.name ? 'border-red-500' : 'border-primary-light'
                      } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors peer`}
                  />
                  <motion.label variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} htmlFor="name"
                    className="absolute left-0 top-0 text-34 leading-[1.294117647058824] font-light text-foreground transition-text duration-300 peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
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
                    viewport={{once: true,amount: "all"}}
                    id="phone"
                    type="tel"
                    placeholder=" "
                    {...register('phone', {
                      required: 'Phone number is required',
                      pattern: {
                        value: /^[0-9+\-\s()]+$/,
                        message: 'Please enter a valid phone number',
                      },
                    })}
                    className={`w-full border-b ${errors.phone ? 'border-red-500' : 'border-primary-light'
                      } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors peer`}
                  />
                  <motion.label variants={moveUp(0.1)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} htmlFor="phone"
                    className="absolute left-0 top-0 text-34 leading-[1.294117647058824] font-light text-foreground transition-text  peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
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
                    viewport={{once: true,amount: "all"}}
                    id="email"
                    type="email"
                    placeholder=" "
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    className={`w-full border-b ${errors.email ? 'border-red-500' : 'border-primary-light'
                      } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors peer`}
                  />
                  <motion.label variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} htmlFor="email"
                    className="absolute left-0 top-0 text-34 leading-[1.294117647058824] font-light text-foreground transition-text peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs"
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
                    <motion.select
                      variants={moveUp(0.2)}
                      initial="hidden"
                      whileInView="show"
                      viewport={{once: true,amount: "all"}}
                      id="enquireAbout"
                      value={enquireValue}
                      {...register('enquireAbout', {
                        required: 'Please select an option',
                        onChange: (e) => setEnquireValue(e.target.value),
                      })}
                      className={`w-full border-b ${errors.enquireAbout ? 'border-red-500' : 'border-primary-light'
                        } bg-transparent pb-6 px-0 pr-8 appearance-none focus:outline-none focus:border-green-500 transition-colors cursor-pointer peer`}
                    >
                      <option value=""></option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Support</option>
                      <option value="sales">Sales</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </motion.select>
                    <motion.label variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} htmlFor="enquireAbout"
                      className={`absolute left-0 top-0 text-34 leading-[1.294117647058824] font-light text-foreground pb-3 pointer-events-none transition-text ${enquireValue ? 'opacity-0' : 'opacity-100 '
                        }`}
                    >
                      Enquire About
                    </motion.label>
                    <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
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
                  viewport={{once: true,amount: "all"}}
                  id="message"
                  rows={4}
                  placeholder=" "
                  {...register('message', {
                    required: 'Message is required',
                    minLength: {
                      value: 10,
                      message: 'Message must be at least 10 characters',
                    },
                  })}
                  className={`w-full border-b ${errors.message ? 'border-red-500' : 'border-primary-light'
                    } bg-transparent pb-2 px-0 focus:outline-none focus:border-green-500 transition-colors resize-none peer`}
                />
                <motion.label variants={moveUp(0.2)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} htmlFor="message"
                  className="absolute left-0 top-0 text-34 leading-[1.294117647058824] font-light text-foreground transition-text duration-300 peer-focus:top-0 peer-focus:text-xs peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-xs pointer-events-none"
                >
                  Message
                </motion.label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>


              <motion.div variants={moveUp(0.6)} initial="hidden" whileInView="show" viewport={{once: true,amount: "all"}} className="flex items-center relative group/main overflow-hidden w-fit">
                <button aria-label="Submit" onClick={handleSubmit(onSubmit)} className="border border-black text-black font-light font-inter bg-transparent px-5 py-2 flex items-center gap-2 rounded-3xl relative z-10 group/link overflow-hidden group-hover/main:text-white" >
                  <div className="absolute top-0 left-0 w-0 h-full z-0 group-hover/main:w-full bg-black transition-all duration-300 ease-in-out rounded-full"></div>
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