import React, { useState } from 'react'
import "./Head.css"
import { FaCaretDown } from 'react-icons/fa';
import PlatformsHover from './components/PlatformsHover';
import IndustriesHover from './components/IndustriesHover';
import ServicesHover from './components/ServicesHover';

const Head = () => {
    const[bgClr,setBgClr] =useState(false)
    const changeBg=()=>{
        if(window.scrollY>=10){
            setBgClr(true);
        }else{
            setBgClr(false);
        }
    }
    function handleplatformHover(e){
       setPlHover(true);
    }
    function handleplatformHoverf(e){
        setPlHover(false);
    }
    function handleindustryHover(e){
        setInHover(true);
     }
     function handleIndustryHoverf(e){
         setInHover(false);
     }
     function handleservicesHover(e){
        setSrHover(true);
     }
     function handleservicesHoverf(e){
         setSrHover(false);
     }
    window.addEventListener('scroll',changeBg)
    const [plhover,setPlHover]=useState(false);
    const [inhover,setInHover]=useState(false);
    const [srhover,setSrHover]=useState(false);
  return (
    <div className={bgClr?"summ ul li headMain headMain-bg head  head h1":"headMainDown headMainDown:hover ul li"}>
        <div className="head" style={{padding:"10px"}}>
            <h1 style={{margin:"0%",cursor:"pointer"}}>DLUX</h1>
            {/* <img src={logo} alt="" width="10%" /> */}
        </div>
        <div>
        <div className='navbar'>
            <ul>
                <li onMouseOver={handleservicesHover} onMouseLeave={handleservicesHoverf}>Services <FaCaretDown/>{srhover?<ServicesHover/>:""}</li>
                <li onMouseOver={handleplatformHover} onMouseLeave={handleplatformHoverf}>Platforms <FaCaretDown/>{plhover?<PlatformsHover/>:""}</li>
                <li onMouseOver={handleindustryHover} onMouseLeave={handleIndustryHoverf}>Industries <FaCaretDown/>{inhover?<IndustriesHover/>:""}</li>
                <li>About Us</li>
                <li>Careers</li>
            </ul>
        </div>
        </div>
        <div style={{padding:"10px",margin:"0%"}}>
            <button style={{padding:"10px"}}>Contact Us</button>
        </div>
    </div>
  )
}

export default Head