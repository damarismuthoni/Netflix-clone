import { render } from "@testing-library/react";
import React, {Component} from "react";
import './Homescreen.css';
import Button from 'react-bootstrap/Button';
import  Form  from 'react-bootstrap/Form';

function Login ()  {
    
    return(
    <div className="welcome">

        {/* <div className="login-btn"> 
        <Button variant="danger">LOGIN</Button>{' '}
        </div> */}

        <div className="intro">
        <h1>Unlimited movies, TV shows, and more.<br/> <br/></h1>
        <p>Watch anywhere. Cancel anytime.Ready to watch? <br/>
            Enter your email to create or restart your membership.<br/></p>
        </div>

        
        <div className="submit-email" style={{ display: "flex", alignItems: "center" }}>
         <form>
            <input id = 'input-email' type="email" placeholder="Email Address" name="email" style={{ marginRight: "10px", textAlign: "center" }} />
            <button id="get-started-btn" type="submit" style={{ backgroundColor: "#dc3545", color: "white"}} >GET STARTED</button>
        </form>
        </div>

</div>
    );
}

export default Login;