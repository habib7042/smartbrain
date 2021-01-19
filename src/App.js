import React, {Component} from 'react'
import './App.css';
//Component
import Navigation from './components/Nav/Navigation';
import Logo from './components/Logo/Logo';
import ImageLink from './components/Input/ImageLink';
import Clarifai from "clarifai";
import Rank from './components/Rank/Rank';
import FaceRecognation from './components/Face/FaceRecognation';
import Style from './components/Particles/Style';
import SinIn from './components/Sinin/SinIn';
import 'tachyons';


const app = new Clarifai.App({
  apiKey: "64606872910f4667af7301b2892cb083",
});

class App extends Component {
    constructor(){
      super();
      this.state = {
        input : '',
        imageUrl : '',
        box : {},
        route : 'sinin'
      }
    }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol : clarifaiFace.left_col * width,
      topRow : clarifaiFace.top_row * height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow : height - (clarifaiFace.bottom_row * height)
    }
  }

  displayBox = (box) => {
    console.log(box);
    this.setState({box: box});
  }
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit =() => {
    this.setState({imageUrl: this.state.input})
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
      .then(response => this.displayBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err))
}
onRouteChange = () => {
  this.setState({route: 'home'})
}

  render(){
  return (
    <div className="App">
      <Style/>
      <Navigation/>
      {this.state.route === 'sinin'
      ? <SinIn onRouteChange = {this.onRouteChange}/>
      : <div>
      <Logo/>
      <Rank/>
      <ImageLink onInputChange ={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognation box ={this.state.box} imageUrl = {this.state.imageUrl}/>
      </div>}
    </div>
  );
  }
}

export default App;
