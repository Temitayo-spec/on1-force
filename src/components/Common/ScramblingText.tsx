'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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

  useEffect(() => {
    if (!completed) {
      const interval = setInterval(() => {
        setDisplayText((prevText) =>
          prevText
            .split('')
            .map((char, index) =>
              char === targetText[index] ? char : scramble(targetText)[index]
            )
            .join('')
        );
      }, 25); // Changed from 100ms to 25ms for much faster scrambling

      return () => clearInterval(interval);
    }
  }, [displayText, completed]);

  useEffect(() => {
    if (displayText === targetText) {
      setCompleted(true);
    }
  }, [displayText, targetText]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={className}
    >
      {displayText}
    </motion.div>
  );
};

export default ScrambleText;
