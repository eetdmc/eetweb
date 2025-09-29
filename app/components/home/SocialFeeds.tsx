
const SocialFeeds = () => {
  return ( 
    <section className="pt-10 pb-15 xl:pt-30 xl:pb-[315px] sec-noise">
      <div className="container">
        <div>
          <h2 className="text-70 leading-[1] font-light text-black mb-8 xl:mb-[78px]">Social Feeds</h2>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 xl:gap-[212px]">
          <div className="xl:col-span-2 2xl:h-[545px] pm-noise elfsight-app-f656c073-93a3-4f9d-9d37-e0f103630e4d" >
            <script src="https://elfsightcdn.com/platform.js" async></script> <div className="elfsight-app-f656c073-93a3-4f9d-9d37-e0f103630e4d" data-elfsight-app-lazy></div>
          </div>
          <div className="bg-primary xl:h-[545px] "></div> 
        </div>
      </div>
    </section>
   );
}
 
export default SocialFeeds;