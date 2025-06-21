import { REGISTER_FORM } from "../data";
import Button from "../Ui/Button";
import Input from "../Ui/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { SignUpSchema } from "../Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import InputErrorMessage from "../Ui/InputErrorMessage";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { IErrorResponse } from "../interfaces";
import { useState } from "react";
import Image from "../components/Image";
import { Ellipsis, Eye, EyeOff } from "lucide-react";

interface IFormInput {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  // terms: boolean
}

const SignUp = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState<Record<string, boolean>>({});
  const toggleShowPassword = (name: string) => {
    setShowPassword((prev) => ({ ...prev, [name]: !prev[name] }));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(SignUpSchema),
  });

  {
    /**Handler */
  }
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    console.log(data);
    setIsLoading(true);
    try {
      // const{status}=await axiosInstance.post("auth/local/register",data)
      const { status } = await axios.post(
        "https://codemap-wgjw.onrender.com/auth/register",
        data,
        { withCredentials: true }
      );
      if (status === 201) {
        toast.success(
          "You will navigate to the login page after 1 seconds to login",
          {
            position: "bottom-center",
            duration: 1500,
            style: {
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
            },
          }
        );
        // after one second will navigate to login page
        setTimeout(() => {
          navigate("/LogIn");
        }, 1000);
        console.log(status);
      }
    } catch (error) {
      const errorObj = error as AxiosError<IErrorResponse>; // elobject da haibqa fi reponse elly rag3 mn axios
      console.log(errorObj.response?.data?.error.message);
      console.log(errorObj);
      toast.error(`${errorObj.response?.data?.error.message}`, {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setIsLoading(false); // كده خلص تحميل
    }
  };
  const onclick = () => {
    navigate("/LogIn");
  };

  {
    /**Render */
  }
  const renderSignUpForm = REGISTER_FORM.map(
    ({ name, Label, placeholder, type, validation }, idx) => (
      <div key={idx} className="flex flex-col gap-2 relative">
        <label className="text-gray-700 font-medium">{Label}</label>

        <div className="relative">
          <Input
            type={type === "password" && showPassword[name] ? "text" : type}
            placeholder={placeholder}
            {...register(name, validation)}
            className="border-[1px] border-gray-300 shadow-lg focus:border-[#FFFFFF] focus:outline-none focus:ring-1 focus:ring-[#FFFFFF] rounded-lg px-3 py-3 text-md bg-[#FFFFFF] w-full"
          />

          {type === "password" && (
            <span
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer text-gray-500"
              onClick={() => toggleShowPassword(name)}
            >
              {showPassword[name] ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
          )}
        </div>

        {errors[name] && <InputErrorMessage msg={errors[name]?.message} />}
      </div>
    )
  );
  return (
    <div className="flex flex-col md:flex-row justify-between  sm:gap-5 md:justify-around  items-center min-h-screen px-6  my-6 py-10">
      <div className="hidden lg:flex flex-col items-center gap-7">
        <span className=" text-3xl font-bold text-[#2F174E] text-left ">
          Welcome to
          <br />
          Code Map Online
          <br />
          Learning Platform
        </span>
        <div className="flex flex-col items-center gap-7">
          <Image
            alt="error"
            className="w-[400px] md:w-[460px] "
            imageurl="/assets/SignUp/mainImage.png"
          />
          <Ellipsis color="#C2CEFF" size={50} />
        </div>
      </div>
      <span className="hidden lg:block md:hidden bg-[#5D5A6F] w-1 h-96 rounded-2xl"></span>

      <div className="flex flex-col w-full md:w-[550px] lg:w-[550px] bg-white p-10 shadow-md rounded-md gap-2 mt-6">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {renderSignUpForm}

          <div className="flex items-center gap-2 justify-center">
            <Input type="checkbox" className="w-4 h-4 text-[#2F174E]" />
            <span className="text-sm text-gray-600">
              I agree to the{" "}
              <span className="text-[#2F174E] font-medium cursor-pointer">
                Terms & Conditions
              </span>
            </span>
          </div>
          <Button
            className="bg-[#2F174E] text-white py-2 rounded-md hover:bg-[#3C1765]"
            isLoading={isLoading}
          >
            <p>SignUP</p>
          </Button>
          <p className="text-center text-sm text-gray-600 mt-2">
            Already have an account?{" "}
            <span
              className="text-[#2F174E] font-medium cursor-pointer"
              onClick={onclick}
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
