import { motion } from "framer-motion";
import { useState } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";
import Button from "./BackButton/BackButton";
import ToggleClose from "./ToggleClose";
import { roadmapData } from "@/data";

interface SidebarProps {
  setSelectedVideo: (video: {
    videoUrl: string;
    title: string;
    duration: string;
  }) => void;
}
const Sidebar = ({ setSelectedVideo }: SidebarProps) => {
  const [open, setOpen] = useState(true);
  const [expandedMainId, setExpandedMainId] = useState<string | null>(null);
  const [expandedLessonId, setExpandedLessonId] = useState<string | null>(null);

  const toggleMain = (id: string) => {
    setExpandedMainId((prev) => (prev === id ? null : id));
    setExpandedLessonId(null);
  };

  const toggleLesson = (id: string) => {
    setExpandedLessonId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.nav
      layout
      className=" sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white flex flex-col"
      style={{ width: open ? "320px" : "56px" }}
    >
      <div className="flex-1 mb-10 min-h-screen overflow-y-auto">
        {!open && (
          <div className="flex justify-center">
            <Button />
          </div>
        )}

        {open && (
          <div className="space-y-4 m-2">
            <Button />
            <h3 className="text-2xl">Frontend Roadmap</h3>

            {roadmapData.map((item) => (
              <div key={item.id} className="space-y-1">
                <div
                  className="flex justify-between items-center bg-[#C9B2E8] p-4 rounded-md cursor-pointer"
                  onClick={() => toggleMain(item.id)}
                >
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>

                {expandedMainId === item.id && (
                  <div className="space-y-1">
                    {item.lessons.map((lesson) => (
                      <div key={lesson.id}>
                        <div
                            className="flex justify-between items-center bg-[#CFD8FF] p-3 rounded-md cursor-pointer"
                            onClick={() =>
                            "subLessons" in lesson && toggleLesson(lesson.id)
                          }
                        >
                          <h4 className="text-sm font-medium">
                            {lesson.title}
                          </h4>
                          {"subLessons" in lesson && (
                            <span>
                              {expandedLessonId === lesson.id ? (
                                <FiChevronDown />
                              ) : (
                                <FiChevronRight />
                              )}
                            </span>
                          )}
                        </div>

                        {"subLessons" in lesson &&
                          expandedLessonId === lesson.id && (
                            <ul className="py-1 space-y-1">
                              {lesson.subLessons.map((sub) => (
                                <li key={sub.id}>
                                  <button
                                    onClick={() =>
                                      setSelectedVideo({
                                        videoUrl: sub.videoUrl,
                                        title: sub.title,
                                        duration: sub.duration,
                                      })
                                    }
                                    className="text-sm text-black text-left bg-[rgba(102,97,152,0.14)] p-2 w-full rounded-md hover:opacity-90"
                                  >
                                    {sub.title}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <ToggleClose open={open} setOpen={setOpen} />
      </div>
    </motion.nav>
  );
};

export default Sidebar;
