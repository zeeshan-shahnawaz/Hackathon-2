import AbountUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import MenuSec from "@/components/MenuSec";
import Navbar from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-[#0D0D0DF2]">
      <Navbar/>
      <Hero/>
      <AbountUs/>
      <MenuSec/>
    </div>
  );
}
