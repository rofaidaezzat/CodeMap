import { Headset, MapPinHouse, Phone } from "lucide-react";
import Image from "../components/Image";
import Input from "../Ui/Input";
import Textarea from "../Ui/Textarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { ContactUs_Schema } from "@/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "@/Ui/InputErrorMessage";
import { axiosInstance } from "@/config/axios.config";
import toast from "react-hot-toast";
import { useState } from "react";

interface IContactUs {
  first_name: string;
  last_name: string;
  whatsappnumber: string;
  email: string;
  message: string;
}

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm<IContactUs>({
    resolver: yupResolver(ContactUs_Schema),
    mode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IContactUs> = async (data) => {
    // Validate the message field specifically
    const isValid = await trigger("message");
    if (!isValid) return;

    try {
      setIsSubmitting(true);
      const { status } = await axiosInstance.post<IContactUs>("contact-us", {
        ...data,
        message: data.message.trim(), // Ensure message is trimmed before sending
      });

      if (status === 201) {
        toast.success("Message sent successfully!", {
          position: "bottom-center",
          duration: 2000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        reset();
      }
    } catch {
      toast.error("Failed to send message", {
        position: "bottom-center",
        duration: 1500,
        style: {
          backgroundColor: "black",
          color: "white",
          width: "fit-content",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-20 lg:mt-24 px-4 overflow-hidden pt-6">
      <div className="w-full lg:flex lg:justify-end sm:pr-0 lg:pr-40">
        <p className="font-extrabold text-center  text-2xl lg:text-4xl mb-10">
          Talk to us about anything
          <br /> you want to tell us.
        </p>
      </div>
      <div className="w-full mb-5 bg-gradient-to-r from-[#2F174E] to-[#CFD8FF] lg:px-24 flex flex-col lg:flex-row justify-between lg:ml-8 lg:rounded-tl-3xl lg:rounded-bl-3xl">
        {/* ---------- left card (desktop only) ---------- */}
        <div className="hidden lg:block w-[35%] h-[600px] -mt-28 rounded-3xl p-4 border-2 bg-[#EAECFD] shadow-[0px_0px_30px_rgba(0,0,0,1)]">
          <div className="flex flex-col md:flex-row items-center justify-around gap-12 max-w-7xl mx-auto">
            <div className="w-full md:w-2/5">
              <Image
                imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Customercareservice2_2-ezgif.com-gif-makerr1.gif"
                alt="error"
              />
              <div className="hidden lg:flex justify-between w-full h-auto mt-2">
                <Image
                  imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Rectangle 1938.png"
                  alt="error"
                  className="w-1/3"
                />
                <Image
                  imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Rectangle 1937.png"
                  alt="error"
                  className="w-1/3"
                />
              </div>
              <Image
                imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Customercareservice2_2-ezgif.com-rotater2.gif"
                alt="error"
                className="mt-2"
              />
            </div>
            <div className="w-full md:w-3/5">
              <div className="space-y-3 mt-10">
                <h3 className="font-bold text-3xl">Contact Us</h3>
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
          </div>
        </div>

        {/* ---------- contact form (full width on mobile) ---------- */}
        <div className="w-full lg:w-2/3 p-4">
          <form
            className="space-y-2 lg:space-y-3 lg:mt-10 w-full max-w-2xl mx-auto"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-black"
                >
                  First Name
                </label>
                <Input
                  id="first_name"
                  type="text"
                  placeholder="First Name"
                  className={`w-full h-10 rounded-3xl p-2 border ${
                    errors["first_name"]
                      ? "border-red-500"
                      : "border-purple-400"
                  } shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300`}
                  {...register("first_name")}
                />
                <div style={{ minHeight: 22 }}>
                  {errors["first_name"] && (
                    <InputErrorMessage msg={errors["first_name"]?.message} />
                  )}
                </div>
              </div>

              <div className="w-full">
                <label
                  htmlFor="last_name"
                  className="block mb-1 text-sm font-medium text-black"
                >
                  Last Name
                </label>
                <Input
                  id="last_name"
                  type="text"
                  placeholder="Last Name"
                  className={`w-full h-10 rounded-3xl p-2 border ${
                    errors["last_name"] ? "border-red-500" : "border-purple-400"
                  } shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300`}
                  {...register("last_name")}
                />
                <div style={{ minHeight: 22 }}>
                  {errors["last_name"] && (
                    <InputErrorMessage msg={errors["last_name"]?.message} />
                  )}
                </div>
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="whatsappnumber"
                className="block mb-1 text-sm font-medium text-black"
              >
                Whatsapp Number
              </label>
              <Input
                id="whatsappnumber"
                type="text"
                placeholder="Whatsapp Number"
                className={`w-full h-10 rounded-3xl p-2 border ${
                  errors["whatsappnumber"]
                    ? "border-red-500"
                    : "border-purple-400"
                } shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300`}
                {...register("whatsappnumber")}
              />
              <div style={{ minHeight: 22 }}>
                {errors["whatsappnumber"] && (
                  <InputErrorMessage msg={errors["whatsappnumber"]?.message} />
                )}
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-black"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                className={`w-full h-10 rounded-3xl p-2 border ${
                  errors["email"] ? "border-red-500" : "border-purple-400"
                } shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300`}
                {...register("email")}
              />
              <div style={{ minHeight: 22 }}>
                {errors["email"] && (
                  <InputErrorMessage msg={errors["email"]?.message} />
                )}
              </div>
            </div>

            <div className="w-full">
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium text-black"
              >
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Message"
                className={`w-full h-28 rounded-3xl p-3 border ${
                  errors["message"] ? "border-red-500" : "border-purple-400"
                } shadow-md transition-all duration-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-300 resize-none`}
                {...register("message")}
              />
              <div style={{ minHeight: 22 }}>
                {errors["message"] && (
                  <InputErrorMessage msg={errors["message"]?.message} />
                )}
              </div>
            </div>
            <div className="flex justify-end w-full">
                <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#2F174E] font-bold text-white py-3 px-10 rounded-2xl shadow-md hover:bg-[#684098] transition disabled:opacity-50 disabled:cursor-not-allowed mt-6 block"
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
