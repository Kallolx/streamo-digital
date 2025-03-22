'use client'
import { IconCloud } from '@/components/magicui/icon-cloud';
import { scrollToSection } from '@/utils/scrollUtils';

const Hero = () => {
  // Handle clicking the Compare button
  const handleCompareClick = (event: React.MouseEvent) => {
    event.preventDefault();
    scrollToSection('comparison');
  };

  return (
    <div className="relative pt-8 pb-24 lg:pt-8 lg:pb-32 font-dm-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
          {/* Text Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="mx-auto lg:mx-0 max-w-xl">
              <h1 className="font-dm-sans -tracking-[0.06em] font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-4 text-white">
              Go global <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white">Go Streamo Digital</span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Get your music on all major streaming platforms worldwide. Keep 100% of your rights.
              </p>
              <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
                <button
                 className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white rounded-full font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/20 text-lg">
                 <a href="https://auth.streamodigital.com/oauth2/authorize?client_id=09d6f1c4-ca32-4f15-9f8b-3e78e416e9c9&response_type=code&redirect_uri=https://backstage.streamodigital.com/sign-in&env=prod&locale=en&from=https://backstage.streamodigital.com" target="_blank" rel="noopener noreferrer"> Get Started Now</a>
                </button>
                <button
                  onClick={handleCompareClick}
                  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-green-500 text-green-400 hover:bg-green-500/10 rounded-full font-bold transition-all duration-200 text-lg">
                  Compare Services
                </button>
              </div>
            </div>
          </div>

          {/* Icon Cloud Section */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
             
              
              {/* IconCloud component */}
              <div className="relative w-full  flex items-center justify-center">
                <IconCloud 
                  images={[
                    '/icons/spotify.png', // Spotify (green)
                    '/icons/itunes.png', // Apple Music (red)
                    '/icons/ganna.png', // Amazon Music (blue)
                    '/icons/soundcloud.png', // SoundCloud (orange)
                    '/icons/youtube.png', // YouTube Music (red)
                    '/icons/brand.png', // Tidal (blue)
                    '/icons/icon.png', // Deezer (purple)
                    '/icons/soundcloud.png', // Pandora (blue)
                    '/icons/tiktok.png', // TikTok (colorful)
                    '/icons/instagram.png', // Instagram (colorful)
                    '/icons/facebook.png', // Facebook (blue)
                    '/icons/twitter.png', // Twitter (blue)
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 