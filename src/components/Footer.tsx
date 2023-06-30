import polygon3 from "../assets/Polygon3.png";
import facebookIcon from "../assets/facebook.png";
import youtubeIcon from "../assets/youtube.png";
import instaIcon from "../assets/insta.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <div className="w-full h-[80vh] relative flex items-center justify-center">
      <img src={polygon3} className="w-full h-auto absolute z-10 right-0 bottom-0 left-0" />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center justify-center -mt-6">
            <div className="w-[480px] h-[200px] absolute z-20 flex flex-col items-center justify-center space-y-4">
              <h4 className="not-italic font-bold text-xl leading-7 text-black ">We have what you’re looking for</h4>
              <p className="not-italic font-base text-xs tracking-tighter leading-6 text-[#4776E6] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type a</p>
              <button className=" w-[237px] h-[74.86px] not-italic font-bold text-xl leading-4 text-white left-55 top-19 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-poppins">Get Started Now</button>
            </div>
          </div>

          <div className="absolute bottom-0 z-20 w-[1000px] h-[80px]   border-t-2 border-gray-400 flex flex-row items-center justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
              <p className="not-italic font-normal text-xs leading-4 text-white flex-none order-none flex-grow-0">All Right Reserved @Copyright 2023</p>

              <div className="flex items-center justify-between space-x-4">
                <ul className="flex items-center justify-between">
                  <li className="w-24 h-4 not-italic font-normal text-xs leading-4 text-white flex-none order-none flex-grow-0 hover:underline cursor-pointer">Terms of Service</li>
                  <li className="w-24 h-4 not-italic font-normal text-xs leading-4 text-white flex-none order-none flex-grow-0 hover:underline cursor-pointer">Privacy Policy</li>
                  <li className="w-24 h-4 not-italic font-normal text-xs leading-4 text-white flex-none order-none flex-grow-0 hover:underline cursor-pointer">Product</li>
                </ul>

                <div className="flex items-center justify-between space-x-4 ">
                  <img src={facebookIcon} className="cursor-pointer" />
                  <img src={youtubeIcon} className="cursor-pointer" />
                  <img src={instaIcon} className="cursor-pointer" />
                  <img src={twitterIcon} className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
