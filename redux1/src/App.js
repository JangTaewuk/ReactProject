import React from 'react';
import './App.css';
import CountReduxDisplay from './ex2/CountReduxDisplay';
import CountReduxButton from './ex2/CountReduxButton';

function App() {
  return (
    <div className="App">
      <div>
        <CountReduxDisplay></CountReduxDisplay>
        <CountReduxButton></CountReduxButton>
      </div>
    </div>
  );
}

export default App;
