import React from 'react'
import vid from "./Video.mp4"
import "./Video.css"

const Video = () => {
  return (
    <video autoPlay loop muted>
        <source src={vid} type="video/mp4"/>
    </video>
    
  )
}

export default Video