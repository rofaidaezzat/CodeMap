import { BookOpenCheck } from "lucide-react";
import { useState } from "react";


const Tasks = () => {
  // -----------------------state-----------------------------
  const [selectedTrack, setSelectedTrack] = useState("html");

  return (
    <div className="lg:px-40 py-20 lg:pt-28">
      <div className="flex flex-col gap-4 pb-6">
        <h3 className="text-3xl font-medium">Frontend Development Tasks</h3>
        <p className="text-[20px]">Start your journey to become a frontend developer</p>
      </div>
      <div className="border-b-2 flex items-center  border-gray-400 mb-6">
      <ul className="flex gap-5">
        <li
        className={`cursor-pointer ${
        selectedTrack === "html" ? "text-[#DE00A5] font-semibold text-2xl" : "text-xl font-bold"
        }`}
        onClick={() => setSelectedTrack("html")}
        >
          Html
        </li>
        <li
        className={`cursor-pointer ${
        selectedTrack === "css" ? "text-[#DE00A5] font-semibold text-2xl" : "text-xl font-bold"
        }`}
        onClick={() => setSelectedTrack("css")}
        >
          CSS
        </li>
        <li
      className={`cursor-pointer ${
        selectedTrack === "js" ? "text-[#DE00A5] font-semibold text-2xl" : "text-xl font-bold"
      }`}
      onClick={() => setSelectedTrack("js")}
    >
      JavaScript
    </li>
  </ul>
</div>

      {/* هنا الهيتغير بناء علي هيختار html  */}
      {selectedTrack === "html" && (
        <div className="space-y-4">
          <div className="flex gap-3 pb-4">
            <div className="flex flex-col w-60 p-6 border-2 space-y-2 border-gray-400 rounded-md">
              <p>HTML Tasks Completed</p>
              <p className="font-bold">0</p>
              <p className="text-[#0AD95C]">+0%</p>
            </div>
            <div className="flex flex-col w-60 p-6 border-2 space-y-2 border-gray-400 rounded-md">
              <p>Total Tasks</p>
              <p className="font-bold">15</p>
              <p className="text-[#0AD95C]">+0%</p>
            </div>
            <div className="flex flex-col p-6 w-60 border-2 space-y-2 border-gray-400 rounded-md">
              <p>Average Rating</p>
              <p className="font-bold">4.5</p>
              <p className="text-[#0AD95C]">+0%</p>
            </div>
          </div>
          <div className="pb-4">
            <h3 className="text-2xl font-serif pb-2">Tasks details</h3>
            <p>
              This track is designed for beginners. It will teach you the basics
              of HTML, CSS, and JavaScript. By the time you finish this track,
              you will be able to create a simple website.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-serif pb-2">Tasks lessons for HTML</h3>
            <div className="flex justify-between items-center bg-gray-400 p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3>Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-400 p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3>Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-400 p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3>Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* هنا الهيتغير بناء علي هيختار  css  */}
      {selectedTrack === "css" && (
        <div className="space-y-4 w-full">
          <div className="flex gap-3  pb-4">
            <div className="flex flex-col w-1/4 p-6 border-2 space-y-2 border-gray-400 rounded-md">
              <p className="text-[20px] font-medium">HTML Tasks Completed</p>
              <p className="font-bold text-[20px]">0</p>
              <p className="text-[#0AD95C] text-[20px]">+0%</p>
            </div>
            <div className="flex flex-col  w-1/4 p-6 border-2 space-y-2 border-gray-400 rounded-md">
              <p className="text-[20px] font-medium">Total Tasks</p>
              <p className="font-bold text-[20px]">15</p>
              <p className="text-[#0AD95C] text-[20px]">+0%</p>
            </div>
            <div className="flex flex-col p-6  w-1/4 border-2 space-y-2 border-gray-400 rounded-md">
              <p className="text-[20px] font-medium">Average Rating</p>
              <p className="font-bold text-[20px]">4.5</p>
              <p className="text-[#0AD95C] text-[20px]">+0%</p>
            </div>
          </div>
          <div className="flex flex-col gap-5 ">
            <h3 className="text-3xl font-medium pb-2">Tasks details</h3>
            <p className="text-[20px]">
              This track is designed for beginners. It will teach you the basics
              of HTML, CSS, and JavaScript. By the time you finish this track,
              you will be able to create a simple website.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-medium pb-2">Tasks lessons for css</h3>
            <div className="flex justify-between items-center bg-gray-400 p-4 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3 className="text-[18px]">Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-400 p-4 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3 className="text-[18px]">Introduction to css</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-400 p-4 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3 className="text-[18px]">Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* هنا الهيتغير بناء علي هيختار  js  */}
      {selectedTrack === "js" && (
        <div className="space-y-4">
          <div className="flex gap-3 pb-4">
            <div className="flex flex-col w-60 p-6 border-2 space-y-2 border-gray-400 rounded-md">
              <p>HTML Tasks Completed</p>
              <p className="font-bold">0</p>
              <p className="text-[#0AD95C]">+0%</p>
            </div>
            <div className="flex flex-col w-60 p-6 border-2 space-y-2 border-gray-400 rounded-md">
              <p>Total Tasks</p>
              <p className="font-bold">15</p>
              <p className="text-[#0AD95C]">+0%</p>
            </div>
            <div className="flex flex-col p-6 w-60 border-2 space-y-2 border-gray-400 rounded-md">
              <p>Average Rating</p>
              <p className="font-bold">4.5</p>
              <p className="text-[#0AD95C]">+0%</p>
            </div>
          </div>
          <div className="pb-4">
            <h3 className="text-2xl font-serif pb-2">Tasks details</h3>
            <p>
              This track is designed for beginners. It will teach you the basics
              of HTML, CSS, and JavaScript. By the time you finish this track,
              you will be able to create a simple website.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-2xl font-serif pb-2">Tasks lessons for js</h3>
            <div className="flex justify-between items-center bg-gray-400 p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3>Introduction to js</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-400 p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3>Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
            <div className="flex justify-between items-center bg-gray-400 p-2 rounded-md">
              <div className="flex gap-3 items-center">
                <BookOpenCheck
                  color="#000000"
                  className="p-4bg-[#99A4AF] text-black"
                />
                <div className="flex flex-col space-x-1">
                  <h3>Introduction to HTML</h3>
                  <p>25 minutes</p>
                </div>
              </div>
              <div>
                <p>completed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
