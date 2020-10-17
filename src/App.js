import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Navbar from './components/navbar/nav';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer'


function App() {
  return (
    
    <Container>
      <Navbar/>
      <Hero/>
      <Button>This is a Button </Button>
      <Footer/>
    </Container>
    
   
  );
}

export default App;
