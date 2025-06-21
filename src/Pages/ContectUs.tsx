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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Header Section */}
      <div className="pt-20 lg:pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Let's Start a Conversation
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 leading-relaxed">
              Have a question, suggestion, or just want to say hello? We'd love
              to hear from you.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
          <div className="lg:flex">
            {/* Left Side - Contact Info (Desktop) */}
            <div className="hidden lg:block lg:w-2/5 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"></div>
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

              <div className="relative p-6 flex flex-col justify-center">
                {/* Images Section */}
                <div className="mb-8">
                  <div className="flex items-center justify-center space-y-2">
                    <div className="w-full max-w-[200px]">
                      <Image
                        imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Customercareservice2_2-ezgif.com-gif-makerr1.gif"
                        alt="Customer Service"
                        className="w-full h-auto rounded-2xl shadow-lg "
                      />
                    </div>
                    <div className="flex space-x-2 justify-center align-center items-center space-x-2 w-full max-w-[200px]">
                      <div className="w-1/2">
                        <Image
                          imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Rectangle 1938.png"
                          alt="Support"
                          className="w-full h-auto rounded-xl shadow-md "
                        />
                      </div>
                      <div className="w-1/2">
                        <Image
                          imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Rectangle 1937.png"
                          alt="Help"
                          className="w-full h-auto rounded-xl shadow-md "
                        />
                      </div>
                    </div>
                    <div className="w-full max-w-[200px]">
                      <Image
                        imageurl="/assets/Contact us-20250228T213828Z-001/Contact us/Customercareservice2_2-ezgif.com-rotater2.gif"
                        alt="Customer Care"
                        className="w-full h-auto rounded-2xl shadow-lg "
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-4">
                      Get in Touch
                    </h2>
                    <p className="text-purple-100 text-lg leading-relaxed">
                      Our online programming platform provides comprehensive
                      courses, tutorials, and exercises for learning programming
                      languages with personalized learning paths.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <p className="text-purple-200">0123456789</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Headset className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <p className="text-purple-200">
                          info.CodeMap@hotmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4 group">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <MapPinHouse className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-purple-200">
                          Agami-Alex dawla & Elda5lawaya
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="lg:hidden bg-gradient-to-r from-purple-900 to-indigo-900 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">0123456789</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                    <Headset className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">
                    info.CodeMap@hotmail.com
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-2">
                    <MapPinHouse className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-white text-sm font-medium">Agami-Alex</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:w-3/5 p-8 lg:p-12">
              <div className="max-w-2xl mx-auto">
                <div className="mb-8">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
                    Send us a Message
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </p>
                </div>

                <form
                  className="space-y-6"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="first_name"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        First Name *
                      </label>
                      <Input
                        id="first_name"
                        type="text"
                        placeholder="Enter your first name"
                        className={`w-full h-12 px-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white ${
                          errors["first_name"]
                            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                            : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        } text-gray-900 placeholder-gray-500 shadow-sm hover:border-gray-300`}
                        {...register("first_name")}
                      />
                      <div style={{ minHeight: 22 }}>
                        {errors["first_name"] && (
                          <InputErrorMessage
                            msg={errors["first_name"]?.message}
                          />
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="last_name"
                        className="block text-sm font-semibold text-gray-900"
                      >
                        Last Name *
                      </label>
                      <Input
                        id="last_name"
                        type="text"
                        placeholder="Enter your last name"
                        className={`w-full h-12 px-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white ${
                          errors["last_name"]
                            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                            : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                        } text-gray-900 placeholder-gray-500 shadow-sm hover:border-gray-300`}
                        {...register("last_name")}
                      />
                      <div style={{ minHeight: 22 }}>
                        {errors["last_name"] && (
                          <InputErrorMessage
                            msg={errors["last_name"]?.message}
                          />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp Number */}
                  <div className="space-y-2">
                    <label
                      htmlFor="whatsappnumber"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      WhatsApp Number *
                    </label>
                    <Input
                      id="whatsappnumber"
                      type="text"
                      placeholder="Enter your WhatsApp number"
                      className={`w-full h-12 px-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white ${
                        errors["whatsappnumber"]
                          ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                          : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      } text-gray-900 placeholder-gray-500 shadow-sm hover:border-gray-300`}
                      {...register("whatsappnumber")}
                    />
                    <div style={{ minHeight: 22 }}>
                      {errors["whatsappnumber"] && (
                        <InputErrorMessage
                          msg={errors["whatsappnumber"]?.message}
                        />
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      className={`w-full h-12 px-4 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white ${
                        errors["email"]
                          ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                          : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      } text-gray-900 placeholder-gray-500 shadow-sm hover:border-gray-300`}
                      {...register("email")}
                    />
                    <div style={{ minHeight: 22 }}>
                      {errors["email"] && (
                        <InputErrorMessage msg={errors["email"]?.message} />
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-900"
                    >
                      Your Message *
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us how we can help you..."
                      className={`w-full h-32 px-4 py-3 rounded-xl border-2 transition-all duration-300 bg-gray-50 focus:bg-white ${
                        errors["message"]
                          ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                          : "border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100"
                      } text-gray-900 placeholder-gray-500 shadow-sm hover:border-gray-300 resize-none`}
                      {...register("message")}
                    />
                    <div style={{ minHeight: 22 }}>
                      {errors["message"] && (
                        <InputErrorMessage msg={errors["message"]?.message} />
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto md:min-w-[200px] bg-gradient-to-r from-purple-900 to-indigo-900 hover:from-purple-800 hover:to-indigo-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
