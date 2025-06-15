import { GradualSpacing } from '@/components/eldoraui/gradualspacing';
import CardOfRoadMap from '@/components/CardOfRoadMap/CardOfRoadMap';
import { CircleSmall } from 'lucide-react';
import { useState } from 'react';
import { axiosInstance } from '@/config/axios.config';
import { useQuery } from '@tanstack/react-query';
import {  useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import LoadingTaskForm from '@/components/TaskFormComponents/LoadingTaskForm/LoadingTaskForm';


interface Icategory{
    _id:string,
    title:string

}

export interface IStatges {
    _id: string;
    title: string;
    order: number;
    progress: string;
    category:Icategory[]
}
export type IstatgesResponse =IStatges[];






const SecondPageOfRoadMap = () => {
    const { ClickedId } = useSelector((state: RootState) => state.clickedId);
  const [dotPositions, setDotPositions] = useState<Record<number, number>>({});
  const updateDotPosition = (id: number, pos: number) => {
    setDotPositions(prev => ({ ...prev, [id]: pos }));
  };

 
  //fetch statges 
  const getStatgesById = async (): Promise<IstatgesResponse> => {
        if (!ClickedId) throw new Error("No stage ID Provided");
        const { data } = await axiosInstance.get(`/stages/roadmap/${ClickedId}`);
        return data;
    };

    const { data ,isLoading} = useQuery({
        queryKey: ["oneUser", ClickedId],
        queryFn: getStatgesById,
        enabled: !!ClickedId,
    });

    if (isLoading) return <div className='flex items-center w-full min-h-screen justify-center'><LoadingTaskForm/></div> 



  return (
    <div className='bgforroadmap pt-12 mt-10 h-fit w-full pb-10'>
      <div className=' flex items-center justify-center mt-8'>
      <GradualSpacing
      className="font-display text-center  md:text-5xl lg:text-6xl xl:text-7xl text-4xl font-bold -tracking-widest text-[#2d1551]  md:leading-[5rem]"
      text="OUR ROADMAP"
      />
      </div>
    <div className='relative'>
      {/* Vertical Line  */}
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-[#b480cc] z-0" />
    {/* RoadMap Components */}

  <div className="flex flex-col  gap-10 mt-20 px-10">
    

  {data?.map(({_id,category,order,title}) => (
    <div
      key={_id}
      className="grid grid-cols-3 items-start  relative min-h-[350px]"
    >
      {/* Left */}
      <div className={`flex justify-center  ${order % 2 === 0 ? 'invisible' : ''}`}>
        {order % 2 !== 0 && (
          <CardOfRoadMap
            category={category}
            numberOfStage={order}
            titleOfStage={title}
            setDotPosition={(pos) => updateDotPosition(order, pos)}
          />
        )}
  
      </div>
      {/* Middle Line & Dot */}
      <div className="relative flex justify-center min-h-[350px]">
      
      <CircleSmall
          fill="#DE00A5"
          color="#FFFFFF"
          size={30}
          className="z-10 absolute left-1/2 -translate-x-1/2"
          style={{ top: dotPositions[order] ?? 50 }}
      />
      
      
    </div>
      {/* Right */}
      <div className={`flex justify-center ${order % 2 !== 0 ? 'invisible' : ''}`}>
        {order % 2 === 0 && (
          <CardOfRoadMap
            category={category}
            numberOfStage={order}
            titleOfStage={title}
            setDotPosition={(pos) => updateDotPosition(order, pos)}
          />
        )}
      </div>
    </div>
  ))}
</div>

    </div>

  </div>
  );
};

export default SecondPageOfRoadMap;
