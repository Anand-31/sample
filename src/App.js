import React from 'react'; 
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homes from './pages/Home.js';
import Abouts from './pages/About.js';
import Services from './pages/Service.js';
import Portfolios from './pages/Portfolio.js';
import Contacts from './pages/Contact.js';



function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Homes}/>
        <Route path="/about" component={Abouts}/>
        <Route path="/services" component={Services}/>
        <Route path="/portfolio" component={Portfolios}/>
        <Route path="/contact" component={Contacts}/>
        
      </Switch>
    </Router>
  )
  
}


export default App;

