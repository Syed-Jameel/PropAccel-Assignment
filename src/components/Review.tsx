import { StarIcon } from "@heroicons/react/20/solid";

const Review = () => {
  const people = [
    {
      name: "Leslie Alexander",
      company: "Microsoft",
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      company: "Microsoft",
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Leslie Alexander",
      company: "Microsoft",
      review: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];

  return (
    <div className="w-full h-[80vh] flex flex-col items-center justify-center">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start">
          <div className="w-[400px] h-[10px] space-y-4">
            <h4 className="h-12 not-italic font-bold text-3xl text-black flex-none order-none flex-grow-0">Review from customers</h4>
            <p className="not-italic font-base text-sm tracking-tighter leading-[20px] text-black">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry</p>
          </div>
        </div>

        <div className="mt-32 -mr-36">
          <ul role="list" className="grid gap-x-60 gap-y-4 sm:grid-cols-3 items-start  w-full h-[270px] overflow-hidden">
            {people.map((person, index) => (
              <li key={index} className="w-[450px] h-[240px] bg-[#FFF] bg-opacity-40 p-6 border-box rounded-lg shadow-lg">
                <div className="flex items-center gap-x-6 ">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-black">{person.company}</p>
                    <div className="flex flex-row items-center justify-between w-[100px]">
                      <StarIcon className="w-5 h-5 text-[#FCD53F]" />
                      <StarIcon className="w-5 h-5 text-[#FCD53F]" />
                      <StarIcon className="w-5 h-5 text-[#FCD53F]" />
                      <StarIcon className="w-5 h-5 text-[#FCD53F]" />
                      <StarIcon className="w-5 h-5 text-[#FCD53F]" />
                    </div>
                  </div>
                </div>
                <p className="text-xs font-base leading-2 text-black pt-6">{person.review}</p>
              </li>
            ))}
          </ul>
          <div className="flex flex-row items-center justify-center">
            <div className="w-[170px] h-[15px] flex flex-row items-center justify-between">
              <div className="w-2 h-2 bg-[#7A3199] rounded-full"></div>
              <div className="w-2 h-2 bg-[#EEEEEE] rounded-full"></div>
              <div className="w-2 h-2 bg-[#EEEEEE] rounded-full"></div>
              <div className="w-2 h-2 bg-[#EEEEEE] rounded-full"></div>
              <div className="w-2 h-2 bg-[#EEEEEE] rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
