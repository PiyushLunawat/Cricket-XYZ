import React, { useState, useEffect, useRef } from 'react';

const ImageLoader = ({ src, alt }) => {
  const [progress, setProgress] = useState(25);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef();

  useEffect(() => {
    const targetProgress = isHovered ? 95 : 25;
    const animate = () => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + (targetProgress - prevProgress) * 0.1;
        if (Math.abs(newProgress - targetProgress) < 5) {
          return targetProgress;
        }
        animationRef.current = requestAnimationFrame(animate);
        return newProgress;
      });
    };
    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  return (
    <div
      className="relative w-[110px] h-[110px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
        <circle
          className="text-black"
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          cx="50"
          cy="50"
          r="46"
        />
        <circle
          className={`transition-colors duration-300 ${isHovered ? 'text-green-700' : 'text-green-500'}`}
          stroke="currentColor"
          strokeWidth="8"
          fill="none"
          cx="50"
          cy="50"
          r="46"
          strokeDasharray={`${progress} 100`}
          strokeDashoffset="25"
          strokeLinecap="round"
        />
      </svg>
      <img src={src} alt={alt} className="absolute inset-0 w-24 h-24 object-cover" />
    </div>
  );
};

export default ImageLoader;
