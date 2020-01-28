import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Content from './components/Content';
import ProductsInfo from './components/ProductsInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Carousel />
        <Content />
        <ProductsInfo />
        <Contact />
        <Footer />
      </header>
    </div>
  );
}

export default App;


