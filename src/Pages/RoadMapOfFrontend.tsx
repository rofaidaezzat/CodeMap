import CardOfRoadMap from "../components/CardOfRoadMap/CardOfRoadMap";
import Image from "../components/Image"
import { categories } from "../data"
import { CircleSmall } from 'lucide-react';




const RoadMapOfFrontend = () => {

    const Stages1 = categories.slice(0, 1);  
    const Stages2 = categories.slice(1, 2);
    const Stages3 = categories.slice(2, 3); 
    const Stages4 = categories.slice(3, 4);  

    return (
    <div className="bgforroadmap pt-10 mt-10 h-auto  w-full">
        <div className="flex flex-col p-7 justify-center gap-3 ">
            <h3 className="text-[50px] text-black">Our Roadmap</h3>
            <div className="w-48 h-2  bg-[#FF6FA5] rounded-md colorOfUnderline "></div> 
        </div>
        <div className="w-full flex " >
            {/* left dev */}
        <div className="flex flex-1 flex-col h-auto items-center ">
            <Image className=" w-[500px] " imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/OBJECTS.png" alt="error"/>
            <div className="w-[500px]">
            {Stages2.map((category) => (
                <CardOfRoadMap
                key={category.id}
                category={category}
                numberOfStage={category.id}
                titleOfStage={category.StageName}
                />
            ))}
            </div>
            {/* images */}
            <div className=" flex justify-around  w-full items-center">
                <div className="flex flex-col gap-9  ">
                <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/casual-life-3d-idea-lamp 1.png" alt="error" className="w-[100px] h-[100px] ml-14"/>
                <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/Group7.png" alt="error" className="w-[70px] h-[70px] mr-5 "/>
                </div>
                <div className="flex">
                <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/Group8.png" alt="error" className="w-[70px] h-[70px]"/>
                </div>
            </div>
            <div className="w-[500px] mt-7">
            {Stages4.map((category) => (
                <div key={category.id}>
                <CardOfRoadMap
                category={category}
                numberOfStage={category.id}
                titleOfStage={category.StageName}
                
                />
                </div>
            ))}
            </div>
            <div className="flex justify-start w-full p-4">
            <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/Group3.png" alt="error" className="w-[70px] h-[70px]"/>
            </div>
            
        </div>
         {/* line dev */}
        <div className="">
        <div className="block bg-[#D0D7FF] w-1 h-full  rounded-2xl  ">
            <div className="flex flex-col justify-between w-full h-full items-center ">
            <CircleSmall   fill="#FF6FA5" color="#FFFFFF" size={30}/>
            <CircleSmall  fill="#FF6FA5" color="#FFFFFF" size={30}/>
            <CircleSmall  fill="#FF6FA5" color="#FFFFFF" size={30}/>
            <CircleSmall fill="#FF6FA5" color="#FFFFFF" size={30} />
            </div>
        </div>
        </div>
        {/* right dev */}
        <div className="flex flex-1 flex-col h-auto items-center space-y-9">
        <div className="w-[500px]">
        {Stages1.map((category) => (
                <CardOfRoadMap
                key={category.id}
                category={category}
                numberOfStage={category.id}
                titleOfStage={category.StageName}
                />
            ))}
        </div>
        <div className="flex justify-around w-full mt-7">
        <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/Group9.png" alt="error" className="w-[70px] h-[70px] mr-5 "/>
        <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/Group3.png" alt="error" className="w-[70px] h-[70px] mr-5 "/>
        </div>
        <div className="w-[500px] mt-8 pt-5">
        {Stages3.map((category) => (
                <CardOfRoadMap
                key={category.id}
                category={category}
                numberOfStage={category.id}
                titleOfStage={category.StageName}
                />
            ))}
        </div>
        <Image className=" w-[330px]  h-[400px]" imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/OBJECTS2.png" alt="error"/>
        <div className="flex justify-end w-full ">
            <Image imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/Group2.png" alt="error" className="w-[70px] h-[70px]"/>
        </div>
        </div>
        </div>
    </div>
)
}

export default RoadMapOfFrontend