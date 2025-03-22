'use client'

import { useEffect } from 'react';

const GlobalBackground = () => {
  // Set background styles when component mounts
  useEffect(() => {
    // Apply styles to the body element
    document.body.style.backgroundImage = 'url(/bg-image.jpg)';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center top';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    
    // Clean up when component unmounts
    return () => {
      document.body.style.backgroundImage = '';
      document.body.style.backgroundSize = '';
      document.body.style.backgroundPosition = '';
      document.body.style.backgroundRepeat = '';
      document.body.style.backgroundAttachment = '';
    };
  }, []);

  return (
    <>
      {/* Fixed overlay with gradient */}
      <div className="fixed inset-0 bg-black/60 z-0"></div>
      <div className="fixed inset-0 bg-gradient-to-r from-green-500/20 to-white/5 z-10 pointer-events-none"></div>
    </>
  );
};

export default GlobalBackground; 