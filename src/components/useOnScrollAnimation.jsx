import React, { useEffect, useState } from 'react';

const useOnScrollAnimation = () => {
    const [isAnimationTriggered, setAnimationTriggered] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
  
        // Adjust this threshold as needed
        const triggerPoint = windowHeight * 0.3;
  
        if (scrollPosition > triggerPoint) {
          setAnimationTriggered(true);
        }
      };
  
      // Attach the scroll event listener
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener when the component unmounts
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return isAnimationTriggered;
  };

export default useOnScrollAnimation