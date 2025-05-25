import { categories } from '../../../data';
import { GradualSpacing } from '@/components/eldoraui/gradualspacing';
import CardOfRoadMap from '@/components/CardOfRoadMap/CardOfRoadMap';
import { CircleSmall } from 'lucide-react';
import { useState } from 'react';

const SecondPageOfRoadMap = () => {
  const [dotPositions, setDotPositions] = useState<Record<number, number>>({});

  const updateDotPosition = (id: number, pos: number) => {
    setDotPositions(prev => ({ ...prev, [id]: pos }));
  };

  return (
    <div className='bgforroadmap pt-12 mt-10 h-fit w-full pb-10'>
      <div className=' flex items-center justify-center mt-8'>
      <GradualSpacing
      className="font-display text-center  md:text-5xl lg:text-6xl xl:text-7xl text-4xl font-bold -tracking-widest text-[#2d1551] dark:text-white md:leading-[5rem]"
      text="OUR ROADMAP"
      />
      </div>
    <div className='relative'>
      {/* Vertical Line  */}
    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-1 bg-[#b480cc] z-0" />
    {/* RoadMap Components */}

  <div className="flex flex-col  gap-10 mt-20 px-10">
    

  {categories.map((category, index) => (
    <div
      key={category.id}
      className="grid grid-cols-3 items-start  relative min-h-[350px]"
    >
      {/* Left */}
      <div className={`flex justify-center  ${index % 2 === 0 ? 'invisible' : ''}`}>
        {index % 2 !== 0 && (
          <CardOfRoadMap
            category={category}
            numberOfStage={category.id}
            titleOfStage={category.StageName}
            setDotPosition={(pos) => updateDotPosition(category.id, pos)}
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
          style={{ top: dotPositions[category.id] ?? 50 }}
      />
      
      
    </div>
      {/* Right */}
      <div className={`flex justify-center ${index % 2 !== 0 ? 'invisible' : ''}`}>
        {index % 2 === 0 && (
          <CardOfRoadMap
            category={category}
            numberOfStage={category.id}
            titleOfStage={category.StageName}
            setDotPosition={(pos) => updateDotPosition(category.id, pos)}
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
