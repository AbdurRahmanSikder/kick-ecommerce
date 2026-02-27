import Cart from "./components/Cart";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
export default function Home() {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <HeroSection />
      <Cart />
    </div>
  );
}
