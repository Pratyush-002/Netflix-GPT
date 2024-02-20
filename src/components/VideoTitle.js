import React from 'react'
import MainContainer from './MainContainer'
import { icon } from '../utils/constant'

const VideoTitle = ({ title , overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] pl-[4rem] px-12 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='border-black border rounded  bg-slate-100 p-2 px-10 text-xl text-black font-bold hover:bg-slate-300'>▶️Play</button>
            <button className='mx-2 bg-slate-300 border-black border rounded p-2 px-10 font-bold text-xl text-black hover:bg-slate-400'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle