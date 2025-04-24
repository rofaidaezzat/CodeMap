import { useNavigate } from "react-router-dom";
import Button from "../Ui/Button";

interface IProps{
    description:string
    title:string;
    // backgroundImage:string

}
const ContentOfHeaderOfInfo = ({ description,title}:IProps) => {
    const navigate=useNavigate()
    const navigateToRoadmap=()=>{

        navigate('/RoadMapOfFrontend')
    }
    return (
    <div >
        <div className="bg-cover bg-center w-full h-[500px] flex flex-col items-center pt-20 mt-3 rounded-xl shadow-lg shadow-[#E1DAE7] bgForInfo" >
            <div className="px-8 py-5 flex flex-col items-center justify-center gap-7">
            <p className=" text-[#371F5A] text-center  font-bold text-[70px] w-4/6 ">{title}</p>
            <p className=" text-[#371F5A] text-[20px]">{description}</p>
            <Button className="bg-[#371F5A] w-fit text-black  px-4 md:px-6 py-2 rounded-md flex items-center justify-center font-semibold text-sm md:text-base" onClick={navigateToRoadmap}>
                    Start Learning
            </Button>
            </div>
        </div>
    </div>
)
}

export default ContentOfHeaderOfInfo
