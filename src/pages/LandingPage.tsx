import Navbar from "../components/Navbar";
import HeroAbout from "../components/HeroAbout";
import Pricing from "../components/Pricing";
import Review from "../components/Review";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className="w-full h-[440vh]">
      <header className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </header>
      <section>
        <HeroAbout />
        <Pricing />
        <Review />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
