const Hottest = () =>{
  return(
    <section className="PxSections flex flex-col mt-8 py-12 bg-verde2">
      <div>
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold sm:text-4xl"><span className="text-verde">Hottest</span> Plants</h2>
          <span className="text-sm font-medium cursor-pointer hover:text-neutral-600 hover:scale-105 transition-all xs:text-lg">SHOW ALL &gt;</span>
        </div>
        <div className="h-px bg-neutral-800 my-6">
        </div>
      </div>

      <div className="grid grid-cols-1 gap-2 tracking-widest xls:grid-cols-2 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65.png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Marble Queen</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (1).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Neon Pothos</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (2).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Syngonium Rayii</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (3).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Peruvian Cactus</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (4).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Pineapple</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (5).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>African Milk Tree</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (6).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Pothos</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
        <div className="flex flex-col justify-between mx-auto p-3.5 bg-white shadow-lg rounded-xl">
          <img className="pb-3 max-w-[120px] xs:max-w-[185px]" src="/images/Frame 65 (7).png" alt="" />
          <h4 className='flex flex-wrap max-w-[120px] xs:max-w-[185px]'>Chinese Evergreen</h4>
          <p>$ 350</p>
          <div className="mt-3 bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Buy</div>
        </div>
      </div>

    </section>
  )
};

export default Hottest;