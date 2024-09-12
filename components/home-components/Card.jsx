import React, { useRef, useEffect } from 'react';
import VanillaTilt from 'vanilla-tilt';

const Card = ({ bot, link, desc }) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tiltRef.current, {
      max: 10,
      speed: 400,
      glare: true,
      'max-glare': 0.5,
    });
  }, []);

  return (
    <div 
      ref={tiltRef}
      className='p-10 md:p-5 aspect-video flex flex-col items-center justify-center gap-5 border-gray-800/60 shadow-white/30 shadow-sm border-2 rounded-md transform transition-all duration-300 ease-out hover:shadow-lg'
    >
      <style jsx>{`
        div {
          transition: all 0.5s ease;
          transform-style: preserve-3d;
        }
        div:hover {
          background-image: linear-gradient(
            300deg,
            hsl(129deg 90% 12%) 0%,
            hsl(120deg 100% 9%) 10%,
            hsl(120deg 100% 8%) 20%,
            hsl(120deg 100% 6%) 30%,
            hsl(120deg 100% 5%) 40%,
            hsl(0deg 0% 0%) 100%
          );
        }
      `}</style>
      <h1 className='text-xl md:text-2xl md:leading-[36px]'>{bot}</h1>
      <h2 className='text-md md:text-lg text-white/50 md:leading-[24px]'>{desc}</h2>
    </div>
  )
}

export default Card;
