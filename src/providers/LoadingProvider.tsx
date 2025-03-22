'use client'

import { createContext, useContext, useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

const LOCAL_STORAGE_KEY = 'streamodigital-first-load';

export const LoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check if this is the first visit
    if (typeof window !== 'undefined') {
      const hasVisitedBefore = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (!hasVisitedBefore) {
        // First visit to the site
        setIsFirstVisit(true);
        localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
      }
      setIsInitialized(true);
    }
  }, []);

  // Only show the loading screen on first visit or when explicitly triggered
  const shouldShowLoading = isInitialized && (isFirstVisit || isLoading);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    setIsFirstVisit(false);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      <AnimatePresence mode="wait">
        {shouldShowLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      <div style={{ opacity: shouldShowLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}>
        {children}
      </div>
    </LoadingContext.Provider>
  );
};

export default LoadingProvider; 