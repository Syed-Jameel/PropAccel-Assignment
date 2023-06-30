import podcast from "../assets/podcast.png";

const Pricing = () => {
  return (
    <div className="w-full h-[100vh] relative flex items-center justify-start">
      <img src={podcast} className="w-full h-auto absolute top-0 left-0 right-0 bottom-0" />
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 gap-4">
          <div className="w-full flex items-center justify-center">
            <div className="w-[400px] h-[200px] flex flex-col items-center justify-center space-y-4 mt-6">
              <h4 className="not-italic font-bold text-xl leading-7 text-black ">Choose your plan</h4>
              <p className="not-italic font-base text-sm tracking-tighter leading-[20px] text-black text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
              <div className="w-[170px] h-[40px] bg-white shadow-lg rounded-full p-4 box-border flex justify-between items-center cursor-pointer">
                <button className="w-[80px] h-[30px] bg-[#E1A6FF] bg-opacity-40 rounded-full p-2 flex justify-center items-center text-black font-semibold cursor-pointer">monthly</button>
                <span className="flex justify-between items-center text-black font-semibold p-4">yearly</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-14 gap-y-4 mt-10">
          <div className="card w-[330px] h-[370px] border-[1px] border-[#7A3199] p-4 rounded-lg text-left z-30 bg-white hover:bg-[#7A3199] text-black hover:text-white">
            <div className="space-y-4 text-left">
              <h4 className="not-italic font-bold text-xl leading-7 ">Basic Plan</h4>
              <p className="not-italic font-base text-sm tracking-tighter leading-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="py-4 charge">
              <p className="not-italic flex items-center  leading-7 text-[#7A3199]">
                <span className="text-3xl font-bold pr-4">$ 54</span> <span className="text-md">/month</span>
              </p>
            </div>
            <div className="py-4">
              <ul className="list-disc pl-4">
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
            </div>
            <div className="py-2">
              <button className="bg-white hover:[#7A3199] w-[150px] h-[50px] border-[1px] border-[#7A3199] flex items-center justify-center p-4 rounded-md border-box text-xs text-[#7A3199] font-bold">Start Free Trial</button>
            </div>
          </div>
          <div className="card w-[330px] h-[370px] border-[1px] border-[#7A3199] p-4 rounded-lg text-left z-30 bg-white hover:bg-[#7A3199] text-black hover:text-white">
            <div className="space-y-4 text-left">
              <h4 className="not-italic font-bold text-xl leading-7 ">Basic Plan</h4>
              <p className="not-italic font-base text-sm tracking-tighter leading-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="py-4 charge">
              <p className="not-italic flex items-center  leading-7 text-[#7A3199]">
                <span className="text-3xl font-bold pr-4">$ 54</span> <span className="text-md">/month</span>
              </p>
            </div>
            <div className="py-4">
              <ul className="list-disc pl-4">
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
            </div>
            <div className="py-2">
              <button className="bg-white hover:[#7A3199] w-[150px] h-[50px] border-[1px] border-[#7A3199] flex items-center justify-center p-4 rounded-md border-box text-xs text-[#7A3199] font-bold">Start Free Trial</button>
            </div>
          </div>
          <div className="card w-[330px] h-[370px] border-[1px] border-[#7A3199] p-4 rounded-lg text-left z-30 bg-white hover:bg-[#7A3199] text-black hover:text-white">
            <div className="space-y-4 text-left">
              <h4 className="not-italic font-bold text-xl leading-7 ">Basic Plan</h4>
              <p className="not-italic font-base text-sm tracking-tighter leading-[20px]">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="py-4 charge">
              <p className="not-italic flex items-center  leading-7 text-[#7A3199]">
                <span className="text-3xl font-bold pr-4">$ 54</span> <span className="text-md">/month</span>
              </p>
            </div>
            <div className="py-4">
              <ul className="list-disc pl-4">
                <li>Free access to video class</li>
                <li>Free access to video class</li>
                <li>Free access to video class</li>
              </ul>
            </div>
            <div className="py-2">
              <button className="bg-white hover:[#7A3199] w-[150px] h-[50px] border-[1px] border-[#7A3199] flex items-center justify-center p-4 rounded-md border-box text-xs text-[#7A3199] font-bold">Start Free Trial</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
