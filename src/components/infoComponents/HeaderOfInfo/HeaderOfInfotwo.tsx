import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Image from '../../Image';
import img1 from '../../../assets/wallpaper/imageFX3.png';
import img2 from '../../../assets/wallpaper/imageFX2.png';
import img3 from '../../../assets/wallpaper/imageFX1.png';
import ButtonStart from '../ButtonStart/ButtonStart';


const HeaderOfInfotwo = () => {
    const images = [
    {
        src: img1,
        title: 'The Power of Knowledge',
        description:
        'Education opens the doors to opportunity. It lays the foundation for critical thinking, creativity, and lifelong learning.',
    },
    {
        src: img2,
        title: 'Modern Learning for a Digital Age',
        description:
        'Technology is reshaping how we learn — from online classrooms to interactive tools, education is now more accessible than ever before.',
    },
    {
        src: img3,
        title: 'Learning Together, Growing Together',
        description:
        'Collaboration and diversity enrich the learning experience. When we learn together, we grow stronger as individuals and as a community.',
    },
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
    }, []);

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
                imageurl={img.src}
                alt="slideshow"
                className="object-cover object-center w-full h-full"
            />
            {/* Overlay */}
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
            <h1 className="text-white text-lg md:text-[30px] lg:text-[60px] font-bold ">
            {images[currentImage].title}
            </h1>
            <p className="text-white text-sm md:text-base  w-full md:w-2/3 lg:w-1/2">
            {images[currentImage].description}
            </p>
            <ButtonStart />
        </motion.div>
        </AnimatePresence>
    </div>
    );
};

export default HeaderOfInfotwo;
