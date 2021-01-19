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
import SignUp from './components/SignUp/SignUp';
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
        route : 'sinin',
        isSignedIn : false,
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
onRouteChange = (route) => {
  if(route ==='signout'){
    this.setState({isSignedIn: false})
  }else if (route ==='home'){
    this.setState({isSignedIn: true})
  }
  this.setState({route: route})
}

  render(){
   const {isSignedIn, box, imageUrl, route} =this.state;
  return (
    <div className="App">
      <Style/>
      <Navigation isSignedIn={isSignedIn} onRoutChange={this.onRouteChange}/>
      {route === 'home'
      ? <div>
          <Logo/>
          <Rank/>
          <ImageLink onInputChange ={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
          <FaceRecognation box ={box} imageUrl = {imageUrl}/>
        </div>
        : (
        this.state.route ==='sinin'
        ? <SinIn onRouteChange = {this.onRouteChange}/>
        : <SignUp onRouteChange = {this.onRouteChange}/>
        )
      }
    </div>
  );
  }
}

export default App;
