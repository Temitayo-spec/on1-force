'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

interface ScrambleTextProps {
  targetText: string;
  className?: string;
  duration?: number;
}

const ScrambleText: React.FC<ScrambleTextProps> = ({
  targetText = '',
  className = '',
  duration = 1000,
}) => {
  // Initialize displayText with spaces matching targetText length
  const [displayText, setDisplayText] = useState(() =>
    ' '.repeat(targetText.length)
  );
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const animationRef = useRef<number>();

  // Calculate the number of steps based on duration
  const totalSteps = Math.max(Math.floor(duration / 16.67), 1);
  const stepsPerCharacter = Math.ceil(totalSteps / targetText.length);

  useEffect(() => {
    if (!inView || !targetText) return;

    let currentStep = 0;
    const textLength = targetText.length;
    const finalText = targetText.split('');
    const initialText = Array(textLength).fill(' ');

    const animate = () => {
      const currentCharIndex = Math.floor(currentStep / stepsPerCharacter);

      if (currentCharIndex >= textLength) {
        setDisplayText(targetText);
        return;
      }

      const newText = [...initialText];

      // Update all characters up to the current index
      for (let i = 0; i <= currentCharIndex; i++) {
        if (i === currentCharIndex && targetText[i] !== ' ') {
          // For the current character, show a random character
          newText[i] =
            CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)];
        } else {
          // For previous characters, show the final character
          newText[i] = finalText[i];
        }
      }

      setDisplayText(newText.join(''));
      currentStep++;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, targetText, stepsPerCharacter]);

  // If no target text is provided, return null or empty div
  if (!targetText) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={`font-orbitron ${className}`}
    >
      {displayText}
    </motion.div>
  );
};

export default ScrambleText;
