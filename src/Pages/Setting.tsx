import axios from "axios";
import { UpdatePassword, UpdateUserProfile } from "@/data";
import Button from "@/Ui/Button";
import Input from "@/Ui/Input";
import InputErrorMessage from "@/Ui/InputErrorMessage";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { UpdatePasswordSchema, UpdateProfileSchema } from "@/Validation";
import DeleteAccount from "@/components/SettingComponents/DeleteAcount";

interface Iuserprofile {
  first_name: string;
  last_name: string;
  email: string;
}


interface Ipasswordupdate {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

const Setting = () => {
  const baseURL = "https://ab3d-102-189-219-210.ngrok-free.app/";
  const token = localStorage.getItem("accessToken") || "";

  // Profile Form
  const {
    register: profileRegister,
    handleSubmit: handleProfileSubmit,
    formState: { errors: profileErrors },
    reset,
  } = useForm<Iuserprofile>({
    resolver: yupResolver(UpdateProfileSchema),
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
        const response = await axios.get("/users/me", {
          baseURL,
          headers: {
            "x-token": token,
          },
          withCredentials: true,
        });

        const userData = response.data;

        reset({
          first_name: userData.first_name,
          last_name: userData.last_name,
          email: userData.email,
        });
      } catch (error) {
        console.error("خطأ في تحميل البيانات:", error);
      }
    };

    getUserProfile();
  }, []);

  // تحديث البروفايل
  const onSubmituserprofileupdate: SubmitHandler<Iuserprofile> = async (
    data
  ) => {
    try {
      const { status } = await axios.put("/users/update-profile", data, {
        baseURL,
        headers: {
          "x-token": token,
        },
        withCredentials: true,
      });

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
      const { status } = await axios.put("/users/update-password", data, {
        baseURL,
        headers: {
          "x-token": token,
        },
        withCredentials: true,
      });

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
    return UpdateUserProfile.map(({ name, Label, type, validation }, index) => (
      <div className="flex flex-col gap-2 w-1/2" key={index}>
        <label htmlFor={name} className="font-semibold text-gray-700">
          {Label}
        </label>
        <Input
          type={type}
          id={name}
          className="h-12 bg-gray-100 border border-gray-300 rounded px-3"
          {...profileRegister(name as keyof Iuserprofile, validation)}
        />
        {profileErrors[name as keyof Iuserprofile] && (
          <InputErrorMessage
            msg={profileErrors[name as keyof Iuserprofile]?.message}
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
      <DeleteAccount/>
    </div>
  );
};

export default Setting;
