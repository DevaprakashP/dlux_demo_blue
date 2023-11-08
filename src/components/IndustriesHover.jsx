import React from 'react'
import "./IndustriesHover.css"
import {FaGripLinesVertical,FaLongArrowAltRight} from 'react-icons/fa';

const IndustriesHover = () => {
    return (
        <div className='platform'>
          <div className='platformLeft'><FaGripLinesVertical style={{color:"blueviolet",height:"11%"}}/>
            Industries <span><br /></span>Check out the industries we provide our services for.<span><br /></span>
            <span><a href=" " style={{textDecorationLine:"none",fontSize:"16px"}}>VIEW  ALL  INDUSTRIES </a>
            <FaLongArrowAltRight style={{color:"blueviolet"}}/></span>
          </div>
          <div style={{width:"8%"}}></div>
          <div className='platformRight'>
            <div>
              <ul>
                <li><img src="https://www.ranosys.com/content/dam/ranosys-website/navigation/ind1.jpg" alt="" width="100%"/></li>
                <li>Oil & Gas</li>
                <li>Telecom</li>
              </ul>
            </div>
            <div>
            <ul>
                <li><img src="https://www.ranosys.com/content/dam/ranosys-website/navigation/ind2.jpg" alt="" width="100%"/></li>
                <li>Media & Entertainment</li>
                <li>Fashion & Apperals</li>
              </ul>
            </div>
            <div>
            <ul>
              <li><img src="https://www.ranosys.com/content/dam/ranosys-website/navigation/ind3.jpg" alt="" width="100%"/></li>
               <li>Hospitality & Leisure</li> 
               <li>Food & Bevarages</li>
            </ul>
            </div>
            <div>
            <ul>
                <li><img src="https://www.ranosys.com/content/dam/ranosys-website/navigation/ind4.jpg" alt="" width="100%"/></li>
                <li>Real Estate & Construction</li>
                <li>Logistcs & Transports</li>
            </ul>
            </div>
          </div>
        </div>
      )
    }

export default IndustriesHover