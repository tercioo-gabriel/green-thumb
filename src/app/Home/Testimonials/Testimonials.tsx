const Testimonials = () =>{
  return(
    <div className="PxSections bg-verde2 mt-10 py-16 px-3 md:px-10 lg:px-24">
      <h2 className="text-2xl font-semibold sm:text-4xl text-center">Testimonials</h2>
      <p className="font-medium text-center pb-10">Plant parents love us</p>

      <div className="grid grid-cols-1 gap-1 xls:grid-cols-2 sm:grid-cols-3 xs:gap-3 md:gap-6">
        <div className="flex flex-col justify-around items-center px-2 pb-2 rounded-md drop-shadow-sm bg-white text-center">
          <img src="/images/img.png" alt="luisa" />
          <div className="flex flex-wrap -mt-4 mb-6">
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
          </div>
          <h6 className="font-medium text-xl px-2 sm:px-6">“Healthy, happy plants”</h6>
          <p className="text-neutral-500/80">Luisa</p>
        </div>

        <div className="flex flex-col justify-around items-center px-2 pb-2 rounded-md drop-shadow-sm bg-white text-center">
          <img src="/images/img (1).png" alt="luisa" />
          <div className="flex flex-wrap -mt-4 mb-6">
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
          </div>
          <h6 className="font-medium text-xl px-2 sm:px-6">“Recommend to all my plant friends”</h6>
          <p className="text-neutral-500/80">Edoardo</p>
        </div>

        <div className="flex flex-col justify-around items-center px-2 pb-2 rounded-md drop-shadow-sm bg-white text-center">
          <img src="/images/img (2).png" alt="luisa" />
          <div className="flex flex-wrap -mt-4 mb-6">
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
            <img src="/images/Star 1.png" alt="" />
          </div>
          <h6 className="font-medium text-xl px-2 sm:px-6">“I turned my house into my dream jungle”</h6>
          <p className="text-neutral-500/80">Mart</p>
        </div>
      </div>
    </div>
  )
};

export default Testimonials;