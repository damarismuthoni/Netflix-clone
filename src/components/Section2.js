import React from 'react';
import './Homescreen.css';
import image1 from '../assets/images/television.jpg';
function EnjoyOnTV () {
    return(
    
    <div className='section-2' 
        
            style={{ backgroundColor: "black", 
            color: "white", 
            display: "flex",
            alignItems:"center",
            justifyContent:"space-between",
            textAlign:"left",
            objectFit:"contain", 
            position: "relative",
            paddingInlineStart:"64px",
            paddingTop:"48px",
            paddingBottom:"56px",  
            paddingLeft:"100px",
            paddingRight:"180px"
            }}>
            
        <div style={{flex: "0 0 auto"}}>
            <h1 className ='section2-h1'>Enjoy on your TV. </h1>
            <p className='section2-p'>Watch on Smart TVs, Playstation, Xbox,<br/>
             Chromecast, Apple TV, <br/>
             Blu-ray players, and more.</p>
        </div>
        <img src={image1} className="tv"
              alt="tv"
              style={{flex: "0 0 auto",
              paddingRight:"4PX",
              height:"300px",
              width:"300px",
              paddingTop:"12px",
              paddingBottom:"12px", }}/>
    </div>
    );
}

export default EnjoyOnTV;