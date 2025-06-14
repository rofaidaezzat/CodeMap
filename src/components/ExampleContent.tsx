import { Clock, Globe, OctagonAlert } from "lucide-react";

interface Iprops {
  videoUrl: string;
  title: string;
  duration: string;
}

const ExampleContent = ({ videoUrl, title, duration }: Iprops) => {
  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="space-y-4 p-6 text-black rounded-t-xl">
        <h3 className="text-3xl font-bold">
          Introduction and What I Need To Learn
        </h3>
        <p className="text-lg text-black">Introduction about HTML</p>
      </div>

      {/* Main Content Section */}
      <div className="bg-white p-6 space-y-6 rounded-b-xl shadow-lg">
        {/* Video Container */}
        <div className="w-full aspect-video flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
          <iframe
            title="video"
            src={videoUrl}
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Video Info */}
        <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h3 className="text-2xl font-bold text-black">{title}</h3>
          </div>
          
          {/* Description Section */}
          <div className="mt-6">
            <h4 className="text-xl font-semibold text-black mb-3">About This Lesson</h4>
            <p className="text-gray-700 leading-relaxed">
              In this lesson, you will learn the fundamentals of HTML, including document structure, 
              basic elements, and best practices for creating well-structured web pages. This is the 
              foundation for your web development journey.
            </p>
          </div>

          {/* Learning Objectives */}
          <div className="mt-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#371F5A]" />
                <span className="text-gray-700 text-sm">{duration}</span>
              </li>
              <li className="flex items-center gap-3">
                <OctagonAlert size={18} className="text-[#371F5A]" />
                <span className="text-gray-700 text-sm">Lastedit</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe size={18} className="text-[#371F5A]" />
                <span className="text-gray-700 text-sm">Arabic</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleContent;