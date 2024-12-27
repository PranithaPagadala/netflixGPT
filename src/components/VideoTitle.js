import React from 'react';
import play from '../images/play-button-arrowhead.png'
import info from '../images/info.png'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute text-white bg-gradient-to-r from-black pt-[20%] px-12'>
     <h1 className='text-6xl font-bold'>{title}</h1>
     <p className='py-6 text-lg w-1/4'>{overview}</p>
     <div className='flex'>
      
      <button  className='bg-white text-black
        px-16 py-3 text-xl bg-opacity-96 rounded-lg flex hover:bg-opacity-80
         '> <img className='h-6 w-6 mx-2 ml-1 ' alt='▶️' src={play}/>Play</button>
         
       
        <button className=' bg-gray-500 text-white py-3 px-10 text-xl bg-opacity-50 rounded-lg mx-2 flex hover:bg-opacity-80'> <img className='h-6 mx-2 w-6' alt='ℹ️' src={info}  /> More Info</button>
     </div>
    </div>
  )
}

export default VideoTitle;