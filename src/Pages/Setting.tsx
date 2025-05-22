import axios from "axios";
import { UpdatePassword, UpdateUserProfile } from "@/data";
import Button from "@/Ui/Button";
import Input from "@/Ui/Input";
import InputErrorMessage from "@/Ui/InputErrorMessage";
import { UpdatePasswordSchema, UpdateProfileSchema } from "@/Validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import DeleteAccount from "@/components/DeleteAccount";
import { jwtDecode } from "jwt-decode";

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
  const baseURL = "https://d378-105-197-134-227.ngrok-free.app/";

  // Extract token and user data from localStorage
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const token = userData?.accessToken || "";
  console.log("userData", userData);
  console.log("token", token);
  interface DecodedToken {
    UserInfo: {
      id: string;
    };
  }

  const decoded = jwtDecode<DecodedToken>(token);
  const userId = decoded.UserInfo.id;
  console.log("userId", userId);
  // Axios instance
  const axiosInstance = axios.create({
    baseURL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // withCredentials: true,
  });

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

  // Password Form
  const {
    register: passwordRegister,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors },
  } = useForm<Ipasswordupdate>({
    resolver: yupResolver(UpdatePasswordSchema),
  });

  // جلب بيانات المستخدم عند تحميل الصفحة
  useEffect(() => {
    const getUserProfile = async () => {
      try {
        if (!userId) return;
        const response = await axiosInstance.get(`/users/${userId}`);
        const userDataFromServer = response.data;
        // return htmlpage not json
        console.log("Raw response data:", response.data);

        reset({
          first_name: userDataFromServer.first_name,
          last_name: userDataFromServer.last_name,
          email: userDataFromServer.email,
        });
      } catch (error) {
        console.error("خطأ في تحميل البيانات:", error);
      }
    };
    getUserProfile();
  }, [reset, userId]);

  // تحديث البروفايل
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
        toast.success("Your Update Done successfully", {
          position: "bottom-center",
          duration: 1000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
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

  // تحديث كلمة المرور
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
          duration: 1000,
          style: {
            backgroundColor: "black",
            color: "white",
            width: "fit-content",
          },
        });
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

  const renderUserProfileForm = () => {
    return UpdateUserProfile.map(({ name, Label, type }, index) => (
      <div className="flex flex-col gap-2 w-1/2" key={index}>
        <label htmlFor={name} className="font-semibold text-gray-700">
          {Label}
        </label>
        <Input
          type={type}
          id={name}
          autoComplete="off"
          className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
          {...profileRegister(name as keyof IUserProfileForm)}
        />
        {profileErrors[name as keyof IUserProfileForm] && (
          <InputErrorMessage
            msg={profileErrors[name as keyof IUserProfileForm]?.message}
          />
        )}
      </div>
    ));
  };

  const renderPasswordChangeForm = () => {
    return UpdatePassword.map(({ name, Label, type, validation }, index) => (
      <div className="flex flex-col gap-2 w-1/2" key={index}>
        <label htmlFor={name} className="font-semibold text-gray-700">
          {Label}
        </label>
        <Input
          type={type}
          id={name}
          autoComplete="off"
          className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
          {...passwordRegister(name as keyof Ipasswordupdate, validation)}
        />
        {passwordErrors[name as keyof Ipasswordupdate] && (
          <InputErrorMessage
            msg={passwordErrors[name as keyof Ipasswordupdate]?.message}
          />
        )}
      </div>
    ));
  };

  return (
    <div className="mt-28 mx-16 mb-24 space-y-10">
      <h1 className="text-3xl font-bold">Account Settings</h1>

      <div className="space-y-8">
        {/* User Info */}
        <form
          className="space-y-6"
          onSubmit={handleProfileSubmit(onSubmituserprofileupdate)}
        >
          {renderUserProfileForm()}
          <div className="flex justify-end w-1/2">
            <Button className="px-6 py-3 bg-[#413198] text-white rounded-md">
              Change Profile
            </Button>
          </div>
        </form>

        {/* Password Change */}
        <h2 className="text-2xl font-semibold font-serif">Change Password</h2>
        <form
          className="space-y-6"
          onSubmit={handlePasswordSubmit(onSubmitpasswordupdate)}
        >
          {renderPasswordChangeForm()}
          <div className="flex justify-end w-1/2">
            <Button className="px-6 py-3 bg-[#413198] text-white rounded-md">
              Change Password
            </Button>
          </div>
        </form>
      </div>
      <DeleteAccount />
    </div>
  );
};

export default Setting;
