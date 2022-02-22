import React, { Component } from 'react';
import Particles from "react-tsparticles";
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
/*import Clarifai from "clarifai";*/
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import 'tachyons';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    };
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
  }
  render () {
    const particlesInit = (main) => {
      console.log(main);
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };

  return (
    <div className="App">
      <Navigation />
      <Particles className='particles'
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 24,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 200,
              duration: 10,
              opacity: 0.8,
              size: 10,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 20,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 1,
          },
        },
        detectRetina: true,
      }}
    />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition imageUrl={this.state.imageUrl}/>
    </div>
  );
  }
}

export default App;
