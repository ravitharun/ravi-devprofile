import React from 'react';

function Marquee({ children, className = '' }) {
  return (
    <div className="overflow-hidden whitespace-nowrap w-full bg-gray-100 py-2">
      <div className={`inline-block animate-marquee ${className}`}>
        {children}
      </div>
    </div>
  );
}

export default Marquee;
