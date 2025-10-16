"use client";
import ContactForm from "./ContactForm";
import { useTextReveal } from "@/hooks/useTextReveal";
const LetsConnect = () => {
  useTextReveal({selector: ".heading"});
  return ( 
    <section className="pb-10 xl:pb-[150px]">
      <div className="container">
        <div>
          <h2 className="heading text-50 xl:text-70 3xl:text-70 font-light leading-[1] text-black text-center mb-10 xl:mb-[110px]">Let&rsquo;s Connect</h2>
          <ContactForm/>
        </div>
      </div>
    </section>
   );
}
 
export default LetsConnect;