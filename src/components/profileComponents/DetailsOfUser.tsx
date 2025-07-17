import React, { useEffect, useState } from "react";
import Image from "../Image";
import {
  useDeleteImageProfileMutation,
  useUploadImageProfileMutation,
} from "@/app/services/crudeProfile";
import toast from "react-hot-toast";
import LoadingSpanner from "../LoadingSpanner";
import { axiosInstance } from "@/config/axios.config";
import { useQuery } from "@tanstack/react-query";

interface IUser {
  profile_image: string;
}

const DetailsOfUser = () => {
  // states
  const userDataString = localStorage.getItem("loggedInUser");
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const [uploadImage, { isSuccess, isLoading: isLoadingUploadImage }] =
    useUploadImageProfileMutation();
  const [openMenu, setOpenMenu] = useState(false);
  const [
    DeleteImage,
    { isSuccess: isSuccessDelete, isLoading: isLoadingDelete },
  ] = useDeleteImageProfileMutation();
  const IdUser = userData.id;

  const getUserById = async (): Promise<IUser> => {
    if (!IdUser) throw new Error("No User ID Provided");
    const { data } = await axiosInstance.get(`users/${IdUser}`);
    return data;
  };

  // fetch image from database
  const { data, isLoading: isloadingFetchImage,refetch } = useQuery({
    queryKey: ["oneUser", IdUser],
    queryFn: getUserById,
    enabled: !!IdUser,
  });

  const toggleMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const deleteImage = () => {
    DeleteImage({});
    localStorage.removeItem("profileImage");
    setOpenMenu(false);
  };

  // Handlers
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const formData = new FormData();
      if (file) {
        formData.append("profileImage", file);
      }
      uploadImage({ body: formData });
    }
  };

  //is success upload image
  useEffect(() => {
    if (isSuccess && data?.profile_image) {
      toast.success("You uploaded image successfully", {
        position: "bottom-center",
        duration: 4000,
        style: {
          backgroundColor: "black",
          color: "white",
          width: "fit-content",
        },

      });
      setOpenMenu(false);
      // تحديث localStorage بالصورة الجديدة
      const userDataString = localStorage.getItem("loggedInUser");
      const userData = userDataString ? JSON.parse(userDataString) : null;
      if (userData) {
        userData.profile_image = data.profile_image;
        localStorage.setItem("loggedInUser", JSON.stringify(userData));
      }
      
    }
    refetch();

  }, [isSuccess, data?.profile_image]);

  // is success delete image
  useEffect(() => {
    if (isSuccessDelete) {
      toast.success("You Delete image successfully", {
        position: "bottom-center",
        duration: 4000,
        style: {
          backgroundColor: "black",
          color: "white",
          width: "fit-content",
        },
      });
          refetch();

    }
  }, [isSuccessDelete]);

  return (
    <div className="bgOfPhotoOfProfile hs-dropdown relative inline-flex h-[150px] w-full rounded-3xl items-center gap-5 p-5">
      {/* Profile Image Area */}
      <div className="w-[130px] h-[130px] rounded-full cursor-pointer overflow-hidden">
        <div className="w-[130px] h-[130px] rounded-full cursor-pointer overflow-hidden">
          {isloadingFetchImage || isLoadingUploadImage || isLoadingDelete ? (
            <div className="w-full h-full flex items-center justify-center">
              <LoadingSpanner />
            </div>
          ) : data?.profile_image?.length ? (
          <Image
          imageurl={`https://codemap-production.up.railway.app/${data.profile_image.replace(/\\/g, "/")}`}
  alt="Profile"
  className="rounded-full object-cover w-[130px] h-[130px]"
  onClick={toggleMenu}
/>

          ) : (
            <>
              <label
                htmlFor="upload-photo"
                className="w-full h-full bg-gray-300 rounded-full font-bold flex items-center justify-center text-sm text-gray-600 cursor-pointer"
              >
                Upload Image
              </label>
              <input
                id="upload-photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </>
          )}

          {/* Dropdown Menu */}
          {openMenu && (
            <div
              className="absolute top-[100%] left-0 z-10 bg-white rounded-lg shadow-md ml-20 p-2 dark:bg-neutral-800"
              role="menu"
            >
              <label
                htmlFor="upload-photo"
                className="cursor-pointer block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
              >
                Upload New profile image
              </label>
              <input
                id="upload-photo"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <label
                className="cursor-pointer block px-4 py-2 text-sm rounded-lg text-gray-700 hover:bg-gray-100 dark:text-neutral-300 dark:hover:bg-neutral-700"
                onClick={deleteImage}
              >
                Delete Profile Image
              </label>
            </div>
          )}
        </div>
      </div>
      {/* User Info */}
      <div className="flex flex-col text-white">
        <h3 className="text-[30px]">
          {userData.first_name} {userData.last_name}
        </h3>
        <p className="text-[15px]">{userData.email}</p>
      </div>
    </div>
  );
};

export default DetailsOfUser;
