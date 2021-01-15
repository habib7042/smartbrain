import React from 'react'
import './App.css';
//Component
import Navigation from './components/Nav/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/Input/ImageLink'
import 'tachyons'

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Logo/>
      <ImageLink/>
      {/*<FaceRecognation/>*/}
    </div>
  );
}

export default App;
