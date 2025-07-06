import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Added useNavigate
import { Eye, EyeOff } from "lucide-react";
import Image from "@/components/Image";
import { NEWPASSWORD } from "@/data";
import { IErrorResponse } from "@/interfaces";
import Button from "@/Ui/Button";
import Input from "@/Ui/Input";
import InputErrorMessage from "@/Ui/InputErrorMessage";
import { NewPasswordSchema } from "@/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { Ellipsis } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";

// Define the expected shape of the form data
interface IFormInput {
  newPassword: string;
  confirmPassword: string;
}

const ResetPassword = () => {
  const [showPasswords, setShowPasswords] = useState<Record<string, boolean>>(
    {}
  );

  const [isLoading, setIsLoading] = useState(false);
  const toggleVisibility = (fieldName: string) => {
    setShowPasswords((prev) => ({
      ...prev,
      [fieldName]: !prev[fieldName],
    }));
  };

  const { token } = useParams<{ token: string }>();
  const navigate = useNavigate(); // Added for better navigation handling

  // Add token validation
  useEffect(() => {
    if (!token) {
      console.error("No token found in URL parameters");
      toast.error("Invalid reset password link", {
        position: "bottom-center",
        duration: 4000,
      });
      // Redirect to login or home page
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      console.log("Token from useParams:", token);
    }
  }, [token, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(NewPasswordSchema),
  });

  // ** Handler for form submission
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!token) {
      toast.error("Invalid reset token", {
        position: "bottom-center",
        duration: 4000,
      });
      return;
    }

    console.log("Form Data:", data);
    console.log("Token from URL:", token);
    setIsLoading(true);
    try {
      const { status, data: resData } = await axios.post(
        `https://codemap-production.up.railway.app/reset-password/${token}`,
        {
          newPassword: data.newPassword,
          confirmPassword: data.confirmPassword,
        }
      );

      console.log("API Response:", resData);
      if (status === 200) {
        toast.success("Password reset successfully! Redirecting...", {
          position: "bottom-center",
          duration: 1500,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        // Use navigate instead of location.replace for better React Router integration
        setTimeout(() => {
          navigate("/", { replace: true });
        }, 2000);
      }
    } catch (error) {
      console.error("API Error:", error);
      const errorObj = error as AxiosError<IErrorResponse>;
      const errorMessage =
        errorObj.response?.data?.error?.message ||
        errorObj.message ||
        "An unexpected error occurred";
      toast.error(`${errorMessage}`, {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render the form if there's no token
  if (!token) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-red-600 mb-4">
            Invalid Reset Link
          </h2>
          <p className="text-gray-600">
            The reset password link is invalid or has expired.
          </p>
        </div>
      </div>
    );
  }

  // Render the form fields based on your NEWPASSWORD configuration
  const renderNewPasswordForm = NEWPASSWORD.map(
    ({ name, Label, placeholder, type }, idx) => {
      const isPasswordField = type === "password";
      const isVisible = showPasswords[name];

      return (
        <div key={idx} className="flex flex-col gap-2 relative">
          <label className="text-gray-700 font-medium">{Label}</label>
          <div className="relative">
            <Input
              type={isPasswordField ? (isVisible ? "text" : "password") : type}
              placeholder={placeholder}
              {...register(name as keyof IFormInput)}
              className="w-full border-[1px] border-gray-300 shadow-lg focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF] rounded-lg px-3 py-3 text-md bg-[#FFFFFF] pr-10"
            />
            {isPasswordField && (
              <span
                onClick={() => toggleVisibility(name)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            )}
          </div>
          {errors[name as keyof IFormInput] && (
            <InputErrorMessage
              msg={errors[name as keyof IFormInput]?.message}
            />
          )}
        </div>
      );
    }
  );

  // JSX for the component layout
  return (
    <div className="flex flex-col md:flex-row justify-between sm:gap-5 md:justify-around items-center min-h-screen pt-[60px] my-6 py-10">
      {/* Left decorative section */}
      <div className="hidden lg:flex flex-col items-center gap-7">
        <span className="text-3xl font-bold text-[#2F174E] text-left">
          Welcome to
          <br />
          Code Map Online
          <br />
          Learning Platform
        </span>
        <Image
          imageurl="/assets/SignUp/mainImage.png"
          alt="Platform illustration"
          className="w-[400px] md:w-[460px]"
        />
        <Ellipsis color="#C2CEFF" size={50} />
      </div>
      {/* Separator */}
      <span className="hidden lg:block md:hidden bg-[#5D5A6F] w-1 h-96 rounded-2xl"></span>
      {/* Right form section */}
      <div className="flex flex-col w-full md:w-[550px] lg:w-[550px] bg-white p-10 shadow-md rounded-md gap-4 mt-6">
        <h2 className="text-2xl font-semibold text-center text-[#2F174E]">
          Reset Your Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {renderNewPasswordForm}
          <Button
            className="bg-[#2F174E] text-white py-2 rounded-md hover:bg-[#3C1765]"
            isLoading={isLoading}
            type="submit"
          >
            <p>Reset Password</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
