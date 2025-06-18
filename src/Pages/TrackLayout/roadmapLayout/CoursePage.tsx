import { RootState } from "@/app/store";
import ContentOfPage from "@/components/SideBarOfCourses/PageLessonContent";
import Sidebar from "@/components/SideBarOfCourses/SideBar";
import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useSelector } from "react-redux";

interface IStage {
  _id: string;
  title: string;
}

interface ILesson {
  title: string;
  description: string;
  link: string;
  lesson_duration: number;
  lecture_number: number;
  stage: IStage;
  updatedAt: string;
}

type ILessonResponse = ILesson;

const CoursePage = () => {
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const IdUser = userData.id;
  const { ClickedIdLesson } = useSelector(
    (state: RootState) => state.clickedIdLesson
  );

  const [selectedVideo, setSelectedVideo] = useState({
    videoUrl: "https://www.youtube.com/embed/lG_mTu0wyZA",
    title: "Html Introduction",
    duration: 2,
  });
  console.log(selectedVideo);

  const getLessonById = async (): Promise<ILessonResponse> => {
    if (!ClickedIdLesson) throw new Error("No Lesson ID Provided");
    const { data } = await axiosInstance.get(`/lesson/${ClickedIdLesson}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["oneLesson", ClickedIdLesson],
    queryFn: getLessonById,
    enabled: !!ClickedIdLesson,
  });

  return (
    <div className="flex flex-col-reverse lg:flex-row w-full">
      <Sidebar setSelectedVideo={setSelectedVideo} />
      <ContentOfPage
        currentLessonId={ClickedIdLesson ?? ""}
        videoUrl={data?.link ?? ""}
        title={data?.title ?? ""}
        LastEdit={data?.updatedAt ?? ""}
        description={data?.description ?? ""}
        duration={data?.lesson_duration ?? 0}
        titleofLesson={data?.title ?? ""}
        titleofStatge={data?.stage?.title ?? ""}
        isloading={isLoading}
        userId={IdUser}
      />
    </div>
  );
};

export default CoursePage;
