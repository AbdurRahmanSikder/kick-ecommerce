import React from "react";
import shoe_img from "../../public/img/shoe.png";
import Image from "next/image";

const Cart = () => {
  return (
    <div className="flex gap-6">
      <div className="my-20 text-5xl text-center font-semibold max-w-6xl mx-auto flex gap-4">
        <div className="max-w-70">
          <div className="relative inline-block">
            <Image
              src={shoe_img}
              alt="Shoe image"
              width={280}
              height={350}
              className="rounded-2xl border-6 border-white"
            />

            <div className="absolute top-2 left-2 bg-[#4A69E2] text-white text-xs px-2 py-1 rounded-md">
              NEW
            </div>
          </div>

          <p className="text-xl text-left pl-2 mt-2">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </p>
          <button className="bg-[#232321] py-2 text-sm rounded-xl px-14">
            <div className="">
              <span className="text-white">
                VIEW PRODUCT - <span className="text-[#FFA52F]">$125</span>
              </span>
            </div>
          </button>
        </div>
      </div>
      <div className="my-20 text-5xl text-center font-semibold max-w-6xl mx-auto flex gap-4">
        <div className="max-w-70">
          <div className="relative inline-block">
            <Image
              src={shoe_img}
              alt="Shoe image"
              width={280}
              height={350}
              className="rounded-2xl border-6 border-white"
            />

            <div className="absolute top-2 left-2 bg-[#4A69E2] text-white text-xs px-2 py-1 rounded-md">
              NEW
            </div>
          </div>

          <p className="text-xl text-left pl-2 mt-2">
            ADIDAS 4DFWD X PARLEY RUNNING SHOES
          </p>
          <button className="bg-[#232321] py-2 text-sm rounded-xl px-14">
            <div className="">
              <span className="text-white">
                VIEW PRODUCT - <span className="text-[#FFA52F]">$125</span>
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
