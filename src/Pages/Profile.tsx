import CardofProfileOfCourses from "@/components/CardofProfileOfCourses/CardofProfileOfCourses"
import Image from "@/components/Image"
import { useState } from "react"
import { motion } from 'framer-motion'



const Profile = () => {
    const [openYourTracks,setOpenYourTracks]=useState(false)
    const toggle=()=>{
        setOpenYourTracks(prev=>!prev)
    }
    return (
        <div className=" mt-10 pt-10 flex flex-col items-center w-full">
            {/* <CardOfaboutUs/> */}
            <div className="w-5/6 mt-10 flex flex-col gap-6">
            {/* profile name */}
            <div className="bgOfPhotoOfProfile h-[150px] rounded-3xl flex items-center gap-5 p-5">
                <Image imageurl="src/assets/Info/60a1719d559469dbb6bfa1b6d0890e5e.jpg" alt="profileImge" className="w-[130px] h-[130px] rounded-full" />
                <div className="flex flex-col text-white">
                    <h3 className="text-[30px]">User Name </h3>
                    <p className="text-[15px]">AI Engineer @ Google | LLMs & GenAI @ MIT</p>
                </div>
            </div>
            {/* tasks and tracks */}
            <div className="flex gap-3 ">
                <div className={`border-gray-400 rounded-lg border-2 w-1/4 h-[100px] p-3
                hover:border-pink-600 transition-all duration-300 ease-in-out
                hover:scale-105
                ${
                    openYourTracks&& 'border-pink-600'
                }  text-black font-bold text-[20px] cursor-pointer`}
                    onClick={toggle}
                    >
                    <p>
                        4
                    </p>
                    <p className="text-gray-600">
                        Tracks
                    </p>
                </div>
                <div className="border-gray-400 rounded-lg border-2 w-1/4 h-[100px] p-3 text-black font-bold text-[20px]">
                    <p>
                        23
                    </p>
                    <p className="text-gray-600">
                        Courses
                    </p>
                </div>
                <div className="border-gray-400 rounded-lg border-2 w-1/4 h-[100px] p-3 text-black font-bold text-[20px]">
                    <p>
                        70
                    </p>
                    <p className="text-gray-600">
                            Tasks
                    </p>
                </div>
                <div className="border-gray-400 rounded-lg border-2 w-1/4 h-[100px] p-3 text-black font-bold text-[20px]">
                    <p>
                        50
                    </p>
                    <p className="text-gray-600">
                            Certificate
                    </p>
                </div>
            </div>
            {/* body */}
            <div className="mb-5 ">
                {
                    openYourTracks&&
                    <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white p-4 rounded shadow flex items-center justify-center"
                >
                        <div className="w-1/4">
                        <CardofProfileOfCourses ImageUrl='src/assets/Tracks img/Front-End.jpeg' TitleOfCard="FrontEnd" />
                        </div>
                        <div className="w-1/4">
                        <CardofProfileOfCourses ImageUrl="src/assets/Tracks img/Back-End.jpeg" TitleOfCard="Backend" />
                        </div>
                        <div className="w-1/4">
                            <CardofProfileOfCourses ImageUrl="src/assets/Tracks img/Cyper.jpeg" TitleOfCard="Cyper" />
                        </div>
                        <div className="w-1/4">
                        <CardofProfileOfCourses ImageUrl="src/assets/Tracks img/MobileApp.jpeg" TitleOfCard="MobileApp"/>
                        </div>
                    </motion.div>
                }
            </div>
        
            </div>


        </div>
    )
}

export default Profile