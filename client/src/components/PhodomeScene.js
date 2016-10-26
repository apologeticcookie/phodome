import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import axios from 'axios';

import Camera from './Camera';
import Text from './Text';
import Sky from './Sky';
import Image from './Image';
import Dome from './Dome';

class PhodomeScene extends React.Component {
  constructor() {
    super();
    this.state = {
      images: []
    };
  }

  componentDidMount() {
    // fetch from /api/images using axios
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

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position='-1 1 0'/>
        <Entity light={{type: 'directional', intensity: 1}} position='1 1 0'/>

      </Scene>
    );
  }
}

export default PhodomeScene;
