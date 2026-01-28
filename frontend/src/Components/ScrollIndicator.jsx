import React, { useEffect, useState } from 'react';

function ScrollIndicator() {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const updateScrollWidth = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', updateScrollWidth);
    return () => window.removeEventListener('scroll', updateScrollWidth);
  }, []);

  return (
   <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
  <div
    className="h-full bg-gradient-to-r from-indigo-500 to-blue-500 transition-all duration-200"
    style={{ width: `${scrollWidth}%` }}
  ></div>
</div>

  );
}

export default ScrollIndicator;
