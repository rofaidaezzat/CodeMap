import React, { useEffect, useState } from 'react'
import Image from '../Image'
import { useUploadImageProfileMutation } from '@/app/services/crudeProfile'
import toast from 'react-hot-toast'
import LoadingSpanner from '../LoadingSpanner'

const DetailsOfUser = () => {
    const [profileImage, setProfileImage] = useState<string | null>(null)
    const [openMenu, setOpenMenu] = useState(false)
    const [uploadImage,{isSuccess,isLoading}]=useUploadImageProfileMutation()


    const toggleMenu = () => {
        setOpenMenu(prev => !prev)
    }

    const deleteImage=()=>{
        setProfileImage(null)
        localStorage.removeItem("profileImage")
        setOpenMenu(false)
    }
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
        const imageUrl = URL.createObjectURL(file)
        setProfileImage(imageUrl)
        const formData=new FormData()
        if(file){
            formData.append("profileImage",file)
        }
        uploadImage({body:formData})
    }
    }
    
    useEffect(() => {
        const savedImage = localStorage.getItem("profileImage")
        if (savedImage) {
            setProfileImage(savedImage)
        }
        }, [])
        useEffect(() => {
        if (isSuccess && profileImage) {
            toast.success("You uploaded image successfully", {
            position: "bottom-center",
            duration: 2000,
            style: {
                backgroundColor: "black",
                color: "white",
                width: "fit-content",
            },
            })
            localStorage.setItem("profileImage", profileImage)
            setOpenMenu(false)
        }
        }, [isSuccess, profileImage])


    return (
    <div className="bgOfPhotoOfProfile hs-dropdown relative inline-flex h-[150px] rounded-3xl items-center gap-5 p-5">
      {/* Profile Image Area */}
        <div className="w-[130px] h-[130px] rounded-full cursor-pointer overflow-hidden" >
        <div className="w-[130px] h-[130px] rounded-full cursor-pointer overflow-hidden">
        {isLoading ? (
        <div className="w-full h-full flex items-center justify-center">
        <LoadingSpanner />
        </div>
        ) : profileImage ? (
        <Image
        imageurl={profileImage}
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
        <h3 className="text-[30px]">User Name</h3>
        <p className="text-[15px]">AI Engineer @ Google | LLMs & GenAI @ MIT</p>
        </div>
    </div>
    )
}

export default DetailsOfUser
