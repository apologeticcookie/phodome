import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

import Camera from './Camera';
import Sky from './Sky';
import Image from './Image';
import Dome from './Dome';

const PhodomeScene = ({images, onImageClick}) => (
  <Scene>
    <Camera>
      <a-cursor
        animation__click="property: scale; startEvents: click; from: 0.1 0.1 0.1; to: 1 1 1; dur: 150">
      </a-cursor>
    </Camera>

    <Sky color="#000"/>

    <Dome images={images} onImageClick={onImageClick} />

    <Entity light={{type: 'ambient', color: '#888', intensity: 2}}/>

  </Scene>
);

PhodomeScene.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default PhodomeScene;
