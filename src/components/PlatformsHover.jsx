import React from 'react'
import "./PlatformsHover.css"
import {FaGripLinesVertical,FaLongArrowAltRight} from 'react-icons/fa';


const PlatformsHover = () => {
  return (
    <div className='platform'>
      <div className='platformLeft'><FaGripLinesVertical style={{color:"blueviolet",height:"11%",display:""}}/>
        Platforms <br/>
        <br />
        Have a look at the technology platforms we excel at. <span><br /></span>
        <span style={{color:"rgb(138,43,226)"}}><a href=" " style={{textDecorationLine:"none",fontSize:"16px"}}>VIEW  ALL  PLATFORMS </a>
        <FaLongArrowAltRight style={{color:"blueviolet"}}/></span>
      </div>
      <div style={{width:"3%"}}></div>
      <div className='platformRight'>
        <div>
          <ul>
            <li style={{display:"flex",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.1)",height:"30px",width:"200px"}}>Abobe <img src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png" alt="Adobe" width="100px"/>
            </li>
            <li>Adobe Workfront</li>
            <li>Adobe Experience Manager</li>
            <li>Adobe Marketo</li>
            <li>Adobe Analytics</li>
          </ul>
        </div>
        <div>
        <ul>
            <li style={{display:"flex",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.1)",height:"30px",width:"220px"}}>Salesforce <img src="https://www.seraphscience.com/wp-content/uploads/2018/06/logo-salesforce-png-454.png" alt="Adobe" width="60px"/>
            </li>
            <li>Salesforce Marketing Cloud</li>
            <li>Salesforce Padrot</li>
            <li>Salesforce Analytics</li>
            <li>Sales Cloud-CPQ</li>
          </ul>
        </div>
        <div>
        <ul>
            <li style={{display:"flex",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.1)",width:"200px"}}>DataIKU <img src="https://upload.wikimedia.org/wikipedia/en/9/91/Dataiku_logo.png" alt="Adobe" width="65px"/>
            </li>
            <li>Data Science</li>
        </ul>
        </div>
        <div>
        <ul>
            <li style={{display:"flex",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.1)",height:"30px",width:"200px"}}>aprimo<img src="https://upload.wikimedia.org/wikipedia/en/3/3b/Aprimo_logo.png" alt="Adobe" width="45px"/>
            </li>
            <li>aprimo</li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default PlatformsHover