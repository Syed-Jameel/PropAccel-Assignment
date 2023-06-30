import pngWing from "../assets/pngwing1.png";

const About = () => {
  return (
    <div className="w-full h-[80vh relative z-20 top-[100vh] left-0 right-0">
      <div className="w-full h-[100vh] absolute z-20 top-0 right-0 flex items-center justify-center">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-8">
              <div className="w-[268px] h-[160px] border-[1px] border-[#7A3199] rounded-lg text-center space-y-4 p-6">
                <h4 className="not-italic font-bold text-xl leading-7 text-black flex-none order-none flex-grow-0">Interactive Features</h4>
                <p className="not-italic font-base text-sm tracking-tighter leading-[20px] text-black text-justify flex-none order-1 flex-grow-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
              <div className="w-[268px] h-[160px] border-[1px] border-[#7A3199] rounded-lg text-center space-y-4 p-6">
                <h4 className="not-italic font-bold text-xl leading-7 text-black flex-none order-none flex-grow-0">Interactive Features</h4>
                <p className="not-italic font-base text-sm tracking-tighter leading-[20px] text-black text-justify flex-none order-1 flex-grow-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>

            <div className="space-y-8 mt-8">
              <div className="w-[268px] h-[160px] border-[1px] border-[#7A3199] rounded-lg text-center space-y-4 p-6">
                <h4 className="not-italic font-bold text-xl leading-7 text-black flex-none order-none flex-grow-0">Interactive Features</h4>
                <p className="not-italic font-base text-sm tracking-tighter leading-[20px] text-black text-justify flex-none order-1 flex-grow-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
              <div className="w-[268px] h-[160px] border-[1px] border-[#7A3199] rounded-lg text-center space-y-4 p-6">
                <h4 className="not-italic font-bold text-xl leading-7 text-black flex-none order-none flex-grow-0">Interactive Features</h4>
                <p className="not-italic font-base text-sm tracking-tighter leading-[20px] text-black text-justify flex-none order-1 flex-grow-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="box-border h-[300px] w-[400px] space-y-8 ">
              <h1 className="h-16 not-italic font-bold text-5xl text-black flex-none order-none flex-grow-0 ">About the Course</h1>
              <p className="not-italic font-normal text-base leading-5 text-black">Learn how to launch a successful podcast Lorem Ipsum is simply dummy text of the printing and typesetting in ustry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Sign up Now</p>
              <button className=" w-[237px] h-[74.86px] not-italic font-bold text-xl leading-7 text-white left-55 top-19 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl font-poppins">Sign up Now</button>
            </div>
          </div>
        </div>
      </div>

      <img src={pngWing} className="w-[50%]  sm:w-[30%] h-auto absolute -top-24 right-0" />
    </div>
  );
};

export default About;
