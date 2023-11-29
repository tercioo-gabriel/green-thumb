const Hero = () =>{
  return(
    <section>
      <div className="h-[650px] bg-verde2 relative">
        <div className="flex">
          <img className="absolute bottom-0 left-0 object-cover" src="/images/image 22.png" alt="planta1" />
          <img className="absolute inset-y-0 right-0 h-full object-cover" src="/images/image 21.png" alt="planta2" />
        </div>
        <div className="flex justify-center">
          <div className="absolute z-10 flex flex-col justify-around items-center w-[450px] bg-verde/20 backdrop-blur-sm h-full top-0 text-center py-28">
            <h1 className="text-6xl font-semibold tracking-wide pt-20">Plants are <br /> our Passion</h1>
            <p className="px-16 text-lg">Even if you don't have a green thumb, <br /> you can still have a green home.
            </p>
            <a className="px-8 py-3 bg-white rounded-xl text-lg font-medium select-none hover:px-9 hover:text-zinc-600 transition-all">GET PLANTING</a>
          </div>
        </div>
      </div>
      <div className="h-9 bg-verde"></div>
    </section>
  )
};

export default Hero;