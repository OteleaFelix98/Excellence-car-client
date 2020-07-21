import React , {Component} from 'react';
import {NavLink} from "react-router-dom";
import {Navbar} from 'react-bootstrap';


export class Navigation extends Component {
render(){
return(
    <div>
   
  
  <Navbar bg="dark">
    <Navbar.Brand href="#home">
    <img
        src="images/logo.png"
        width="20%"
        height="20%"
        className="d-inline-block align-top"
        alt="image"
      />
       <NavLink className="d-inline p-2 bg-dark-text-white"
       
       to ="/">Home</NavLink>
     
        <NavLink  className="d-inline p-2 bg-dark-text-white" 
       to ="/car">Check Your car</NavLink>
         <NavLink className="d-inline p-2 bg-dark-text-white"
       to ="/carmanager">Car management</NavLink>
        <NavLink className="d-inline p-2 bg-dark-text-white"
       to ="/loginpage">Login & Register</NavLink>
      
        
    
    </Navbar.Brand>

   
  </Navbar>

  </div>
)
}
}
