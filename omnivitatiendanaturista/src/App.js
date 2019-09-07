import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainHeader from './components/MainHeader';
import Content from './components/Content';
import ProductsInfo from './components/ProductsInfo';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <MainHeader />
        <Content />
        <ProductsInfo />
        {/*<Contact />
        <Footer /> */}
      </header>
    </div>
  );
}

export default App;
