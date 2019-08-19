import React from 'react';
import logo from './logo.svg';
import './App.css';
import ControlPanel from './component/ControlPanel';
import APage from './component/APage';
import BPage from './component/BPage';
import CPage from './component/CPage';

function App() {
  return (
    <div className="App">
      <ControlPanel></ControlPanel>
      <APage></APage>
      <BPage></BPage>
      <CPage></CPage>

    </div>
  );
}

export default App;
