import Navbar from "@/components/Navbar/Navbar";
import Hero from "./Home/Hero/Hero";

export default function Home() {
  return (
    <main className="layoutDefault">
      <Navbar />
      <Hero />
      <div className="z-0 bg-red-200 w-36 h-36 mx-auto"></div>
    </main>
  )
}
