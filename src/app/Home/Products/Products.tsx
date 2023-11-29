const Products = () =>{
  return(
    <section className="PxSections flex flex-col gap-8 mt-16 xs:mt-28 xs:gap-28">
      {/* SHOP BY */}
      <div>
        <h2 className="text-2xl font-semibold sm:text-4xl"><span className="text-verde">Shop</span> by Category</h2>
        <div className="h-px bg-neutral-800 my-6"></div>

        <div className="grid grid-cols-2 font-semibold text-xs tracking-widest sm:gap-2 sm:grid-cols-3 md:grid-cols-6">
          <a className="flex flex-col items-center cursor-pointer group">
            <img className="drop-shadow-sm group-hover:scale-105 transition-transform" src="/images/Rectangle 51.png" alt="" sizes="128"/>
            <h4>BONSAI</h4>
          </a>
          <a className="flex flex-col items-center cursor-pointer group">
            <img className="drop-shadow-sm group-hover:scale-105 transition-transform" src="/images/Rectangle 51 (1).png" alt="" sizes="128"/>
            <h4>CACTI</h4>
          </a>
          <a className="flex flex-col items-center cursor-pointer group">
            <img className="drop-shadow-sm group-hover:scale-105 transition-transform" src="/images/Rectangle 51 (2).png" alt="" sizes="128"/>
            <h4>CREEPERS</h4>
          </a>
          <a className="flex flex-col items-center cursor-pointer group">
            <img className="drop-shadow-sm group-hover:scale-105 transition-transform" src="/images/Rectangle 51 (3).png" alt="" sizes="128"/>
            <h4>SUCCULENTS</h4>
          </a>
          <a className="flex flex-col items-center cursor-pointer group">
            <img className="drop-shadow-sm group-hover:scale-105 transition-transform" src="/images/Rectangle 51 (4).png" alt="" sizes="128"/>
            <h4>SEEDS</h4>
          </a>
          <a className="flex flex-col items-center cursor-pointer group">
            <img className="drop-shadow-sm group-hover:scale-105 transition-transform" src="/images/Rectangle 51 (5).png" alt="" sizes="128"/>
            <h4>GIFTS</h4>
          </a>
        </div>
      </div>

      {/* BEST SELLING */}
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold sm:text-4xl"><span className="text-verde">Best</span> Selling</h2>
          <span className="text-sm font-medium cursor-pointer hover:text-neutral-600 hover:scale-105 transition-all xs:text-lg">SHOW ALL &gt;</span>
        </div>
        <div className="h-px bg-neutral-800 my-6"></div>

        <div className="my-8 grid grid-cols-1 gap-4 xs:grid-cols-2 xs:my-20 md:grid-cols-3">
          <div className="max-w-xs mx-auto p-3 shadow-lg rounded-xl group">
            <img className="pb-3 brightness-90 group-hover:brightness-110 transition-all" src="/images/Frame 61.png" alt="" />
            <div className="bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Shop Now</div>
          </div>
          <div className="max-w-xs mx-auto p-3 shadow-lg rounded-xl group">
            <img className="pb-3 brightness-90 group-hover:brightness-110 transition-all" src="/images/Frame 61 (1).png" alt="" />
            <div className="bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Shop Now</div>
          </div>
          <div className="max-w-xs mx-auto p-3 shadow-lg rounded-xl group">
            <img className="pb-3 brightness-90 group-hover:brightness-110 transition-all" src="/images/Frame 61 (2).png" alt="" />
            <div className="bg-verde text-white py-3 rounded-lg text-center font-medium text-lg tracking-wider cursor-pointer hover:opacity-90 transition-opacity">Shop Now</div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Products;