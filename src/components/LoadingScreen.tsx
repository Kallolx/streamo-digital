'use client'

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AnimatedCircularProgressBar } from '@/components/magicui/animated-circular-progress-bar';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  duration?: number;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  onLoadingComplete,
  duration = 2000, // 2 seconds default
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; // Slower increment for smoother animation
      });
    }, duration / 50); // More steps for smoother animation

    const timer = setTimeout(() => {
      onLoadingComplete();
    }, duration);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [duration, onLoadingComplete]);

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{
        background: 'linear-gradient(135deg, #15803d 0%, #10b981 100%)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-center px-4"
      >
        {/* Logo placeholder */}
        <motion.div 
          className="mb-10"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <img src="/logo.svg" alt="Streamo Digital" className="h-20 w-auto mx-auto" />
        </motion.div>
        
        {/* Loading text */}
        <h2 className="text-white text-xl md:text-2xl font-bold mb-10">
          Loading your experience...
        </h2>
        
        {/* Circular Progress Bar */}
        <div className="flex justify-center">
          <AnimatedCircularProgressBar
            value={progress}
            min={0}
            max={100}
            gaugePrimaryColor="#ffffff"
            gaugeSecondaryColor="rgba(255, 255, 255, 0.2)"
            className="text-white"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 