import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

import Camera from './Camera';
import Text from './Text';
import Sky from './Sky';
import Image from './Image';
import Dome from './Dome';

const testImages = [
  'https://s3-us-west-2.amazonaws.com/s.cdpn.io/336999/me.jpg'
];

class PhodomeScene extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'red',
      images: testImages
    };
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
            animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
          </a-cursor>
        </Camera>

        <Sky color="#000"/>

        <Dome images={this.state.images} />

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

export default PhodomeScene;
