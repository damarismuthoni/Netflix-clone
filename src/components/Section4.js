import React from 'react';
import './Section2.css';
import image3 from '../assets/images/kid.jpg';
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
            <h1 className ='section2-h1'>Create profiles for kids.</h1>
            <p className='section2-p'> Send kids on adventures with<br/>
             their favorite characters in <br/>
              a space made just for them</p>
        </div>
            
        <img src={image3} className="fam"
              alt="profiles"
              style={{flex: "0 0 auto",
              paddingRight:"4PX",
              paddingTop:"12px",
              paddingBottom:"12px", }}/>

    </div>
    );
}

export default EnjoyOnTV;