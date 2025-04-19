import Image from '../Image'

interface Iprops {
    numberOfStage: number;
    ToggleCard:()=>void
}


const HeaderOfRoadCard = ({ToggleCard,numberOfStage}:Iprops) => {
    return (
    <div className="flex items-center gap-10" >
            <div className="flex gap-1 items-center cursor-pointer" onClick={ToggleCard}>
            <Image
            imageurl="src/assets/Roadmap-20250312T012925Z-001/Roadmap/video player.png"
            className="w-[70px] h-[70px]"
            alt="error"
            />
                <p className="text-[20px] font-bold">Stage{numberOfStage}</p>
            </div>
            <div className="flex flex-col items-end justify-center">
            <p className="text-[15px] font-bold">100%</p>
            <div className="w-36 h-2 bg-black rounded-full mx-auto"></div>
            </div>
        </div>
    )
}

export default HeaderOfRoadCard