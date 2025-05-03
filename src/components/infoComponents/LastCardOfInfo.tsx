import { useAnimation} from 'framer-motion';
import  { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import {motion} from 'framer-motion'


interface Iprops{
    title:string,
    description :string
}



const LastCardOfInfo = ({title,description}:Iprops) => {

    const controlsTracks = useAnimation();
                const { ref: refCard, inView: inViewCards } = useInView({
                    triggerOnce: true,
                    threshold: 0.3,
                });
                useEffect(() => {
                    if (inViewCards) {
                    controlsTracks.start('visible');
                    }
                }, [inViewCards]);
    
    return (
    <motion.div
    ref={refCard}
    initial="hidden"
    animate={controlsTracks}
    variants={{
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
    }}
    className="bg-slate-100 shadow-md shadow-slate-400 w-full md:h-60 h-auto rounded-lg">
    <div className="flex p-2 gap-1">
    <div className="">
        <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
        <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
    </div>
    <div className="circle">
        <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
    </div>
    </div>
    <div className="card__content p-4 flex flex-col w-full gap-2 ">
        <h3 className='text-[25px] font-medium text-black'>{title}</h3>
        <div className='w-[80%] space-y-2'>
        <p className='text-[20px] text-black'>
            {description}
        </p>
        </div>
    

    </div>
    </motion.div>
    )
}

export default LastCardOfInfo