'use client'
import { IconCloud } from '@/components/magicui/icon-cloud';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-24 lg:pt-16 lg:pb-32 font-dm-sans">
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
                <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-b from-green-300 via-green-600 to-green-700 text-white rounded-full font-bold transition-all duration-200 shadow-lg hover:shadow-green-500/20 text-lg">
                  Get Started Now
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white rounded-full font-medium hover:bg-white/10 transition-all duration-200 border-2 border-white/20 hover:border-white/30 text-lg">
                  Learn More
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