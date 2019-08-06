import React from 'react';
import './App.css';
import Sample1 from './Sample1';
import Sample2 from './Sample2';


function App() {
  return (
    <div className="App">
      <Sample2></Sample2>
      <Sample2></Sample2>
      <Sample2></Sample2>

      <Sample1 title='A1'></Sample1>
      <Sample1 title='A2'></Sample1>
      <Sample1 title='A3'></Sample1>      
    </div>
  );
}

export default App;
