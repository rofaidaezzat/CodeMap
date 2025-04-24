
import { CircleArrowLeft, CircleArrowRight, UsersRound } from "lucide-react";
import { useRef } from "react";
import Image from "../components/Image";

const AboutUs = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <>
      {/* first section */}
      <div className=" lg:px-40 py-20 lg:pt-28 flex gap-x-10 ">
        <div className="lg:flex space-x-3 w-1/2 hidden sm:block">
          <div className="">
            <Image
              imageurl="src/assets/About us-20250305T145038Z-001/About us/download (1).jpeg"
              alt=""
              className="w-72 h-96 rounded-2xl mt-5"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Image
              imageurl="src/assets/About us-20250305T145038Z-001/About us/79e6f985-1f4c-44cb-aa2c-a15182796181.jpeg"
              alt=""
              className="w-44 h-52 rounded-2xl"
            />
            <Image
              imageurl="src/assets/About us-20250305T145038Z-001/About us/3D illustrations - Maria Garaeva.jpeg"
              alt=""
              className="w-80 h-72 rounded-2xl"
            />
          </div>
        </div>
        <div className="flex flex-col space-y-7 lg:w-1/2 sm-w-full p-9">
          <div className="flex items-center space-x-2">
            <UsersRound />
            <p className="text-[#9C4DF4] text-2xl"> about us</p>
          </div>
          <h3 className="text-3xl font-bold">
            Empowering Learners with Structured{" "}
            <span className="text-[#9C4DF4]">Roadmaps</span> &{" "}
            <span className="text-[#9C4DF4]">AI Guidance</span>
          </h3>
          <p className="text-slate-400 leading-7">
            Our platform provides a seamless learning experience by offering
            personalized roadmaps, curated courses, and AI-powered assistance to
            help users find their ideal learning path. Stay on track with task
            management, progress tracking, and deadline notifications.
          </p>
          <div className="flex space-x-6 pb-8">
            <div>
              <h3 className="font-semibold text-lg mb-3">OUR MISSION:</h3>
              <p>
                Empowering learners through structured, high-quality education
                to help them achieve their goals efficiently.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-3">OUR VISSION:</h3>
              <p>
                To create a seamless and engaging learning experience that
                fosters growth and lifelong success.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* second section */}
      <div className="relative">
        {/* Second Section (Box That Should Overlap) */}
        <div className="bg-[#2F174E] flex w-[370px] h-[200px] justify-center items-center rounded-full mx-auto lg:w-[1000px] lg:h-[150px] lg:space-x-12 absolute left-1/2 transform -translate-x-1/2 top-[-50px] text-white">
          <div className="flex space-x-2 items-center flex-col lg:flex-row">
            <div>
              <Image
                imageurl="src/assets/About us-20250305T145038Z-001/About us/VectorA4.png"
                alt="aboutus"
                className="p-2 lg:p-4 bg-white rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl">3K+</h3>
              <p>Successfully Trained</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center flex-col lg:flex-row">
            <div>
              <Image
                imageurl="src/assets/About us-20250305T145038Z-001/About us/VectorA3.png"
                alt="aboutus"
                className="p-2 lg:p-4 bg-white rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl">97K+</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center flex-col lg:flex-row">
            <div>
              <Image
                imageurl="src/assets/About us-20250305T145038Z-001/About us/VectorA2.png"
                alt="aboutus"
                className="p-2 lg:p-4 bg-white rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl">102K+</h3>
              <p>Students Community</p>
            </div>
          </div>
          <div className="flex space-x-2 items-center flex-col lg:flex-row">
            <div>
              <Image
                imageurl="src/assets/About us-20250305T145038Z-001/About us/VectorA1.png"
                alt="aboutus"
                className="p-2 lg:p-4 bg-white rounded-full"
              />
            </div>
            <div>
              <h3 className="text-2xl">3K+</h3>
              <p>Successfully Trained</p>
            </div>
          </div>
        </div>

        {/* Third Section (Background Section) */}

        <div className="bg-[#E8E8F4] w-full h-[600px] mb-20 justify-center pt-40 lg:pt-28 lg:px-6">
          <h3 className="mt-10 text-center text-3xl font-bold text-gray-900">
            Meet Our Team
          </h3>
          <div className="relative w-full lg:px-10 mt-10 ">
            <button
              onClick={scrollLeft}
              className="absolute  left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-400"
            >
              <CircleArrowLeft size={40} />
            </button>

            <div
              ref={scrollRef}
              className="flex lg:mx-20 gap-6 overflow-x-hidden scroll-snap-x mandatory scrollbar-hide p-4"
            >
            </div>
            {/* زر السهم لليمين */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-400"
            >
              <CircleArrowRight size={40} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
