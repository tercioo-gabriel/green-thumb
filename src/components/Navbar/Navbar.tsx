import { CiShoppingCart } from "react-icons/ci";

const Navbar = () =>{
  return(
    <div className="z-[9999] fixed layoutDefault flex flex-col w-full shadow-3xl">
      <div className="flex items-center justify-center h-8 bg-verde">
        <p className="text-white text-sm tracking-wider">FREE SHIPPING ON ALL FULL SUN PLANTS! FEB. 25–28.</p>
      </div>
      <div className="flex h-14 bg-white items-center justify-around">
        <h3 className="font-semibold text-2xl tracking-tight select-none"><span className="text-verde">Green</span> Thumb</h3>
        <ul className="flex gap-12 cursor-pointer font-medium">
          <li className="relative py-3 px-1.5 cursor-pointer hover:text-verde group transition-all duration-100"><span className="absolute inset-x-0 bottom-2 h-0.5 bg-verde opacity-0 group-hover:opacity-100"></span>Home</li>
          <li className="relative py-3 px-1.5 cursor-pointer hover:text-verde group transition-all duration-100"><span className="absolute inset-x-0 bottom-2 h-0.5 bg-verde opacity-0 group-hover:opacity-100"></span>Products</li>
          <li className="relative py-3 px-1.5 cursor-pointer hover:text-verde group transition-all duration-100"><span className="absolute inset-x-0 bottom-2 h-0.5 bg-verde opacity-0 group-hover:opacity-100"></span>About Us</li>
          <li className="relative py-3 px-1.5 cursor-pointer hover:text-verde group transition-all duration-100"><span className="absolute inset-x-0 bottom-2 h-0.5 bg-verde opacity-0 group-hover:opacity-100"></span>Contact Us</li>
        </ul>
        <CiShoppingCart className="text-3xl cursor-pointer hover:scale-110 transition-all"/>
      </div>
    </div>
  )
};

export default Navbar;