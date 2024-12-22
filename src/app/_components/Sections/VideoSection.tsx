"use client";

import { useState } from "react";

export default function VideoSection() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <div className="relative ">
      {/* Always playing background video */}
      <div 
        onClick={handleToggleFullscreen}
        className="cursor-pointer relative w-full h-[90vh]"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4" 
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-black/30 flex items-center justify-center hover:bg-black/40 transition-colors">
            <div className="w-0 h-0 border-t-10 border-t-transparent border-l-16 border-l-white border-b-10 border-b-transparent ml-2"></div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50">
          <button
            onClick={handleToggleFullscreen}
            className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full"
            aria-label="Close fullscreen"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            </svg>
          </button>
          
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source 
              src="https://axtra-next-agency.vercel.app/assets/video/hero-3.mp4" 
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}