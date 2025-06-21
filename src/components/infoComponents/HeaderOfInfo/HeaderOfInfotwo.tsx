import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from '../../Image';
import ButtonStart from '../ButtonStart/ButtonStart';

interface IHeader{
    title:string 
    subTitle:string
}

interface Iprops{
    header:IHeader[]

}

const HeaderOfInfotwo = ({ header }: Iprops) => {
    const imgArray = [
        "/assets/wallpaper/imageFX3.png",
        "/assets/wallpaper/imageFX2.png",
        "/assets/wallpaper/imageFX1.png"
    ];

    const images = header?.map((item, index) => ({
    title: item.title,
    description: item.subTitle,
    image: imgArray[index % imgArray.length],
    })) || [];

    const [currentImage, setCurrentImage] = useState<number>(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
    }, [images.length]);

    if (!header || header.length === 0) {
    return (
        <div className="w-full h-[300px] flex items-center justify-center bg-gray-100">
        <h2 className="text-xl font-semibold text-gray-600">Not Found</h2>
        </div>
    );
    }

    return (
    <div className="relative w-full lg:h-[700px] md:h-[450px] h-[300px] overflow-hidden">
        {images.map((img, index) => (
        <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentImage ? 1 : 0 }}
            transition={{ duration: 1 }}
        >
            <div className="relative w-full h-full">
            <Image
              imageurl={img.image}
              alt="slideshow"
              className="object-cover object-center w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        </motion.div>
      ))}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center px-4"
        >
          <h1 className="text-white text-lg md:text-[30px] lg:text-[60px] font-bold">
            {images[currentImage].title}
          </h1>
          <p className="text-white text-sm md:text-base w-full md:w-2/3 lg:w-1/2">
            {images[currentImage].description}
          </p>
          <ButtonStart typeofenroll="Enroll Now!" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HeaderOfInfotwo;
