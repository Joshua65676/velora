import React, { useState, useEffect } from "react";
import { NurtureImg } from "../constants";
import { motion, type Transition } from "framer-motion";

const shuffle = (array: typeof NurtureImg) =>
  [...array].sort(() => Math.random() - 0.5);

const spring: Transition = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const Grid: React.FC = () => {
  const [shuffled, setShuffled] = useState(NurtureImg);

  useEffect(() => {
    const interval = setInterval(() => {
      setShuffled(shuffle(NurtureImg));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col items-center gap-4">
      {/* Top Row: First and Second Divs */}
      <div className="flex gap-10">
        <div className="w-[200px] h-[200px] overflow-hidden rounded-[22.74px] shadow-lg">
          <motion.div
            key={shuffled[0].id}
            layout
            transition={spring}
            className="w-full h-full"
          >
            <img
              src={shuffled[0].image}
              alt=""
              className="w-full h-full object-cover rounded-[22.74px]"
            />
          </motion.div>
        </div>

        <div className="w-[145px] h-[143px] overflow-hidden rounded-[22.74px] shadow-lg mt-13">
          <motion.div
            key={shuffled[1].id}
            layout
            transition={spring}
            className="w-full h-full"
          >
            <img
              src={shuffled[1].image}
              alt=""
              className="w-full h-full object-cover rounded-[22.74px]"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Row: Third Div */}
      <div className="w-[138px] h-[106px] overflow-hidden rounded-[22.74px] shadow-lg">
        <motion.div
          key={shuffled[2].id}
          layout
          transition={spring}
          className="w-full h-full"
        >
          <img
            src={shuffled[2].image}
            alt=""
            className="w-full h-full object-cover rounded-[22.74px]"
          />
        </motion.div>
      </div>
    </main>
  );
};

export default Grid;