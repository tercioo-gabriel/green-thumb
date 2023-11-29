const Deals = () =>{
  return(
    <section className="PxSections flex flex-col mt-8 py-12">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold sm:text-4xl"><span className="text-verde">Fantastic</span> Deals</h2>
        </div>
        <div className="h-px bg-neutral-800 my-6">
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 tracking-widest xs:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[185px]" src="/images/Frame 65 (8).png" alt="" />
          <h4>String of Hearts</h4>
          <div className="flex">
            <p>$ 350</p>
            <span className="relative ml-6 font-extralight text-red-600 select-none">$ 450<span className="absolute left-px top-2.5 w-12 h-px bg-red-600/40"></span></span>
          </div>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[185px]" src="/images/Frame 65 (9).png" alt="" />
          <h4>Red Secret Alocasia</h4>
          <div className="flex">
            <p>$ 350</p>
            <span className="relative ml-6 font-extralight text-red-600 select-none">$ 450<span className="absolute left-px top-2.5 w-12 h-px bg-red-600/40"></span></span>
          </div>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[185px]" src="/images/Frame 65 (10).png" alt="" />
          <h4>Jewel Alocasia</h4>
          <div className="flex">
            <p>$ 350</p>
            <span className="relative ml-6 font-extralight text-red-600 select-none">$ 450<span className="absolute left-px top-2.5 w-12 h-px bg-red-600/40"></span></span>
          </div>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[185px]" src="/images/Frame 65 (11).png" alt="" />
          <h4>Hoya Retusa</h4>
          <div className="flex">
            <p>$ 350</p>
            <span className="relative ml-6 font-extralight text-red-600 select-none">$ 450<span className="absolute left-px top-2.5 w-12 h-px bg-red-600/40"></span></span>
          </div>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
      </div>
    </section>
  
  )
};

export default Deals;