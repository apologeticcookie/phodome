import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import 'babel-polyfill';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Text from './components/Text';
import Sky from './components/Sky';

// <Image src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/336999/me.jpg" position='-1.75 1 -3'></Image>

class VRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  render () {
    return (
      <Scene>
        <Camera>
          <a-cursor
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150"
>
          </a-cursor>
        </Camera>

        <Sky color="#111"/>

        <Entity
          geometry={{
            primitive: 'box',
            width: 0.8,
            height: 0.8,
            depth: 0
          }}
          position='0 -0.5 -3'
          material={{
            src: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/336999/me.jpg)'
          }}
        />

        <Text
          text='Welcome to Phodome!'
          color='#DADADA'
          position='-1.75 1 -3'/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

      </Scene>
    );
  }
}

// The only purpose of this target variable is so that when running the client
// tests inside Chrome with Karma, where OUR index.html is not loaded, React
// won't try to render to a nonexistent DOM element .scene-container and will
// instead just render on the document body (which is guaranteed to exist on
// any given page, I think)
let target = document.querySelector('.scene-container');

if (!target) {
  target = document.querySelector('body');
}

ReactDOM.render(<VRScene/>, target);

module.exports.VRScene = VRScene;
