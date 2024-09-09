import React from 'react'
import Link from 'next/link'
const Card = ({ bot, link, desc }) => {
  return (
    <div className='p-5 aspect-video flex flex-col items-center justify-center gap-5 border-gray-800/60 shadow-white/30 shadow-sm border-2 rounded-md'>
      <h1 className='text-xl leading-[36px]'>{bot}</h1>
      <h2 className='text-lg text-white/50 leading-[24px]'>{desc}</h2>
    </div>
  )
}

export default Card
