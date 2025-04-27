"use client";
import clsx from "clsx";
import { motion } from "framer-motion";

interface LetterPullUpProps {
  text?: string;
  className?: string;
}

export const LetterPullUp: React.FC<LetterPullUpProps> = ({
  text = "",
  className = "",
}) => {
  const letters = text.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className={clsx("flex flex-wrap", className)}>
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className="inline-block text-inherit"  
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </div>
  );
};
