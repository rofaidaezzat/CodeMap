import Image from "../components/Image";
import Button from "../Ui/Button";
import Card from "../components/Card";
import CardWithoutImageInHome from "@/components/CardWithoutImageInHome/CardWithoutImageInHome";
import MorphingText from "@/components/eldoraui/morphingtext";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import Search from "@/components/Search/Search";
import { useGetTracksQuery } from "@/app/services/GetTracks";
import CardTrackSkeleton from "@/components/CardTrackSkeleton";

const HomePage = () => {
  const texts = ["Course", "Video", "Track", "Mo2a"];

  // Animation statemangment
  const controlsTracks = useAnimation();
  const { ref: refTracks, inView: inViewTracks } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewTracks) {
      controlsTracks.start("visible");
    }
  }, [inViewTracks]);

  const controlsTestimonials = useAnimation();
  const { ref: refTestimonials, inView: inViewTestimonials } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewTestimonials) {
      controlsTestimonials.start("visible");
    }
  }, [inViewTestimonials]);

  const controlsPremium = useAnimation();
  const { ref: refPremium, inView: inViewPremium } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inViewPremium) {
      controlsPremium.start("visible");
    }
  }, [inViewPremium]);
  // section ourtrack fetch only three tracks They are available to me
  const { data, isLoading } = useGetTracksQuery();

  // Get first three tracks
  const firstThreeTracks = data?.slice(0, 3);

  return (
    <>
      <div className="bg-[#CFD8FF] rounded-b-xl ">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-around px-8 py-16 mt-10">
          <motion.div
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-left max-w-lg flex flex-col gap-0"
          >
            <h6 className="text-3xl  md:text-4xl font-bold text-gray-900 leading-snug">
              Let's Find The Right{" "}
              <span className="text-[#545BE8]">
                <MorphingText texts={texts} />
              </span>{" "}
              For You
            </h6>
            <div className="flex justify-between ">
              <Image
                imageurl="src/assets/Home/Group7.png"
                alt="error"
                className="w-10"
              />
              <Image
                imageurl="src/assets/Home/Group8.png"
                alt="error"
                className="w-10"
              />
            </div>
            {/* ---------search bar----------------------- */}
            <Search />
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-80 md:w-[450px]"
          >
            <Image
              imageurl="src/assets/Home/OBJECTS.png"
              alt="error"
              className="w-full"
            />
          </motion.div>
        </div>
        <div className=" flex justify-between px-2 pb-2">
          <Image
            imageurl="src/assets/Home/casual-life-3d-orange-planet-with-disk 1.png"
            alt="error"
            className="w-10"
          />
          <Image
            imageurl="src/assets/Home/Group12.png"
            alt="error"
            className="w-10"
          />
        </div>
      </div>
      {/* ------------------------chatboot section------------------------- */}
      <div className="bg-[#2F174E] flex justify-center  -mt-5 md:-mt-10   mx-auto w-5/6 md:w-4/6  py-10  rounded-3xl spin">
        <div className="bg-white flex items-center justify-between md:justify-around w-11/12 mx-auto p-6 md:p-8 rounded-xl shadow-lg flex-wrap gap-6 min-h-[2px] md:min-h-[2px]">
          <div className="w-16 h-16 md:w-24 md:h-24">
            <Image
              imageurl="src/assets/Home/chat.png"
              alt="Chatbot"
              className="w-full h-full image-container"
            />
          </div>

          <h6 className="text-xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
            Not sure where to start? <br className="hidden md:block" />
            Talk to our chatbot
          </h6>
          <Link to="/chatbot">
            <Button className="bg-[#2F174E] text-white px-4 md:px-6 py-2 rounded-full flex items-center justify-center font-semibold text-sm md:text-base">
              Start Chatting
            </Button>
          </Link>
        </div>
      </div>
      {/* --------------Section ourTracks------------------ */}
      <motion.div
        ref={refTracks}
        initial="hidden"
        animate={controlsTracks}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className="mt-5"
      >
        <div className="flex justify-between mx-10 px-10 w-auto h-11">
          <Image
            imageurl="src/assets/Home/lamb.png"
            alt="error"
            className="w-[80px] h-auto"
          />
          <Image
            imageurl="src/assets/Home/Group3.png"
            alt="error"
            className="w-8 h-8 "
          />
        </div>

        <h3 className="text-center font-semibold text-4xl">Our Tracks</h3>
        <p className="text-center">Most popular tracks suggested for you</p>
        <div className="mt-10 pb-7 flex flex-col items-center lg:gap-10 gap-10 sm:flex-row justify-center overflow-hidden flex-wrap">
          <div className="hidden md:hidden lg:flex lg:flex-col justify-between h-full gap-10">
            <Image
              imageurl="src/assets/Home/Group2.png"
              alt="error"
              className="w-[40px] h-auto"
            />
            <Image
              imageurl="src/assets/Home/Group4.png"
              alt="error"
              className="w-[50px] h-auto"
            />
          </div>
          {isLoading ? (
            <div className="pt-20 mt-5 mb-5 px-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
              {Array.from({ length: 3 }).map((_, index) => (
                <CardTrackSkeleton key={index} />
              ))}
            </div>
          ) : (
            <div>
              {firstThreeTracks?.map((track) => (
                <Card
                  key={track._id}
                  url="src/assets/Tracks img/Front-End.jpeg"
                  alt={track.title}
                  requirments={track.requirments}
                  title={track.title}
                  _id={track._id}
                />
              ))}
            </div>
          )}

          <div className="hidden md:hidden lg:flex lg:flex-col justify-end gap-10">
            <Image
              imageurl="src/assets/Home/Group2.png"
              alt="error"
              className="w-[40px] h-auto"
            />
            <Image
              imageurl="src/assets/Home/Group4.png"
              alt="error"
              className="w-[50px] h-auto"
            />
          </div>
        </div>
      </motion.div>
      {/* --------------------premium learing------------------------------- */}
      <motion.div
        ref={refPremium}
        initial="hidden"
        animate={controlsPremium}
        className="my-10 p-5 flex flex-col md:flex-row md:h-[500px] h-[400px] lg:flex-row bg-[#CFD8FF] lg:justify-around gap-5"
      >
        {/* image  */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controlsPremium}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1 } },
          }}
          className="hidden w-full lg:w-[450px] h-[500px] lg:flex justify-center ml-11"
        >
          <img
            src="src\assets\Home\OBJECTS2.png"
            alt="Premium LearningExperience"
            className="sm:w-3/4 lg:w-full w-[516px] h-[500px]"
          />
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controlsPremium}
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1 } },
          }}
          className="w-full lg:w-1/2 flex flex-col items-start justify-center gap-10"
        >
          {/* header */}
          <div className="flex">
            <h3 className="font-bold text-[40px] w-full">
              Premium <span>Learning</span>
              <br /> Experience
            </h3>
          </div>
          <div className="space-y-5">
            {/* heart1  */}
            <div className="flex items-center justify-center space-x-2">
              <div className="p-4 heart">
                <Image
                  imageurl="src\assets\Home\hearts 1.png"
                  alt="error"
                  className="w-8 h-8"
                />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">
                  Structured Learning Path
                </h3>
                <p className="text-slate-400">
                  Follow our carefully designed roadmaps to master programming
                  skills step by step, from basics to advanced concepts.
                </p>
              </div>
            </div>
            {/* heart2 */}
            <div className="flex items-center justify-center space-x-2">
              <div className="p-4 heart">
                <img src="src\assets\Home\hearts 1.png" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">Interactive Learning</h3>
                <p className="text-slate-400">
                  Engage with practical exercises, real-world projects, and
                  community support to enhance your learning journey.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* ------------------------Section what student say----------------------- */}
      <motion.div
        ref={refTestimonials}
        initial="hidden"
        animate={controlsTestimonials}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="py-12"
      >
        <h3 className="text-center font-semibold text-4xl">
          What Our Students Say
        </h3>
        <p className="text-center">
          Join thousands of successful developers who transformed their careers
          with our learning platform
        </p>
        <div className="mt-10 mb-10 flex flex-col items-center lg:gap-0 gap-5 space-y-2 sm:flex-row sm:justify-center md:justify-around flex-wrap">
          <Image
            imageurl="src\assets\Home\Group12.png"
            alt="error"
            className="hidden lg:flex w-20 h-20"
          />

          <CardWithoutImageInHome
            title="Frontend Developer"
            description="The structured learning path helped me transition from a complete beginner to a professional developer. The roadmaps are incredibly well-organized and practical!"
          />
          <CardWithoutImageInHome
            title="Full Stack Developer"
            description="I love how the platform combines theory with practical projects. The community support and interactive learning made my journey much easier and more engaging."
          />
          <CardWithoutImageInHome
            title="Web Developer"
            description="The step-by-step approach and real-world projects gave me the confidence to start my career in web development. The platform's resources are comprehensive and up-to-date."
          />

          <Image
            imageurl="src\assets\Home\casual-life-3d-orange-planet-with-disk 1.png"
            alt="error"
            className="w-11 h-11 hidden lg:flex"
          />
        </div>
      </motion.div>
    </>
  );
};

export default HomePage;
