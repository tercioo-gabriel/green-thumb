const Footer = () =>{
  return(
    <div className="flex flex-col mt-32">
      <div className="flex flex-col gap-7">
        <div className="flex justify-center gap-10 font-medium">
          <p className="cursor-pointer hover:font-semibold hover:scale-105 transition-transform">Products</p>
          <p className="cursor-pointer hover:font-semibold hover:scale-105 transition-transform">Returns</p>
          <p className="cursor-pointer hover:font-semibold hover:scale-105 transition-transform">FAQ</p>
          <p className="cursor-pointer hover:font-semibold hover:scale-105 transition-transform">About Us</p>
          <p className="cursor-pointer hover:font-semibold hover:scale-105 transition-transform">Contact Us</p>
        </div>
        <div className="flex justify-center gap-7 mb-8">
          <img className="cursor-pointer hover:scale-105 transition-transform" src="/images/youtube.png" alt="youtube" />
          <img className="cursor-pointer hover:scale-105 transition-transform" src="/images/facebook.png" alt="youtube" />
          <img className="cursor-pointer hover:scale-105 transition-transform" src="/images/twitter.png" alt="youtube" />
          <img className="cursor-pointer hover:scale-105 transition-transform" src="/images/instagram.png" alt="youtube" />
          <img className="cursor-pointer hover:scale-105 transition-transform" src="/images/linkedin.png" alt="youtube" />
        </div>
      </div>
      <span className="w-full py-3.5 bg-verde uppercase text-white text-center font-light tracking-widest">Copyright Green thumb. All Rights Reserved</span>
    </div>
  )
};

export default Footer;