import axios from "axios";
import { UpdatePassword, UpdateUserProfile } from "@/data";
import Button from "@/Ui/Button";
import Input from "@/Ui/Input";
import InputErrorMessage from "@/Ui/InputErrorMessage";
import { UpdatePasswordSchema, UpdateProfileSchema } from "@/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DeleteAccount from "@/components/DeleteAccount";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/config/axios.config";
import OTPForm from "@/components/OTPForm";

interface Ipasswordupdate {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface IUserProfileForm {
  first_name: string;
  last_name: string;
  email: string;
}

const Setting = () => {
  const [userInfo, setUserInfo] = useState<IUserProfileForm | null>(null);
  const [showOTP, setShowOTP] = useState(false);
  const[isOpenDeleteModal,setIsOpenDeleteModal]=useState(false)

  // Extract token and user data from localStorage
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  // const token = userData?.accessToken || "";
  // console.log("userData", userData);

  // Profile Form
  const {
    register: profileRegister,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
    reset,
  } = useForm<IUserProfileForm>({
    resolver: yupResolver(UpdateProfileSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
  });
  useEffect(() => {
    const userDataString = localStorage.getItem("loggedInUser");
    const userData = userDataString ? JSON.parse(userDataString) : null;

    if (userData) {
      setUserInfo({
        first_name: userData.first_name || "",
        last_name: userData.last_name || "",
        email: userData.email || "",
      });
    }
  }, []);

  useEffect(() => {
    if (userInfo) {
      reset(userInfo);
    }
  }, [userInfo, reset]);
  // Password Form
  const {
    register: passwordRegister,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm<Ipasswordupdate>({
    resolver: yupResolver(UpdatePasswordSchema),
  });
  // Handler for profile update
  const onSubmituserprofileupdate: SubmitHandler<IUserProfileForm> = async (
    data
  ) => {
    try {
      const payload = userData ? { ...data, _id: userData._id } : data;
      const { status } = await axiosInstance.put(
        "/users/update-profile",
        payload
      );

      if (status === 200) {
        const updatedUserData = {
          ...userData,
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
        };

        localStorage.setItem("loggedInUser", JSON.stringify(updatedUserData)); // ✅ حفظ التحديثات
        setUserInfo(updatedUserData); // ✅ تحديث واجهة المستخدم
        console.log("Updated user:", updatedUserData);

        toast.success("Your Update Done successfully", {
          position: "bottom-center",
          duration: 1000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
        setShowOTP(true); // ✅ عرض فورم OTP بعد تحديث البيانات
      }
    } catch (error) {
      toast.error("Error sending message", {
        position: "bottom-center",
        duration: 1500,
        style: {
          backgroundColor: "black",
          color: "white",
          width: "fit-content",
        },
      });

      console.error("خطأ في الإرسال:", error);
    }
  };

  //  Handler for password update
  const onSubmitpasswordupdate: SubmitHandler<Ipasswordupdate> = async (
    data
  ) => {
    try {
      const { status } = await axiosInstance.put(
        "/users/update-password",
        data
      );

      if (status === 200) {
        toast.success("Your Update Done successfully", {
          position: "bottom-center",
          duration: 4000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.error("خطأ في الإرسال:", error.response?.data);
      } else {
        console.error("خطأ غير متوقع:", error);
      }
      toast.error("Error sending message");
    }
  };
  // Handler for email verification
  const handleVerifyOTP = async (code: string) => {
    try {
      const res = await axiosInstance.post("users/verify-email", { code });

      if (res.status === 200) {
        toast.success("Email verified successfully!", {
          position: "bottom-center",
          duration: 4000,
          style: { backgroundColor: "black", color: "white" },
        });
        setShowOTP(false); // ✅ إخفاء الفورم بعد النجاح
      } else {
        toast.error("Invalid code");
      }
    } catch (err) {
      toast.error("Verification failed!");
      console.error(err);
    }
  };
  // ------------Render------------
  const renderUserProfileForm = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {UpdateUserProfile.map(({ name, Label, type }, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <label htmlFor={name} className="font-semibold text-gray-700">
              {Label}
            </label>
            <Input
              type={type}
              id={name}
              autoComplete="off"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3 focus:outline-none focus:ring-2 focus:ring-[#413198] shadow-sm transition"
              {...profileRegister(name as keyof IUserProfileForm)}
            />
            {profileErrors[name as keyof IUserProfileForm] && (
              <InputErrorMessage
                msg={profileErrors[name as keyof IUserProfileForm]?.message}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderPasswordChangeForm = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {UpdatePassword.map(({ name, Label, type, validation }, index) => (
          <div className="flex flex-col gap-2" key={index}>
            <label htmlFor={name} className="font-semibold text-gray-700">
              {Label}
            </label>
            <Input
              type={type}
              id={name}
              autoComplete="off"
              className="h-12 bg-gray-100 border border-gray-300 rounded px-3 focus:outline-none focus:ring-2 focus:ring-[#413198] shadow-sm transition"
              {...passwordRegister(name as keyof Ipasswordupdate, validation)}
            />
            {passwordErrors[name as keyof Ipasswordupdate] && (
              <InputErrorMessage
                msg={passwordErrors[name as keyof Ipasswordupdate]?.message}
              />
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-[#f3f0ff] via-[#e9e6fa] to-[#f7f7fb] py-20 px-2 relative">
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#413198] text-center mb-10 drop-shadow-sm tracking-tight">
        Account Settings
      </h1>

      <div className="space-y-12 w-full max-w-4xl">
        {/* User Info */}
        <form
          className="space-y-6 bg-white/90 p-8 rounded-2xl shadow-xl border border-gray-100 mx-auto backdrop-blur-sm"
          onSubmit={handleProfileSubmit(onSubmituserprofileupdate)}
        >
          <h2 className="text-2xl font-bold text-[#413198] text-center mb-6">
            Profile Information
          </h2>
          {renderUserProfileForm()}
          <div className="flex justify-end w-full mt-4">
            <Button className="px-6 py-3 bg-gradient-to-r from-[#413198] to-[#6c63ff] text-white rounded-lg w-full md:w-auto shadow-lg hover:from-[#2d236b] hover:to-[#413198] transition font-semibold text-lg">
              Change Profile
            </Button>
          </div>
        </form>

        {/* Password Change */}
        <form
          className="space-y-6 bg-white/90 p-8 rounded-2xl shadow-xl border border-gray-100 mx-auto backdrop-blur-sm"
          onSubmit={handlePasswordSubmit(onSubmitpasswordupdate)}
        >
          <h2 className="text-2xl font-bold text-[#413198] text-center mb-6">
            Change Password
          </h2>
          {renderPasswordChangeForm()}
          <div className="flex justify-end w-full mt-4">
            <Button className="px-6 py-3 bg-gradient-to-r from-[#413198] to-[#6c63ff] text-white rounded-lg w-full md:w-auto shadow-lg hover:from-[#2d236b] hover:to-[#413198] transition font-semibold text-lg">
              Change Password
            </Button>
          </div>
        </form>

        <div className="flex justify-center mt-8">
          <DeleteAccount isOpenDeleteModal={isOpenDeleteModal} setIsOpenDeleteModal={setIsOpenDeleteModal} />
        </div>
      </div>

      {/* ✅ عرض OTP فورم لما showOTP = true */}
      {showOTP && (
          <OTPForm onVerify={handleVerifyOTP}  onClose={()=>setShowOTP(false)} />
      )}
    </div>
  );
};

export default Setting;
