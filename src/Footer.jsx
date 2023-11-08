import React from 'react'
import map from "./world map.png"
import "./Footer.css"
import { FaLinkedin,FaFacebook,FaYoutube} from 'react-icons/fa';
import {FaSquareXTwitter} from 'react-icons/fa6';

const Footer = () => {
  return (
    <div>
        <div className="map-row">
            <div className="map-row-left">
                <div className='icons-row'>
                    <div className='icons'>
                    <div className='icon'><FaLinkedin/></div>
                    <div className='icon'><FaFacebook/></div>
                    <div className='icon'><FaSquareXTwitter/></div>
                    <div className='icon'><FaYoutube/></div>
                    </div>
                    <div className='mailBox'><p>sales@dluxtech.com</p></div>
                    <div className='number'><p>(02)88606422</p></div>
                </div>
                <div className='map-row-left-list'>
                    <ul>
                        <li style={{fontWeight:"bolder"}}>SERVICES</li>
                        <li>Digital Transformation</li>
                        <li>Data Consulting</li>
                        <li>Digital Consulting</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight:"bolder"}}>INDUSTRY</li>
                        <li>Retail & eCommerce</li>
                        <li>Financial Services</li>
                        <li>Healthcare</li>
                    </ul>
                    <ul>
                        <li style={{fontWeight:"bolder"}}>COMPANY</li>
                        <li>Portfolio</li>
                        <li>Career</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            <div className="map-row-right">
                <img src={map} alt="" width="70%"/>
                <div className='dotIndia'>
                    <p>India</p>
                    <span className='dot'></span>
                </div>
                <div className='dotSydney'>
                    <p>Sydney</p>
                    <span className='dot'></span>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer