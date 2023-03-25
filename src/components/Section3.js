import React from 'react';
import './Homescreen.css';
import image2 from '../assets/images/austronant.jpg';
function WatchEverywhere () {
    return(
    
    <div className='section-2' 
        
            style={{ backgroundColor: "black", 
            color: "white", 
            display: "flex",
            objectFit:"contain",
            alignItems:"center",
            justifyContent:"space-between",
            textAlign:"left", 
            position: "relative",
            paddingInlineStart:"64px",
            paddingTop:"48px",
            paddingBottom:"56px",  
            paddingLeft:"100px",
            paddingRight:"100px"
            }}>

        <img src={image2} className="astr"
              alt="austronant"
              style={{flex: "0 0 auto",
              paddingRight:"4PX",
              paddingTop:"12px",
              paddingBottom:"12px", }}/>
  

        <div style={{flex: "0 0 auto", paddingRight:"36px"}}>
            <h1 className ='section2-h1'>Download your shows to watch offline.</h1>
            <p className='section2-p'>Save your favorites easily and <br/>
            always have something to watch.</p>
        </div>
             
    </div>
    );
}

export default WatchEverywhere;