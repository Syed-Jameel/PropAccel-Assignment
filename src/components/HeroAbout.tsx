import backImage from "../assets/background.png";
import About from "../components/About";
import Hero from "../components/Hero";

const HeroAbout = () => {
  return (
    <div className="w-full h-[180vh] relative">
      <img src={backImage} className="w-full h-full absolute z-10 top-0 right-0" />
      <Hero />
      <About />
    </div>
  );
};

export default HeroAbout;
