import React, { useState } from 'react'
import "./Content.css"
import {data,offerings} from './storage'
import {FaArrowRightLong} from "react-icons/fa6"

const Content = ({colorize}) => {
  const [hover,setHover]=useState(false);
  const[platformHover,setPlatformHover]=useState(false);
  function imageHover(){
    setHover(true);
  }
  function imageHoverf(){
    setHover(false);
  }
  function plimageHover(){
    setPlatformHover(true);
  }

  function plimageHoverf(){
    setPlatformHover(false);
  }
  return (
    <div className='mainContent'>
      <div className='centerText'>
        <p>Reflect your thoughts<span><br/></span>with us!</p>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
        {/* Who We Are */}
        <div className='whoWeAre'>
          <div style={{display:"flex",justifyContent:"center"}}>
          <p style={{fontSize:"1.1em",borderBottom:".14rem solid",borderColor:colorize, marginBottom:"0px",width:"15%"}}>WHO WE ARE</p>
          </div>
          <h1 style={{color:"rgba(0,0,0,0.8)"}}>Client-Centric to the bone</h1>
          <p>DLUX is a high growth Digital business that aims to bring the best to our customers, backed by our talented team, technology, and data. To achieve our customer 1st strategy, we have combined the Digital Marketing Technology and Services businesses to transform the customer experience. </p>
        </div>
        <button style={{backgroundColor:colorize}}>ABOUT US</button>
        {/* Our Offerings */}
        <div className='ourOfferings'>
        <div style={{display:"flex",justifyContent:"center"}}>
          <p style={{fontSize:"1.1em",borderBottom:".14rem solid",borderColor:colorize,marginBottom:"0px",width:"12%"}}>OUR  OFFERINGS</p>
        </div>
          <h1>Digital Transformation, Data Consulting & Digital Consulting</h1>
          <p>Digital consulting partner driving your digital initiatives with our software development and IT Services.</p>
        </div>
        <div className='ourOfferingsDivs'>  
          {offerings.map((card,i)=>{
            return(
            <div key={i} onMouseOver={imageHover} onMouseLeave={imageHoverf} className='ourOfferingsDiv'>
            <img src={card.img} alt="" className="image"/>
            <div  className="overlay">
              <h1>{card.title}</h1>
              {hover?<p style={{fontSize:"1.5em"}}>{card.conent}</p>:""}
              </div>
            </div>
            )
          })}
        </div>
        <div>
          <h1  style={{fontFamily:"arial",fontSize:"2.5em",color:"rgba(0,0,0,0.8)"}}>Industry leading digital platforms </h1>
          <p style={{textAlign:"center", fontFamily:"arial"}}>Curating value for our clients with our strong network of platform partnerships</p>
        </div>
      </div>
      <br />
      <div style={{display:"flex",justifyContent:"center",fontFamily:"arial"}}>
      <div className='digitalPlatforms'>
        {data.map((item,i)=>{
          return(
            <div key={i} onMouseOver={plimageHover} onMouseLeave={plimageHoverf} className="digitalPlatforms-indi">
            <img src={item.img} alt="" width="50%" height="30%"/>
            <p>{item.content}</p>
            <div className='arrow'>
              {platformHover?<FaArrowRightLong style={{color:colorize,fontSize:"30px"}} className='arr'/>:""}
            </div>
          </div>
          )
        })}
      </div>
      </div>
      <br />
      <br />
      <br />
    </div> 
  )
}

export default Content