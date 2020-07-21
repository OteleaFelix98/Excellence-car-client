import React,{Component} from 'react';
import './App.css';
import {Home } from './components/Home';

import fire from './config/Fire';
import Login from './components/LoginRegister';


class LoginPage extends Component {



  constructor(){
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount(){
    this.authListener();
  }

  authListener(){
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    });
  }


 render(){
    
  
  return (
    
    

          <div >
          {this.state.user ? (<Home />) : (<Login />)}
        </div>
           
      
      
     


        

 
    
    
  );

}

}



export default  LoginPage;
