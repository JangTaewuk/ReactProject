import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import TextBox from './components/TextBox';
import ProductList from './components/ProductList';
import Effect1 from './components/Effect1';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <TextBox></TextBox>
      <ProductList></ProductList>
      <Effect1></Effect1>
    </div>
  );
}

export default App;
