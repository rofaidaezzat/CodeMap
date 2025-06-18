import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import ToggleClose from "./ToggleClose";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";
import LargeLoadingSpinner from "@/Ui/LargeLoadingSpinner/LargeLoadingSpinner";
import CheckBox from "../TaskFormComponents/checkbox/CheckBox";
import { Youtube, Clock, BookOpen } from "lucide-react";
import { clickedIdLessonAction } from "@/app/features/clickedIdLessonSlice";

interface SidebarProps {
  setSelectedVideo: (video: {
    videoUrl: string;
    title: string;
    duration: number;
  }) => void;
  currentVideo?: {
    videoUrl: string;
    title: string;
    duration: number;
  };
}

interface Icategory {
  _id: string;
  title: string;
}

interface ILessons {
  _id: string;
  title: string;
  link:string 
  lesson_duration:number,
  lecture_number:number
}

interface IRoadmap{
    _id: string;
    title:string
}

interface IStatges {
  _id: string;
  title: string;
  category: Icategory[];
  lesson: ILessons[];
  roadmap:IRoadmap;
}

interface ICompletedLesson {
  _id: string;
  lecture_number:number
  completedby: string[];
}

export type ICompletedLessonResponse = ICompletedLesson[];
export type IstatgesResponse = IStatges[];


  const Sidebar = ({ setSelectedVideo }: SidebarProps) => {
    // user id
    const userDataString = localStorage.getItem("loggedInUser");
    const userData = userDataString ? JSON.parse(userDataString) : null;
    const IdUser=userData.id
  // states
  const { ClickedIdLesson } = useSelector((state: RootState) => state.clickedIdLesson);
  const { ClickedId } = useSelector((state: RootState) => state.clickedId);
  const [open, setOpen] = useState(true);
  const [expandedMainIds, setExpandedMainIds] = useState<string[]>([]);
  const [expandedLessonIds, setExpandedLessonIds] = useState<string[]>([]);
  const Dispatch=useDispatch()


  const toggleMain = (id: string) => {
    setExpandedMainIds(prev =>
      prev.includes(id) ? prev.filter(openId => openId !== id) : [...prev, id]
    );
  };

  const toggleLesson = (id: string) => {
    setExpandedLessonIds(prev =>
      prev.includes(id) ? prev.filter(openId => openId !== id) : [...prev, id]
    );
  };




  // fetch all lesson 
  const getStatgesById = async (): Promise<IstatgesResponse> => {
    if (!ClickedId) throw new Error("No stage ID Provided");
    const { data } = await axiosInstance.get(`/stages/roadmap/${ClickedId}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["oneRoadmap", ClickedId],
    queryFn: getStatgesById,
    enabled: !!ClickedId,
  });



  
  // fetch Completed Lesson
  const getCompletedLessons = async (): Promise<ICompletedLessonResponse> => {
    const { data } = await axiosInstance.get(`/lesson/completed`);
    return data;
  };
  

  const { data:watchedLessonIds } = useQuery({
    queryKey: ["userCompletedLessons"],
    queryFn: getCompletedLessons,
  });

// fetch completed lesson for user 
const completedLessonIds = watchedLessonIds
  ?.filter((lesson) => lesson.completedby.includes(IdUser))
  ?.map((lesson) => lesson._id);


  // Get the max lecture_number from completed lessons for user
const maxCompletedLectureNumber = Math.max(
  0,
  ...watchedLessonIds
    ?.filter((lesson) => lesson.completedby.includes(IdUser))
    ?.map((lesson) => lesson.lecture_number) || []
);




  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-200 bg-white flex flex-col shadow-lg "
      style={{ width: open ? "390px" : "56px" }}
    >
      <div className="flex-1 mb-10 min-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
        {isLoading ? (
          <div className="flex items-center justify-center h-full">
            <LargeLoadingSpinner />
          </div>
        ) : (
          <>
          
            {open && (
              <div className="flex flex-col gap-4 p-4">
                <div className="space-y-4 pt-2">
                        <h3 className="text-2xl font-bold text-gray-800">{data?.[0]?.roadmap?.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <BookOpen size={16} />
                      {data?.length} Sections
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      Total Duration
                    </span>
                  </div>
                </div>
                {data?.map(({ _id, category, lesson, title}) => (
                  <div key={_id} className="space-y-4">
                    <div
                      className="flex justify-between items-center bg-gradient-to-r from-[#371F5A] to-[#5d3599] p-4 rounded-lg cursor-pointer hover:from-[#57318f] hover:to-[#6d3eb4] transition-all duration-300 shadow-md"
                      onClick={() => toggleMain(_id)}
                    >
                      <h3 className="text-xl font-semibold text-white">{title}</h3>
                      <motion.span
                        animate={{ rotate: expandedMainIds.includes(_id) ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-white"
                      >
                        <FiChevronDown size={20} />
                      </motion.span>
                    </div>
                    <AnimatePresence>
                      {expandedMainIds.includes(_id) && (
                        <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                          className="space-y-3 pl-3 overflow-hidden"
                        >
                          {category.map(({ _id: categoryId, title }) => (
                            <div key={categoryId}>
                              <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="flex justify-between items-center bg-gray-200 p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-300 border border-gray-200"
                                onClick={() => toggleLesson(categoryId)}
                              >
                                <h4 className="text-lg font-medium text-gray-700">{title}</h4>
                                <motion.span
                                  animate={{ rotate: expandedLessonIds.includes(categoryId) ? 90 : 0 }}
                                  transition={{ duration: 0.2 }}
                                  className="text-gray-500"
                                >
                                  <FiChevronRight size={20} />
                                </motion.span>
                              </motion.div>
                              <AnimatePresence>
                                {expandedLessonIds.includes(categoryId) && (
                                  <motion.ul
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="py-2 space-y-0 pl-2 overflow-hidden"
                                  >
                                    {lesson.map(({ _id: lessonId, title,lesson_duration,link,lecture_number }, index) => {
                                    const isActive = lessonId === ClickedIdLesson;
                                    const isLockedLesson =lecture_number > maxCompletedLectureNumber + 1;
                                      return (
                                        <li key={lessonId} className="relative">
                                          {index > 0 && (
                                            <div className="absolute left-0 right-0 top-0 h-[1px] bg-gray-200" />
                                          )}
                                          <motion.div
                                            initial={{ opacity: 0, y: -20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.5 }}
                                            onClick={() => {
                                                      if (isLockedLesson) return; 
                                                        setSelectedVideo({
                                                        videoUrl: link,
                                                        title: title,
                                                        duration: lesson_duration,
                                                    });
                                              Dispatch(clickedIdLessonAction(lessonId));
                                              }}
                                            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 group relative
                                              ${isLockedLesson
                                              ? 'opacity-50 cursor-not-allowed'
                                              : isActive
                                              ? 'bg-purple-100 border-l-4 border-[#5d3599]'
                                              : 'hover:bg-purple-50'
                                              }`}
                                            >
                                            {completedLessonIds && (
                                              <CheckBox 
                                              checked={completedLessonIds.includes(lessonId)} 
                                              disabled 
                                              />
                                              )}                                            
                                              <div className="flex-1">
                                              <h5 className={`text-md font-medium transition-colors
                                                ${isActive 
                                                  ? 'text-black' 
                                                  : 'text-gray-700 group-hover:text-black'}`}>
                                                {title}
                                              </h5>
                                              <div className="flex items-center gap-2 mt-1">
                                                <Youtube size={16} className="text-red-600" />
                                                <span className="text-md text-gray-500">2 hrs</span>
                                              </div>
                                            </div>
                                          </motion.div>
                                        </li>
                                      );
                                    })}
                                  </motion.ul>
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
        <ToggleClose open={open} setOpen={setOpen} />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
