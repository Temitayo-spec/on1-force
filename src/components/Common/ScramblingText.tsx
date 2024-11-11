'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const scramble = (text: string) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  return text
    .split('')
    .map((char) =>
      char === ' '
        ? ' '
        : characters[Math.floor(Math.random() * characters.length)]
    )
    .join('');
};

const ScrambleText: React.FC<{ targetText: string; className: string }> = ({
  targetText,
  className,
}) => {
  const [displayText, setDisplayText] = useState(scramble(targetText));
  const [completed, setCompleted] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView && !completed) {
      const interval = setInterval(() => {
        setDisplayText((prevText) =>
          prevText
            .split('')
            .map((char, index) =>
              char === targetText[index] ? char : scramble(targetText)[index]
            )
            .join('')
        );
      }, 25);

      return () => clearInterval(interval);
    }
  }, [displayText, completed, inView]);

  useEffect(() => {
    if (displayText === targetText) {
      setCompleted(true);
    }
  }, [displayText, targetText]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className={`font-orbitron ${className}`}
    >
      {displayText}
    </motion.div>
  );
};

export default ScrambleText;
