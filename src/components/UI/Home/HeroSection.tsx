'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import hero_1 from '@/images/hero_1.png';
import hero_2 from '@/images/hero_2.png';
import on1_frames from '@/images/on1_frames.png';
import logo from '@/svgs/logo.svg';
import ScrambleText from '@/components/Common/ScramblingText';

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [hero_1, hero_2];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getNextImage = () => {
    return currentImage === 0 ? 1 : 0;
  };

  return (
    <section className="relative w-[90%] max-w-screen-xl mx-auto overflow-hidden">
      <div className="relative h-[700px]">
        <div className="absolute inset-0">
          <Image
            src={images[getNextImage()]}
            alt={`hero image ${getNextImage() + 1}`}
            className="w-full h-full object-cover rounded-2xl"
            quality={100}
            priority
            fill
          />
        </div>

        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
            animate={{
              clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
            }}
            transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={images[currentImage]}
              alt={`hero image ${currentImage + 1}`}
              className="w-full h-full object-cover rounded-2xl"
              quality={100}
              priority
              fill
            />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full grid place-items-center mix-blend-lighten gap-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <ScrambleText
            targetText="0N1 FORCE"
            className="font-orbitron text-6xl md:text-[7.5rem] text-center font-bold"
          />
        </motion.h1>

        <AnimatePresence mode="wait">
          {currentImage === 1 ? (
            <motion.div
              key="content-1"
              className="flex items-center gap-6 md:gap-[3.5rem] mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Image src={logo} alt="logo" />
              <Image src={on1_frames} alt="on1-frames" quality={100} />
            </motion.div>
          ) : (
            <motion.div
              key="content-2"
              className="text-[2rem] leading-[150%] mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              New day, new team
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HeroSection;
