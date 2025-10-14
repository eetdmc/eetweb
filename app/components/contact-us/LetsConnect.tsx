import ContactForm from "./ContactForm";

const LetsConnect = () => {
  return ( 
    <section className="pb-15 xl:pb-[150px]">
      <div className="container">
        <div>
          <h2 className="text-50 xl:text-70 3xl:text-70 font-light leading-[1] text-black text-center mb-10 xl:mb-[110px]">Let &apos; s Connect</h2>
          <ContactForm/>
        </div>
      </div>
    </section>
   );
}
 
export default LetsConnect;