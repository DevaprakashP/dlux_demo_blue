import React from 'react'
import "./ServicesHover.css"
import {FaGripLinesVertical,FaLongArrowAltRight} from 'react-icons/fa';
import con from "../asset/DataConsulting(Lanscape)-m.png"
import trans from "../asset/digi-(Landscape)-m.png"
import last from "../asset/Last(Landscape)-m.png"

const ServicesHover = () => {
    return (
        <div className='services'>
          <div className='platformLeft'><FaGripLinesVertical style={{color:"blueviolet",height:"11%"}}/>
            Services <span><br /></span>Explore our customer-centric and cutting-edge services.<span><br /></span>
            <span><a href=" " style={{textDecorationLine:"none",fontSize:"16px"}}>VIEW  ALL  SERVICES </a>
            <FaLongArrowAltRight style={{color:"blueviolet"}}/></span>
          </div>
          <div style={{width:"6%"}}></div>
          <div className='platformRight'>
            <div>
              <img  style={{borderRadius:"10px"}} src={con} alt="" width="90%" height="80%" />
            </div>
            <div>
            <img  style={{borderRadius:"10px"}} src={trans} alt="" width="90%" height="80%"/>
            </div>
            <div>
           <img  style={{borderRadius:"10px"}} src={last} alt="" width="90%" height="80%"/>
            </div>
          </div>
        </div>
      )
    }

export default ServicesHover