const Hero = () =>{
  return(
    <div className="h-[670px] pt-20 bg-verde2 relative">
      <div className="flex">
        <img className="absolute z-10 bottom-0 left-0 object-cover" src="/images/image 22.png" alt="planta1" />
        <img className="absolute z-0 inset-y-0 right-0 h-full object-cover" src="/images/image 21.png" alt="planta2" />
      </div>
      <div className="z-20 w-[512px] h-full mx-auto bg-verde/20">

      </div>
    </div>
  )
};

export default Hero;