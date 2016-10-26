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
    axios.get('/api/images')
      .then(response => (
        response.data.files
      ))
      .then( (images) => {
        let imageUrls = [];
        images.forEach(imageObj => {
          imageUrls.push(imageObj.url);
        });
        this.setState({
          images: imageUrls
        });
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

        <Entity light={{type: 'ambient', color: '#888', intensity: 2}}/>

      </Scene>
    );
  }
}

export default PhodomeScene;
