'use client';
import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {  // Changed from pageYOffset to scrollY
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    toggleVisibility();
    
    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{ WebkitTapHighlightColor: 'transparent' }}
          className="fixed bottom-6 right-4 sm:bottom-8 sm:right-8 
                     bg-blue-900/80 hover:bg-blue-900 text-white 
                     w-12 h-12 sm:w-10 sm:h-10
                     flex items-center justify-center
                     rounded-full shadow-lg transition-all duration-300 
                     backdrop-blur-sm z-[9999] touch-manipulation 
                     active:scale-95 active:bg-blue-800"
          aria-label="Scroll to top"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}