import { Youtube } from 'lucide-react';
import { Icategories } from '../../interfaces';
import './CardOfRoadMap.css'
import HeaderOfRoadCard from './HeaderOfRoadCard';
import { useEffect, useRef, useState } from 'react';


interface Iprops {
    numberOfStage: number;
    titleOfStage: string;
    category: Icategories;
    setDotPosition?: (pos: number) => void; // جديدة


}

const CardOfRoadMap = ({numberOfStage,category,titleOfStage,setDotPosition}:Iprops) => {
    const [isOpen,setIsOpen]=useState(true)
    const ref = useRef<HTMLDivElement>(null);


    const ToggleCard=()=>{
        setIsOpen(prev=>!prev)
    }

    useEffect(() => {
        if (ref.current && setDotPosition) {
            const rect = ref.current.getBoundingClientRect();
            setDotPosition(rect.height / 2);
        }
        }, []);
    
    
    return (
        <div className='flex flex-col items-center justify-center gap-4'>
        {/* Header */}
        <div ref={ref}>
        <HeaderOfRoadCard ToggleCard={ToggleCard} numberOfStage={numberOfStage} />
        </div>
        <div>
        {isOpen&&
        <div className="card">
        <div className="bg" />
        <div className="blob" />
    
      {/* Content wrapper with higher z-index */}
        <div className="relative z-[3] flex flex-col gap-4 w-full">
        <p className="text-[20px] fontcolor">
            Stage {numberOfStage}: {titleOfStage}
        </p>
    
        <div className="flex flex-col">
            {Object.entries(category)
            .filter(([key]) => key !== "id" && key !== "StageName")
            .map(([key, value]) => (
                <div key={key} className="flex gap-1 items-center  cursor-pointer">
                <Youtube size={30} color="#4388DD" />
                <p>{value}</p>
                </div>
            ))}
        </div>
        </div>
    </div>
        }

        </div>
        

    </div>
    
    )
}

export default CardOfRoadMap