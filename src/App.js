import React from 'react'
import './App.css';
//Component
import Navigation from './components/Nav/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/Input/ImageLink';
import Rank from './components/Rank/Rank';
import Style from './components/Particles/Style';
import 'tachyons';


function App() {
  return (
    <div className="App">
      <Style/>
      <Navigation/>
      <Logo/>
      <Rank/>
      <ImageLink/>
      {/*<FaceRecognation/>*/}
    </div>
  );
}

export default App;
