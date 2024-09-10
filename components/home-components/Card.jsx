import React from 'react'
import Link from 'next/link'
const Card = ({ bot, link, desc }) => {
  return (
    <div className='p-10 md:p-5 aspect-video flex flex-col items-center justify-center gap-5 border-gray-800/60 shadow-white/30 shadow-sm border-2 rounded-md transform transition-all duration-300 ease-out hover:shadow-lg'>
      <style jsx>{`
    div {
      transition: all 0.5s ease;
      transform-style: preserve-3d;
    }
    div:hover {
      transform: perspective(1000px) rotateX(5deg) rotateY(-10deg);
      background-image: linear-gradient(
        300deg,
        hsl(129deg 90% 12%) 0%,
        hsl(120deg 100% 9%) -1%,
        hsl(120deg 100% 8%) -2%,
        hsl(120deg 100% 6%) -1%,
        hsl(120deg 100% 5%) 3%,
        hsl(0deg 0% 0%) 40%
      );
    }
  `}</style>
      <h1 className='text-xl md:text-2xl md:leading-[36px]'>{bot}</h1>
      <h2 className='text-md md:text-lg text-white/50 md:leading-[24px]'>{desc}</h2>
    </div>
  )
}

export default Card
