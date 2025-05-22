import Input from "../Ui/Input";
import Image from "../components/Image";
import { Search } from "lucide-react";
import Button from "../Ui/Button";
import Card from "../components/Card";
import CardWithoutImageInHome from "@/components/CardWithoutImageInHome/CardWithoutImageInHome";
import MorphingText from "@/components/eldoraui/morphingtext";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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

            <div className="mt-6 flex items-center bg-white p-2 rounded-full shadow-md w-full max-w-md">
              <Input
                type="text"
                placeholder="Search for a Track"
                className="flex-1 border-none outline-none px-4 py-2 text-gray-700 text-lg"
              />
              <Button className="bg-[#2F174E] text-white px-6 py-2 rounded-full flex   items-center gap-2 w font-semibold">
                <Search size={20} /> Search
              </Button>
            </div>
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
      {/* chatboot section */}
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
      {/* our track */}
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
        {/* cards */}
        <div className="mt-10 pb-7 flex flex-col items-center lg:gap-10 gap-10 sm:flex-row justify-center overflow-hidden flex-wrap  ">
          <div className=" hidden md:hidden lg:flex lg:flex-col justify-between h-full gap-10 ">
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
          <Card
            url="src/assets/Home/33f85ae4b62c8bbaf20283852fa74655.jpg"
            alt="UI/UX Design"
            describe="UI/UX Design"
            title="UI/UX Design for Beginners"
          />
          <Card
            url="src/assets/Home/33f85ae4b62c8bbaf20283852fa74655.jpg"
            alt="Front End"
            describe="Front End"
            title="Front End Development"
          />
          <Card
            url="src/assets/Home/33f85ae4b62c8bbaf20283852fa74655.jpg"
            alt="Flutter"
            describe="Flutter Development"
            title="Flutter"
          />
          <div className=" hidden md:hidden lg:flex lg:flex-col justify-end gap-10 ">
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
      {/* premium learing */}
      <motion.div
        ref={refPremium}
        initial="hidden"
        animate={controlsPremium}
        className="my-10 p-5 flex flex-col md:flex-row md:h-[500px] h-[400px] lg:flex-row bg-[#CFD8FF] lg:justify-around gap-5  "
      >
        {/* image  */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controlsPremium}
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 1 } },
          }}
          className="hidden w-full lg:w-[450px] h-[500px] lg:flex justify-center ml-11 "
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
            <h3 className="font-bold text-[40px]  w-full ">
              Premium <span>Learning</span>
              <br /> Experience
            </h3>
          </div>
          <div className="space-y-5 ">
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
                  Seamless Accessibility
                </h3>
                <p className="text-slate-400">
                  A well-structured learning experience with everything in one
                  place.
                </p>
              </div>
            </div>
            {/* heart2 */}
            <div className="flex items-center justify-center space-x-2">
              <div className="p-4 heart">
                <img src="src\assets\Home\hearts 1.png" className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-semibold text-2xl">
                  Seamless Accessibility
                </h3>
                <p className="text-slate-400">
                  A well-structured learning experience with everything in one
                  place.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* what student say */}
      <motion.div
        ref={refTestimonials}
        initial="hidden"
        animate={controlsTestimonials}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
        }}
        className="py-12  "
      >
        <h3 className="text-center font-semibold text-4xl">
          What student’s say
        </h3>
        <p className="text-center">
          Lorem Ipsum is simply dummy text of the printing
        </p>
        <div className="mt-10 mb-10 flex flex-col items-center lg:gap-0 gap-5 space-y-2 sm:flex-row sm:justify-center md:justify-around flex-wrap">
          <Image
            imageurl="src\assets\Home\Group12.png"
            alt="error"
            className=" hidden lg:flex w-20 h-20 "
          />

          <CardWithoutImageInHome />
          <CardWithoutImageInHome />
          <CardWithoutImageInHome />

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
