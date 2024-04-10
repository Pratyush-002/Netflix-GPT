import React from 'react'
import MainContainer from './MainContainer'
import { icon } from '../utils/constant'

const VideoTitle = ({ title , overview }) => {
  return (
    <div className='w-screen aspect-video sm:pt-[20%] pt-[15rem] pl-[4rem] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='md:text-6xl md:font-bold text-4xl'>{title}</h1>
        <p className='hidden py-6 sm:break-normal sm:text-lg h-[15px] w-0 sm:w-1/4 sm:pt-[2.5rem] pt-[20px] size-[15px]'>{overview}</p>
        <div className='pt-[1.7rem]'>
            <button className='border-black border rounded  bg-slate-100 p-2 sm:px-10 pl-[0.5rem] text-xl text-black font-bold hover:bg-slate-300'>▶️Play</button>
            <button className='mx-2 bg-slate-300 border-black border rounded p-2 sm:px-10 pl-[0.5rem] font-bold text-xl text-black hover:bg-slate-400'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle