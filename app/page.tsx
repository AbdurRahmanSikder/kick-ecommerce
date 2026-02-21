import Navbar from "./components/Navbar";
import Hero from "../public/img/Hero.jpg";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex justify-center">
        <h1 className="font-bold text-black text-[clamp(2.5rem,10.25vw,223px)]">
          <span>DO IT</span>
          <span className="text-[#4A69E2]"> RIGHT</span>
        </h1>
      </div>
      <Image
        src={Hero}
        alt="Hero"
        className="max-w-6xl mx-auto rounded-4xl h-[650px] object-cover w-full mb-4"
      />

      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="flex flex-col text-6xl font-semibold">
          <span>DON'T MISS OUT</span>
          <span>NEW DROPS</span>
        </div>

        <div className="flex flex-col">
          <span></span>
          <span className="bg-[#4A69E2] px-8 py-3 text-sm text-white rounded-md">SHOP NEW DROPS</span>
        </div>
      </div>
    </div>
  );
}
