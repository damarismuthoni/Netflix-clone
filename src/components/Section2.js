import React from 'react';
import './Section2.css';
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
            paddingInlineStart:"64px",
            paddingTop:"48px",
            paddingBottom:"56px",  
            paddingLeft:"200px",
            paddingRight:"150px"
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
              height:"400px",
              width:"400px",
              paddingTop:"12px",
              paddingBottom:"12px", }}/>
    </div>
    );
}

export default EnjoyOnTV;