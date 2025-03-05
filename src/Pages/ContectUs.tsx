
import { Headset, MapPinHouse, Phone } from "lucide-react";
import Image from "../components/Image";
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";

const ContactUs = () => {
  return (
    <div className="mt-20 lg:mt-24 px-4 overflow-hidden pt-6">
      <p className="font-extrabold w-fit text-center mx-auto text-2xl lg:text-4xl lg:pl-[500px] mb-10 ">
        Talk to us about anything
        <br /> you want to tell us.
      </p>
      <div className="w-full h-[530px] mb-5 bg-gradient-to-r from-[#2F174E] to-[#CFD8FF] lg:px-24 flex justify-between lg:ml-8 lg:rounded-tl-3xl lg:rounded-bl-3xl">
        <div className="hidden sm:block lg:block w-[35%] h-[600px]  -mt-28 rounded-3xl p-4 border-2  bg-[#EAECFD] shadow-[0px_0px_30px_rgba(0,0,0,1)]">
          <div className="flex justify-center items-center px-4">
            <Image
              imageurl="src/assets/Contact us-20250228T213828Z-001/Contact us/Customercareservice2_2-ezgif.com-gif-makerr1.gif"
              alt="image contact"
              className=" w-40 mt-16"
            />
            <div className="flex flex-col -mt-14 items-center justify-center">
              <Image
                imageurl="src/assets/Contact us-20250228T213828Z-001/Contact us/Rectangle 1938.png"
                alt="roadmap image"
                className="w-16 h-16"
              />
              <Image
                imageurl="src/assets/Contact us-20250228T213828Z-001/Contact us/Rectangle 1937.png"
                alt="roadmap image"
                className="w-20 "
              />
            </div>
            <Image
              imageurl="src/assets/Contact us-20250228T213828Z-001/Contact us/Customercareservice2_2-ezgif.com-rotater2.gif"
              alt="contact us image"
              className="w-40 mt-16"
            />
          </div>
          <div className="space-y-3 mt-10">
            <h3 className="font-bold text-3xl">contact us</h3>
            <p className="leading-7">
              An online programming platform provides courses, tutorials, and
              exercises for learning programming languages. It offers a
              user-friendly interface and can provide personalized learning
              paths and certificates.
            </p>
          </div>
          <div className="p-8 space-y-4 mt-7 pl-5">
            <div className="flex space-x-3">
              <Phone />
              <p>0123456789</p>
            </div>
            <div className="flex space-x-2">
              <Headset />
              <p>info.CodeMap@hotmail.com</p>
            </div>
            <div className="flex space-x-2">
              <MapPinHouse />
              <p>Agami-Alex dawla & Elda5lawaya</p>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 p-4">
          <form className="space-y-4 lg:space-y-5 my-auto lg:mt-10 w-full lg:w-[85%] mx-auto">
            <div className="flex flex-col lg:flex-row gap-4">
              <Input
                type="text"
                placeholder="First name"
                className="w-full h-10 rounded-3xl p-2   border-purple-400 shadow-md transition-all  duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <Input
                type="text"
                placeholder="Last name"
                className="w-full h-10 rounded-3xl p-2   border-purple-400 shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 "
              />
            </div>
            <Input
              type="tel"
              placeholder="Your WhatsApp number"
              className="w-full h-10 rounded-3xl p-2  border-purple-400 shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 "
            />
            <Input
              type="email"
              placeholder="Your email address"
              className="w-full h-10 rounded-3xl p-2  border-purple-400 shadow-md transition-all  duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <Textarea placeholder="Message"  className="w-full" />
            <button
              type="submit"
              className="p-6 bg-[#1F93DD] font-bold text-white py-3 px-10 rounded-2xl shadow-md hover:bg-[#38749a] transition block ml-auto "
            >
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
