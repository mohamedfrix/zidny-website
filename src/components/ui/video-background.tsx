'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VideoBackgroundProps {
  src: string;
  className?: string;
  fallbackColor?: string;
}

export default function VideoBackground({ 
  src, 
  className = '', 
  fallbackColor = 'bg-gray-400' 
}: VideoBackgroundProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    console.log('VideoBackground: Loading video from:', src);
  }, [src]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      console.log('VideoBackground: Video data loaded successfully');
      setIsLoading(false);
      setHasError(false);
      
      // Force play the video with more aggressive approach
      video.muted = true; // Ensure it's muted
      video.playsInline = true; // Ensure inline playback
      
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log('VideoBackground: Video started playing successfully');
          })
          .catch((error) => {
            console.warn('VideoBackground: Autoplay failed:', error);
            // Try to play again after a short delay
            setTimeout(() => {
              video.play().catch((e) => {
                console.warn('VideoBackground: Retry play failed:', e);
              });
            }, 100);
          });
      }
    };

    const handleCanPlay = () => {
      console.log('VideoBackground: Video can play');
      setIsLoading(false);
      
      // Ensure video properties are set
      const video = videoRef.current;
      if (video) {
        video.muted = true;
        video.playsInline = true;
        
        // Try to play when video can play
        if (video.paused) {
          const playPromise = video.play();
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                console.log('VideoBackground: Video playing from canPlay event');
              })
              .catch((error) => {
                console.warn('VideoBackground: Play from canPlay failed:', error);
              });
          }
        }
      }
    };

    const handleLoadedMetadata = () => {
      console.log('VideoBackground: Video metadata loaded');
      const video = videoRef.current;
      if (video) {
        console.log('VideoBackground: Video duration:', video.duration);
        console.log('VideoBackground: Video ready state:', video.readyState);
      }
    };

    const handleCanPlayThrough = () => {
      console.log('VideoBackground: Video can play through');
      setIsLoading(false);
      
      // Another opportunity to start playback
      const video = videoRef.current;
      if (video && video.paused) {
        video.play().catch((error) => {
          console.warn('VideoBackground: Play from canPlayThrough failed:', error);
        });
      }
    };

    const handleError = () => {
      console.error('VideoBackground: Video failed to load from:', src);
      setIsLoading(false);
      setHasError(true);
    };

    const handlePlay = () => {
      console.log('VideoBackground: Video play event triggered');
      setIsLoading(false);
    };

    const handlePause = () => {
      console.log('VideoBackground: Video paused - attempting to resume');
      // If video gets paused, try to resume it
      const video = videoRef.current;
      if (video) {
        video.play().catch((error) => {
          console.warn('VideoBackground: Resume after pause failed:', error);
        });
      }
    };

    const handleLoadStart = () => {
      console.log('VideoBackground: Started loading video');
      setIsLoading(true);
      setHasError(false);
    };

    // Add event listeners
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('canplaythrough', handleCanPlayThrough);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    // Set initial properties
    video.muted = true;
    video.playsInline = true;
    video.autoplay = true;
    video.loop = true;

    // Start loading the video
    video.load();

    // Cleanup event listeners
    return () => {
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('canplaythrough', handleCanPlayThrough);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, [src]);

  // Periodic check to ensure video is playing
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const checkVideoStatus = () => {
      if (!video.paused) return; // Video is already playing
      if (video.readyState < 3) return; // Video not ready yet
      if (hasError) return; // Don't try if there's an error

      console.log('VideoBackground: Periodic check - video is paused, attempting to play');
      video.play().catch((error) => {
        console.warn('VideoBackground: Periodic play attempt failed:', error);
      });
    };

    // Check every 2 seconds if video should be playing
    const interval = setInterval(checkVideoStatus, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [hasError]);

  // Additional effect to handle user interaction for autoplay and intersection observer
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hasTriedUserInteraction = false;

    const handleUserInteraction = () => {
      if (hasTriedUserInteraction) return;
      hasTriedUserInteraction = true;
      
      console.log('VideoBackground: User interaction detected, attempting to play video');
      if (video.paused) {
        video.play().catch((error) => {
          console.warn('VideoBackground: Play after user interaction failed:', error);
        });
      }
    };

    // Set up intersection observer to play video when it comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('VideoBackground: Video is in viewport, attempting to play');
            if (video.paused) {
              video.play().catch((error) => {
                console.warn('VideoBackground: Play from intersection observer failed:', error);
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(video);

    // Listen for user interactions that might enable autoplay
    const events = ['click', 'touchstart', 'keydown', 'scroll', 'mouseover'];
    events.forEach(eventType => {
      document.addEventListener(eventType, handleUserInteraction, { once: true, passive: true });
    });

    return () => {
      observer.disconnect();
      events.forEach(eventType => {
        document.removeEventListener(eventType, handleUserInteraction);
      });
    };
  }, []);

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Loading state */}
      {isLoading && (
        <div className={`absolute inset-0 ${fallbackColor} flex items-center justify-center z-10`}>
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            <p className="text-white font-medium">Loading video...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && !isLoading && (
        <div className={`absolute inset-0 ${fallbackColor} flex items-center justify-center z-10`}>
          <div className="text-center">
            <p className="text-white font-medium">Failed to load video</p>
            <p className="text-white text-sm opacity-75">Using fallback background</p>
          </div>
        </div>
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${
          isLoading || hasError ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-500`}
        autoPlay
        /* loop */
        muted
        playsInline
        preload="auto"
        controls={false}
        disablePictureInPicture
        onContextMenu={(e) => e.preventDefault()}
        style={{
          pointerEvents: 'none', // Disable all user interactions
        }}
        // Additional attributes for better autoplay support
        data-autoplay="true"
        webkit-playsinline="true"
        x5-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        onLoadStart={() => console.log('Video onLoadStart event')}
        onLoadedData={() => console.log('Video onLoadedData event')}
        onCanPlay={() => console.log('Video onCanPlay event')}
        onPlay={() => console.log('Video onPlay event')}
        onPause={() => console.log('Video onPause event')}
        onError={(e) => console.error('Video onError event:', e)}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
    </div>
  );
}
