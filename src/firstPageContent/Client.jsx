import React from 'react'
import "./Client.css"
import { clients } from './storage'

const Client = ({colorize}) => {

  return (
    <div className='client'>
        <div className='clients'>
            <div>
                <div style={{display:"flex",justifyContent:"center"}}>
                <p style={{fontSize:"1.1em",borderBottom:".1rem solid",borderColor:colorize, paddingBottom:".3rem",width:"10%"}}>OUR CLIENTS</p>
                </div>
                <p style={{fontWeight:"900",fontSize:"3em",margin:"0"}}>Trusted by leading brands including Fortune 500</p>
                <p style={{fontSize:"1.1em"}}>We are proud to work with some of the most renowned brands in the world.</p>
            </div>
            <div className='clientsList'>
                {clients.map((card,i)=>{
                    return(
                        <div key={i} style={{backgroundColor:"white"}}>
                            <div style={{padding:"6% 14%"}}>
                                <img src={card.img} alt="" height="100%" width="100%" />
                            </div>
                        </div>
                    )
                })}
            </div>
            <br />
            <br />
            <br />
        </div>
    </div>
  )
}

export default Client