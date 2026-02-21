import Image from "next/image";
import Hero from "../../public/img/Hero.jpg";

const HeroSection = () => {
  return (
    <div>
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
      <div className="max-w-6xl mx-auto text-6xl font-semibold mt-15">
        <div className="">DON'T MISS OUT</div>
        <div className="flex justify-between">
          <span>NEW DROPS</span>
          <button className="bg-[#4A69E2] flex items-center justify-center px-4  text-sm text-white rounded-md">
            SHOP NEW DROPS
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
