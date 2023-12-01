import Navbar from "@/components/Navbar/Navbar";
import Hero from "./Home/Hero/Hero";
import Products from "./Home/Products/Products";
import Hottest from "./Home/Hottest/Hottest";
import Deals from './Home/Deals/Deals';
import Testimonials from "./Home/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className="layoutDefault">
      <Hero />
      <Products />
      <Hottest />
      <Deals />
      <Testimonials />
      
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}
