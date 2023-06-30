import solarPodcast from "../assets/solar_podcast.png";
import streamline from "../assets/streamline.png";
import heroTop from "../assets/heroTop.png";
import heroBottom from "../assets/heroBottom.png";

const Hero = () => {
  return (
    <div className="w-full h-[100vh] absolute z-20 top-0 right-0 flex items-center justify-center">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 w-full h-[450px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className=" flex flex-col items-start justify-between h-[400px]">
            <h1 className="w-[100%] font-bold text-5xl text-white ">Learn how to launch a successful podcast</h1>
            <p className="w-[80%] font-normal text-base leading-5 text-white">Learn how to launch a successful podcast Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Sign up Now</p>
            <button className="w-[16rem] h-[4rem] font-bold text-xl leading-4 text-white left-55 top-19 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">Sign up Now</button>
          </div>

          <div className=" h-[450px] relative">
            <div className="w-[90%] h-[80%] absolute bottom-0 right-0 border-dotted border-8  border-[#7A3199] p-10">
              <div className="bg-white w-14 h-14 p-2 content-center rounded-md absolute -right-8 -rotate-[30deg] top-16 shadow-xl">
                <img src={solarPodcast} className="w-12 h-auto rotate-12" />
              </div>
              <div className="w-[100%] h-[100%] border-dotted border-8 border-[#7A3199] ">
                <div className="bg-white w-14 h-14 p-2 content-center rounded-md absolute right-6 rotate-[30deg] bottom-10 shadow-xl">
                  <img src={streamline} className="w-12 h-auto -rotate-12" />
                </div>
              </div>
            </div>
            <img src={heroBottom} className="absolute top-0 right-12" />
            <img src={heroTop} className="absolute bottom-12 left-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
