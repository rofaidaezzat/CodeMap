import { LetterPullUp } from "@/components/eldoraui/letterpullup";
import Image from "../../components/Image";
import Trackcard from "../../components/Trackcard";
import Button from "../../Ui/Button";
import { useGetTracksQuery } from "@/app/services/GetTracks";
import CardTrackSkeleton from "@/components/CardTrackSkeleton";
import "@/index.css";

const Tracks = () => {
  const { data, isLoading } = useGetTracksQuery();

  if (isLoading)
    return (
      <div className="pt-20 mt-5 mb-5 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10 justify-center max-w-screen-xl mx-auto">
        {Array.from({ length: 8 }).map((_, index) => (
          <CardTrackSkeleton key={index} />
        ))}
      </div>
    );

  const renderTracks = data?.map(({ title, _id }) => (
    <Trackcard
      key={_id}
      url="/assets/Tracks img/Front-End.jpeg"
      alt={title}
      title={title}
      path="InfoOfFrontend"
      _id={_id}
    />
  ));

  return (
    <div className="pt-20 mt-5 px-4 overflow-x-hidden w-full">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-3/4 space-y-8">
          <LetterPullUp
            className="text-black font-display text-start text-2xl font-bold tracking-wide md:text-4xl"
            text="Choose your learning track"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {renderTracks}
          </div>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex flex-col w-full max-w-sm h-fit shadow-2xl rounded-xl p-4 space-y-4">
          <h3 className="text-2xl lg:text-3xl font-semibold">
            Upcoming Courses
          </h3>
          <div className="flex flex-col gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Image
                  imageurl="/assets/Tracks img/Front-End.jpeg"
                  alt="error"
                  className="w-24 h-24 rounded-xl object-cover"
                />
                <div>
                  <p className="text-lg font-bold text-[#565656] leading-snug">
                    Mastering Frontend HTML/CSS/JS
                  </p>
                  <p className="text-sm text-slate-500">2h 15m</p>
                </div>
              </div>
            ))}

            {/* Chatbot */}
            <div className="relative">
              <div className="absolute -right-7  bg-white border-4 border-[#2F174E] rounded-3xl p-6 flex flex-col items-start text-left shadow-lg w-[270px] md:w-[340px] lg:w-[400px]">
                <h3 className="font-bold text-lg text-gray-900">
                  Not sure where to start?
                  <br />
                  Talk to our chatbot
                </h3>
                <Button className="mt-4 bg-[#2F174E] text-white py-2 px-4 rounded-full text-sm font-semibold shadow-md">
                  Start Chatting
                </Button>
                <div className="absolute -right-12 bottom-2   hidden md:flex  md:w-[130px] md:h-[130]   lg:w-[150px]  lg:h-[150px]">
                  <Image
                    imageurl="/assets/Home/chat.png"
                    alt="error"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;