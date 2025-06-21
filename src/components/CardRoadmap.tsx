import { Youtube } from "lucide-react";
import Image from "./Image";
import { Icategories } from "../interfaces";

interface Iprops {
  numberOfStage: number;
  titleOfStage: string;
  category: Icategories;
}



const CardOfRoadmap = ({ numberOfStage, titleOfStage, category }: Iprops) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-center gap-10">
        <div className="flex gap-1 items-center">
          <Image
            imageurl="/assets/Roadmap-20250312T012925Z-001/Roadmap/video player.png"
            className="w-[70px] h-[70px]"
            alt="error"
          />
          <p className="text-[20px] font-bold">Stage {numberOfStage}</p>
        </div>
        <div className="flex flex-col items-end justify-center">
          <p className="text-[15px] font-bold">100%</p>
          <div className="w-36 h-2 bg-black rounded-full mx-auto"></div>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white w-450 h-fit p-5 rounded-lg shadow-lg shadow-black">
        <p className="text-[20px] fontcolor">
          Stage {numberOfStage}: {titleOfStage}
        </p>

        {/* Displaying Categories  */}
        <div className="flex flex-col">
          {Object.entries(category)
            .filter(([key]) => key !== "id" && key !== "StageName") 
            .map(([key, value]) => (
              <div key={key} className="flex gap-1 items-center cursor-pointer">
                <Youtube size={30} color="#4388DD" />
                <p>{value}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardOfRoadmap;
