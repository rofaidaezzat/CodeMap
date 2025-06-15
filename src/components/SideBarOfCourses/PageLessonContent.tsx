import LargeLoadingSpinner from "@/Ui/LargeLoadingSpinner/LargeLoadingSpinner";
import { Clock, Globe, OctagonAlert } from "lucide-react";
import YouTube from "react-youtube";
import { useDispatch } from "react-redux";
import { markLessonWatched } from "@/app/features/WatchedLesson";
import { useMarkLessonCompletedMutation } from "@/app/services/userOperations";

interface Iprops {
  videoUrl: string;
  title: string;
  titleofStatge: string;
  duration: number;
  titleofLesson: string;
  description: string;
  LastEdit: string;
  isloading: boolean;
  currentLessonId: string;

}

// استخراج الـ videoId من أي رابط يوتيوب
const extractVideoId = (url: string): string => {
  if (!url || typeof url !== "string") return "";

  try {

    const cleanUrl = url.split("?")[0];

    const parsedUrl = new URL(cleanUrl);
    const idFromParams = parsedUrl.searchParams.get("v");

    if (idFromParams) return idFromParams;

    const parts = parsedUrl.pathname.split("/");
    return parts[parts.length - 1]; 
  } catch (err) {
    console.error("Invalid YouTube URL:", url);
    console.log(err)
    return "";
  }
};

const ContentOfPage = ({
  videoUrl,
  duration,
  titleofStatge,
  titleofLesson,
  description,
  LastEdit,
  isloading,
  currentLessonId
}: Iprops) => {

  // states
  const dispatch = useDispatch();
  const [MarkLessonCompleted ,{data}]=useMarkLessonCompletedMutation()
  
  
  // if the user watch video
  const onPlayerEnd = () => {
    dispatch(markLessonWatched(currentLessonId));
    MarkLessonCompleted(currentLessonId)
    console.log(data)
  };

  if (isloading)
    return (
      <div className="flex items-center justify-center w-full min-h-screen">
        <LargeLoadingSpinner />
      </div>
    );

  const videoId = extractVideoId(videoUrl);

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="p-3 text-black rounded-t-xl">
        <h3 className="text-3xl font-bold">{titleofStatge}</h3>
        <p className="text-lg text-black">{titleofLesson}</p>
      </div>

      <div className="bg-white p-6 space-y-6 rounded-b-xl shadow-lg">
        <div className="w-full aspect-video flex justify-center items-center bg-gray-100 rounded-xl overflow-hidden">
          {videoId ? (
            <YouTube
              videoId={videoId}
              onEnd={onPlayerEnd}
              className="w-full h-full"
              iframeClassName="w-full h-full rounded-xl"
            />
          ) : (
            <div className="text-red-500">error</div>
          )}
        </div>

        <div className="space-y-6 bg-gray-50 p-6 rounded-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <h3 className="text-2xl font-bold text-black">{titleofLesson}</h3>
          </div>

          <div className="mt-6">
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          <ul className="space-y-3 mt-6">
            <li className="flex items-center gap-3">
              <Clock size={18} className="text-[#371F5A]" />
              <span className="text-gray-700 text-sm">{duration} h</span>
            </li>
            <li className="flex items-center gap-3">
              <OctagonAlert size={18} className="text-[#371F5A]" />
              <span className="text-gray-700 text-sm">Lastedit {LastEdit}</span>
            </li>
            <li className="flex items-center gap-3">
              <Globe size={18} className="text-[#371F5A]" />
              <span className="text-gray-700 text-sm">Arabic</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContentOfPage;
