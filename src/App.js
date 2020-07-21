import React,{Component} from 'react';
import './App.css';
import {Home } from './components/Home';
import {CarManager } from './components/CarManager';
import {Car } from './components/Car';
import{Navigation} from './components/Navigation';
import {BrowserRouter , Route ,Switch }  from 'react-router-dom';
import LoginPage from'./LoginPage';


class App extends Component {



 render(){
    
  
  return (
    
    
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
        
           
          </header>
      
        <div>
        <Navigation/>
    
    <Switch>
          <Route path='/' exact={true} component={Home} />  
      <Route path='/' component={Home} exact />
      <Route path='/car' component={Car}     />
      <Route path='/carmanager' component={CarManager}     />
      <Route path='/loginpage' component={LoginPage}     />
      
 

    </Switch>
        </div>

        </div>


        

    </BrowserRouter>
    
    
  );

}

}



export default  App;
