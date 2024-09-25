import React, { useState } from 'react';

const ImageLoader = ({ src, alt }) => {
  const [progress, setProgress] = useState(25); 

  return (
    <div className="relative w-[110px] h-[110px]" onMouseEnter={() => setProgress(95)} onMouseLeave={() => setProgress(25)} aria-label="Image with circular loader">
      <svg className="w-full h-full absolute" viewBox="0 0 100 100">
        <circle 
          className="text-black" 
          strokeWidth="8" 
          stroke="currentColor" 
          fill="transparent" 
          r="46" cx="50" cy="50"
        />
        <circle 
          className={`text-green-500 transition-all duration-100`}
          strokeWidth="8" 
          stroke="currentColor" 
          fill="transparent" 
          r="46" cx="50" cy="50" 
          strokeDasharray={`${progress} 100`}
          strokeDashoffset="25"
          strokeLinecap="square"
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <img src={src} alt={alt} className="w-24 h-24 rounded-full object-cover"/>
      </div>
    </div>
  );
};

export default ImageLoader;
