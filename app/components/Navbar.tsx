import Image from "next/image";
import LOGO from '../../public/img/logo.png'

const Navbar = () => {
  return (
    <div>
      <div className="border text-black max-w-6xl mx-auto rounded-xl mt-8">
        <div className="flex items-center justify-between p-6 mx-auto text-base rounded-2xl">
          <div className="flex items-center justify-between gap-6 font-semibold">
            <div>New Drops 🔥</div>
            <div>Men</div>
            <div>Women</div>
          </div>
          <Image src={LOGO} alt="logo" />
          <div className="flex items-center justify-between gap-6 font-semibold">
            <div>account</div>
            <div>search</div>
            <div>count</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
