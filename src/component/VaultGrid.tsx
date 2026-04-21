import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { VaultImg } from '../constants';

const VaultGrid: React.FC = () => {
  const [index, setIndex] = useState(0);

  // cycle through images every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % VaultImg.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -100, opacity: 0 },
  };

  return (
    <>
      {/* Desktop grid (unchanged) */}
      <main className="hidden md:flex flex-row gap-4 relative right-58">
        {VaultImg.map((img, i) => {
          const sizes = [
            { w: 250, h: 329 },
            { w: 311, h: 361 },
            { w: 365, h: 443 },
            { w: 292, h: 329 },
            { w: 251, h: 212 },
            { w: 146, h: 130 },
          ];
          const position = [
            '',
            'relative top-20',
            'relative top-35',
            'relative top-20',
            '',
            'absolute bottom-0 right-104 top-130',
          ];
          return (
            <main
              key={i}
              className={`overflow-hidden ${position[i]}`}
              style={{ width: `${sizes[i].w}px`, height: `${sizes[i].h}px` }}
            >
              <motion.img
                src={img.image}
                alt=""
                className="w-full h-full object-cover"
                animate={{
                  x: index % 2 === 0 ? 15 : -15,
                  y: index % 2 === 0 ? 10 : -10,
                }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
            </main>
          );
        })}
      </main>

      {/* Mobile slider */}
      <div className="block md:hidden w-[350px] h-[450px] rounded-2xl mx-auto overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={VaultImg[index].image}
            src={VaultImg[index].image}
            alt=""
            className="w-full h-full object-cover"
            variants={slideVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          />
        </AnimatePresence>
      </div>
    </>
  );
};

export default VaultGrid;
