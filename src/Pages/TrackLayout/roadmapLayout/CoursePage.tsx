
import ExampleContent from "@/components/ExampleContent";
import Sidebar from "@/components/SideBarOfCourses/SideBar";
import { useState } from "react";

const CoursePage = () => {
  const [selectedVideo, setSelectedVideo] = useState({
    videoUrl: "https://www.youtube.com/embed/lG_mTu0wyZA",
    title: "Html Introduction",
    duration: "2h",
  });

  return (
    <div className="flex lg:pt-16">
      <Sidebar setSelectedVideo={setSelectedVideo} />
      <ExampleContent
        videoUrl={selectedVideo.videoUrl}
        title={selectedVideo.title}
        duration={selectedVideo.duration}
      />
    </div>
  );
};

export default CoursePage;