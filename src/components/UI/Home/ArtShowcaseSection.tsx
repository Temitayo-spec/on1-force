'use client';
import Button from '@/components/Common/Button';
import ScrambleText from '@/components/Common/ScramblingText';
import art_1 from '@/images/art_1.png';
import art_2 from '@/images/art_2.png';
import art_3 from '@/images/art_3.png';
import art_4 from '@/images/art_4.png';
import art_5 from '@/images/art_5.png';
import art_6 from '@/images/art_6.png';
import art_7 from '@/images/art_7.png';
import art_8 from '@/images/art_8.png';
import art_9 from '@/images/art_9.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ArtShowcaseSection = () => {
  const artworks = [
    art_1,
    art_2,
    art_3,
    art_4,
    art_5,
    art_6,
    art_7,
    art_8,
    art_9,
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="mt-8 py-8 w-[90%] max-w-screen-xl mx-auto flex gap-4">
      <motion.div
        className="grid grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        {artworks.map((artwork, i) => (
          <motion.div
            key={i}
            variants={item}
            className="overflow-hidden rounded-lg"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={artwork}
                alt="artwork"
                className="object-contain rounded-lg"
                quality={100}
              />
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="w-[24.6875rem] bg-foreground p-8 flex-shrink-0 rounded-2xl"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          type: 'spring',
          bounce: 0.4,
        }}
      >
        <ScrambleText
          targetText="JOIN THE 0N1 FORCE"
          className="text-4xl font-bold font-orbitron mb-3"
        />
        <p className="text-xl leading-[150%]">
          The 0N1 Force are 7,777 generative side-profile characters with over
          100 hand-drawn features fighting for their existence. Strength,
          spirit, and style are what you&apos;ll need to survive in The Ethereal
          Enclave.
        </p>

        <Button type="button" className="w-full mt-8" text="Buy on OpenSea" />
      </motion.div>
    </section>
  );
};

export default ArtShowcaseSection;
