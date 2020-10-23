import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Navbar from './components/navbar/nav';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage';
import ContactUs from './components/ContactUs/ConactUs';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Container>
      <Navbar/>
      <Switch>
      <Route path='/' exact component={Homepage}/>
      <Route path='/about' component={About}/>
      <Route path='/contactus' component={ContactUs}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      </Switch>
    </Container>
    </Router>
  );
}

export default App;