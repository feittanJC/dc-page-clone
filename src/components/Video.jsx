import React from 'react'
import video from '../assets/videoDC.mp4'

function Video() {
  return (
    <section className='flex justify-center pb-3'>
        <video src={video}></video>
    </section>
  )
}

export default Video