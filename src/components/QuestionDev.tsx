import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

interface IProps{
    questionName:string
    answer:string
}
const QuestionDev = ({questionName,answer}:IProps) => {

    const[isOpen,setIsOpen]=useState(false)

    // handlers
    const toggle =()=>{
        setIsOpen(prev=>!prev)
    }
    return (

        <div className="" onClick={toggle}>
            {isOpen?(
                <div className="flex flex-col w-full gap-2 justify-center items-center  ">
                    <div className="flex justify-between h-[50px] border-2 border-[#D5D6DD] rounded-xl lg:w-[920px] w-full p-5  items-center cursor-pointer duration-300 cursor-pointer:scale-105">
                    <p>{questionName}</p>
                    <ChevronDown size={20}/>
                    </div>
                    <div className="bg-[#EEEFF2] lg:w-[900px] w-full p-3  border-[#1C1D22] h-[50px] flex items-center rounded-xl duration-300 cursor-pointer:scale-105 ">
                        <p>
                            {answer}
                        </p>
                    </div>
                </div>
            ):(
                <div className="flex justify-between h-[50px] border-2 border-[#D5D6DD] rounded-xl lg:w-[920px] w-full p-5  items-center cursor-pointer">
                <p>{questionName}</p>
                <ChevronRight size={20}/>
                </div>
            )}
        </div>
)
}

export default QuestionDev