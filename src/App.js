import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Navbar from './components/navbar/nav';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';
import About from './components/About/About';
import Homepage from './components/Homepage/Homepage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {
  return (
    <Router>
    <Container>
     
      <Navbar/>
      <Switch>
      <Route path='/' component={Homepage}/>
      <Route path='/about' component={About}/>

      </Switch>
    
      <Hero/>
      <Button>This is a Button </Button>
      <Footer/>
    </Container>

    </Router>
  );
}

export default App;
