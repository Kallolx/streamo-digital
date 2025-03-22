'use client'

import { useEffect } from 'react';
import { useLoading } from '@/providers/LoadingProvider';
import { usePathname } from 'next/navigation';

// Add paths that should trigger the loading screen
const LOADING_PATHS = [
  '/blog',
  '/services',
  '/music-distribution'
];

// Loading durations (in ms)
const INITIAL_LOAD_DURATION = 2000; // First load of the session
const PAGE_LOAD_DURATION = 1500;    // Subsequent page loads

export const usePageLoading = (customDuration?: number) => {
  const { setIsLoading } = useLoading();
  const pathname = usePathname();

  useEffect(() => {
    // Check if current path requires loading
    const shouldShowLoading = LOADING_PATHS.some(path => pathname.startsWith(path));
    
    if (shouldShowLoading) {
      // Store current time to check if it's the first load of this path in this session
      const pathLoadKey = `path-loaded-${pathname}`;
      const isFirstLoadOfPath = !sessionStorage.getItem(pathLoadKey);
      
      // Show loading screen
      setIsLoading(true);
      
      // Mark this path as loaded in this session
      sessionStorage.setItem(pathLoadKey, Date.now().toString());
      
      // Duration depends on whether it's first load of path or custom duration
      const duration = customDuration || (isFirstLoadOfPath ? INITIAL_LOAD_DURATION : PAGE_LOAD_DURATION);
      
      // Hide loading after specified duration
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [pathname, setIsLoading, customDuration]);
}; 