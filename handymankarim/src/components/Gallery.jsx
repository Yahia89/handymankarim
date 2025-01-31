import { useState, useEffect } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Gallery.css"; 

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = 0;
  let timeoutId = null; // Store timeout reference

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        clearTimeout(timeoutId); // Clear previous timeout
        timeoutId = setTimeout(() => setIsVisible(false), 500); // Delay hiding
      } else {
        setIsVisible(true); // Show immediately when scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId); // Cleanup on unmount
    };
  }, []);

  const images = [
    // Add your image URLs here
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%202.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%203.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%204.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%205.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%206.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%207.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17%208.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-17.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%2010.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%2011.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%2012.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%202.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%203.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%204.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%205.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%206.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%207.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%208.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-18%209.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-19%202.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-19%203.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-19.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-45%202.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-45%203.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-50-45.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-52-36.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-55-45.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-55-51.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-56-01%202.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-56-01%203.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-56-01%204.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-56-01%205.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-56-01.jpg?raw=true",
    "https://github.com/Yahia89/handymankarim/blob/master/handymankarim/src/assets/PHOTO-2024-08-06-18-56-44.jpg?raw=true",
  ];

  return (
    <div className="gallery-container">
      <button 
        className={`gallery-toggle-btn ${!isVisible ? "hidden" : ""}`}
        onClick={() => setShowGallery(!showGallery)} // Add this onClick handler
      >
        {showGallery ? 'Hide Gallery' : 'Show Gallery'} {/* Add dynamic text */}
      </button>
      <div className={`gallery ${showGallery ? "gallery-show" : ""}`}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
            style={{ cursor: "pointer" }}
          />
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={images.map((src) => ({ src }))}
      />
    </div>
  );
};

export default Gallery;