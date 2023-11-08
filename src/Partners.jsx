import React from 'react'
import "./Partners.css"
import { partners } from './firstPageContent/storage'

const Partners = () => {
  return (
    <div style={{display:"flex",justifyContent:"center",backgroundColor:"white"}}>
    <div className='partners'>
        <div className='partnersLeft'>
            <p style={{fontSize:"1.1em",borderBottom:".1rem solid blueviolet", paddingBottom:".3rem",width:"30%"}}>OUR PARTNERS</p>
            <h1 style={{fontWeight:"900",fontSize:"2.5em"}}>Partnerships for value</h1>
            <p style={{fontSize:"1.2em",lineHeight:"1.5em",fontWeight:"light"}}>We, at Dlux Tech, know that good is just not enough.
             We deliver and partner with only the
             extraordinary. Our high-tiered partnerships
              with established technology platforms like 
              Adobe, Magento, Salesforce, OutSystems, 
              Drupal Acquia, AWS and such help us provide 
              the real value to our customers and get them
              maximise their return on investments.</p>
        </div>
        <div className='partnersRight'>
          {partners.map((partner,i)=>{
             return(
              <div key={i} style={{padding:"20px"}}>
                <div className="imageDiv" style={{backgroundColor:"white",display:"flex" ,justifyContent:"center",height:"100px",alignItems:"center"}}>
                <img src={partner.img} alt="" height="50%" width="50%"/>
                </div>
              </div>
             )
          })}
        </div>
    </div>
    </div>
  )
}

export default Partners