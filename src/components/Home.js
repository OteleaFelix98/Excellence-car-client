import React,{Component} from 'react';
import fire from '../config/Fire';


  export class Home extends Component
{
  
  logout = () => {
    fire.auth().signOut();
}
    render() {
    return(
    
    
    <div className="container-fluid">
        <h3> Welcome to Excellence car!
             </h3>
             <button onClick={this.logout}>Logout</button>
             <img
        src="images/homebackground.png"
        width="100%"
        height="100%"
        className="d-inline-block align-top"
        alt="image"
      />

       
    </div>

    )
    }
}
 