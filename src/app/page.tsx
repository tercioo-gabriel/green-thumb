import Navbar from "@/components/Navbar/Navbar";
import Hero from "./Home/Hero/Hero";
import Products from "./Home/Products/Products";
import Hottest from "./Home/Hottest/Hottest";
import Deals from './Home/Deals/Deals';

export default function Home() {
  return (
    <main className="layoutDefault">
      <Navbar />
      <Hero />
      <Products />
      <Hottest />
      <Deals />
    </main>
  )
}
