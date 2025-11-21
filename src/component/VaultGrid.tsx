import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { VaultImg } from '../constants';

const VaultGrid: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className='flex flex-row gap-4 relative right-58'>
      {VaultImg.map((img, index) => {
        // Set custom size per index
        const sizes = [
          { w: 250, h: 329 },
          { w: 311, h: 361 },
          { w: 365, h: 443 },
          { w: 292, h: 329 },
          { w: 251, h: 212 },
          { w: 146, h: 130 },
        ];

        // Set custom positioning per index
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
            key={index}
            className={` overflow-hidden ${position[index]}`}
            style={{ width: `${sizes[index].w}px`, height: `${sizes[index].h}px` }}
          >
            <motion.img
              src={img.image}
              alt=""
              className="w-full h-full object-cover"
              animate={{
                x: toggle ? 15 : -15,
                y: toggle ? 10 : -10,
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
              }}
            />
          </main>
        );
      })}
    </main>
  );
};

export default VaultGrid;