import { CalendarDays } from 'lucide-react';
import {  InformationOfInfo } from '../../data';
import CardOfInfo from '../../components/Course Overview Of info/CardOfInfo';
import HeaderOfInfotwo from '@/components/infoComponents/HeaderOfInfo/HeaderOfInfotwo';
import LastCardOfInfo from '@/components/infoComponents/LastCardOfInfo';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import {motion} from 'framer-motion'
import { useGetInfoTrackQuery } from '@/app/services/GetTracks';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/store';
import GlobelLoading from '@/Ui/LoadingGlable/LoadingGlable';
import ButtonStart from '@/components/infoComponents/ButtonStart/ButtonStart';


const InfoOfFrontend = () => {

  const { ClickedId } = useSelector((state: RootState) => state.clickedId);
const { data, isLoading } = useGetInfoTrackQuery(ClickedId);

const convertedData = data ? [
  {
    title: "Core Languages",
    content: data.core_languages.map(lang => ({
      imagurl: lang.icon,
      imagetitle: lang.name,
    })),
  },
  {
    title: "Popular Frameworks",
    content: data.popular_frameworks.map(fw => ({
      imagurl: fw.icon,
      imagetitle: fw.name,
    })),
  },
  {
    title: "Development Tools",
    content: data.development_tools.map(tool => ({
      imagurl: tool.icon,
      imagetitle: tool.name,
    })),
  },
] : [];



  // animation for second dev
  const controlsText = useAnimation();
  const { ref: refDescription, inView: inViewText } = useInView({
      triggerOnce: true,
      threshold: 0.3,
  });
  
  useEffect(() => {
      if (inViewText) {
      controlsText.start('visible');
      }
  }, [inViewText]);

  //  animation for Calender dev

    const controlsPremium = useAnimation();
          const { ref: refCalender, inView: inViewPremium } = useInView({
              triggerOnce: true,
              threshold: 0.3,
              });
          
              useEffect(() => {
              if (inViewPremium) {
                  controlsPremium.start("visible");
              }
              }, [inViewPremium]);
  // animation for cards

      const controlsTracks = useAnimation();
            const { ref: refCards, inView: inViewCards } = useInView({
                triggerOnce: true,
                threshold: 0.3,
            });
            
            useEffect(() => {
                if (inViewCards) {
                controlsTracks.start('visible');
                }
            }, [inViewCards]);
        if (isLoading) {
        return (
    <div className='flex items-center justify-center w-full h-screen'>
      <GlobelLoading />
    </div>
  );
}


  return (
    <div className='min-h-screen pt-20 m-5 flex flex-col gap-10 items-center'>
      {/* first section  */}
      <div  className="w-full ">
        {data?.header && (
        <div className="w-full">
        <HeaderOfInfotwo header={data.header} />
        </div>
        )}

      </div>

      {/*  second dev */}
      <motion.div
        ref={refDescription}
        initial="hidden"
        animate={controlsText}
        variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0, transition: { duration: 1 } },
        }}
        className='w-full mt-5  flex flex-col gap-3'>
        <h3 className='font-bold  text-[#371F5A] lg:text-3xl md:text-2xl text-lg '>
        {data?.title}
        </h3>
        <p className='lg:text-[22px]  md:text-xl text-lg'>
        {data?.description}
        </p>
      </motion.div>
       {/* calander */} 
    <motion.div
            ref={refCalender}
            initial="hidden"
            animate={controlsPremium}  
            className='flex md:flex-row flex-col    w-full  mt-10  md:gap-9   items-center p-2 justify-around bg-slate-200  lg:h-[300px] h-[250px]'>
      <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={controlsPremium}
                  variants={{
                  hidden: { x: -100, opacity: 0 },
                  visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                  }}
                  className='flex flex-col gap-3 '>
              <h3 className='font-blod lg:text-[40px] md:text-[30px]'>
                    When would you like to start?
              </h3>
              <p className=' lg:block hidden lg:text-[20px]  text-[#888080]'>Start straight away and join a global classroom of learners.<br/> If the course
                        hasn’t started yet you’ll see the future date listed below.</p>
          </motion.div>
          <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={controlsPremium}
                variants={{
                hidden: { x: 100, opacity: 0 },
                visible: { x: 0, opacity: 1, transition: { duration: 1 } },
                }} 
                className='border-2  border-l-4 border-[#888080] border-l-[#DE00A5] lg:w-[600px] md:w-[400px] w-[300px] h-[75px] p-2 flex items-center justify-between'>
        <div className='flex gap-2 items-center justify-center cursor-pointer'>
        <CalendarDays color='black' size={40} />
            <p className='text-black  md:text-[20px] text-[18px]'>Available now</p>
        </div>
        <ButtonStart typeofenroll='Join today'/>
    </motion.div>
    </motion.div>

      {/* fourth section */}
    <div className='w-full flex flex-wrap overflow-hidden lg:gap-0 gap-7 justify-around  mt-5'>
    {
      convertedData.map((data,idx)=>(
        <motion.div
                ref={refCards}
                initial="hidden"
                animate={controlsTracks}
                variants={{
                hidden: { opacity: 0, y: 100 },
                visible: { opacity: 1, y: 0, transition: { duration: 1 } },
                }}
                key={idx}>
                  <CardOfInfo  title={data.title} content={data.content} />
        </motion.div>
      ))
    }
    </div>
  <div className='w-full flex flex-col gap-5  mt-10'>
    {/* Last Section */}
    {
      InformationOfInfo.map((info,idx)=>(
        <LastCardOfInfo key={idx} title={info.title} description={info.description}/>
      )
      )
    }
  </div>
    
    </div>
  )
}

export default InfoOfFrontend