import CardofProfileOfCourses from "@/components/CardofProfileOfCourses/CardofProfileOfCourses";
import { useState } from "react";
import { motion } from "framer-motion";
import DetailsOfUser from "@/components/profileComponents/DetailsOfUser";
import { axiosInstance } from "@/config/axios.config";
import { useQueries, useQuery } from "@tanstack/react-query";
import Spinner from "@/Ui/LoadingSpinner";
import { Link } from "react-router-dom";

interface IUser {
  completedlesson: string[];
  email: string;
  first_name: string;
  last_name: string;
  lesson: string[];
  profile_image: string;
  roadmap: string[];
  task: string[];
  stage: string[];
  role: string;
}

const Profile = () => {
  const [openYourTracks, setOpenYourTracks] = useState(false);
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const IdUser = userData.id;

  const getUserById = async (): Promise<IUser> => {
    if (!IdUser) throw new Error("No User ID Provided");
    const { data } = await axiosInstance.get(`users/${IdUser}`);
    return data;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["oneUser", IdUser],
    queryFn: getUserById,
    enabled: !!IdUser,
  });

  const toggle = () => {
    setOpenYourTracks((prev) => !prev);
  };

  const getRoadmapById = async (id: string) => {
    const { data } = await axiosInstance.get(`/roadmaps/${id}`);
    return data;
  };

  const roadmapsQueries = useQueries({
    queries: (data?.roadmap || []).map((roadmapId) => ({
      queryKey: ["roadmap", roadmapId],
      queryFn: () => getRoadmapById(roadmapId),
      enabled: openYourTracks,
    })),
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Profile Header */}
          <motion.div variants={itemVariants} className="mb-8 w-full">
            <DetailsOfUser />
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={`bg-white rounded-xl shadow-lg p-6 border-2 transition-all duration-300 ${
                openYourTracks
                  ? "border-pink-600"
                  : "border-gray-200 hover:border-pink-600"
              }`}
              onClick={toggle}
            >
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {isLoading ? <Spinner /> : data?.roadmap.length}
              </div>
              <div className="text-gray-600 font-medium">Tracks</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-pink-600 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {isLoading ? <Spinner /> : data?.lesson.length}
              </div>
              <div className="text-gray-600 font-medium">Lessons</div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-pink-600 transition-all duration-300"
            >
              <Link to="/tasks">
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {isLoading ? <Spinner /> : data?.task.length}
                </div>
                <div className="text-gray-600 font-medium">Tasks</div>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl shadow-lg p-6 border-2 border-gray-200 hover:border-pink-600 transition-all duration-300"
            >
              <div className="text-3xl font-bold text-gray-800 mb-2">
                {isLoading ? <Spinner /> : data?.completedlesson.length}
              </div>
              <div className="text-gray-600 font-medium">Completed Lessons</div>
            </motion.div>
          </motion.div>

          {/* Dynamic Tracks Section */}
          {openYourTracks && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-6 mb-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {roadmapsQueries.map((query, index) => {
                  if (query.isLoading) {
                    return (
                      <div key={index} className="flex justify-center">
                        <Spinner />
                      </div>
                    );
                  }

                  if (query.isError || !query.data) return null;

                  const { _id, title, requirments } = query.data;

                  return (
                    <motion.div
                      key={_id}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className="flex justify-center"
                    >
                      <div className="w-64">
                        <CardofProfileOfCourses
                          DescriptionCard={requirments}
                          ImageUrl={`/assets/Tracks img/Front-End.jpeg`}
                          TitleOfCard={title}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </motion.div>
        {/* Static About Section */}
        <div className="mt-10 w-full flex justify-center">
          <div className="bg-white rounded-2xl shadow-xl border-2 border-[#b480cc]/30 p-8 max-w-3xl w-full text-center">
            <h2 className="text-2xl font-extrabold text-[#2F174E] mb-3 drop-shadow">About CodeMap</h2>
            <p className="text-[#371F5A] text-lg leading-relaxed">
              CodeMap is your interactive learning companion! 🚀<br/>
              Track your progress, complete tasks, and unlock new skills in a vibrant community.<br/>
              Whether you're a beginner or an expert, CodeMap helps you achieve your learning goals with a beautiful and intuitive experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
