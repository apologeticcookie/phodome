import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

import Dummy from '../../../client/assets/dummy-data/dummy';
import ArtMapper from './ArtMapper';
    
const TestScene = ({images}) => (
  <Scene fog="type: linear; color: #AAA" >
    <Entity id="camera" camera="" look-controls="" wasd-controls="" />
    <Entity material="color: #666;" geometry="primitive: sphere; radius: 100" scale="1 1 -1"/>

    <Entity geometry="primitive: box; width: 2, height: 1, depth: 3"
            position="0 0 -4" material="color: #666; metalness: 0.5" />

    <Entity
      geometry="primitive: plane; height: 500; width: 500"
      position="0 -0.5 0"
      rotation="-90 0 0"
      material="color: #666; metalness: 0.5"
    />
    
    <Entity
      geometry="primitive: plane; height: 50; width: 500"
      position="0 0 -9"
      rotation="0 0 0"
      material="side: double; color: #666; metalness: 0.5"
    />

    <Entity
      geometry="primitive: plane; height: 50; width: 500"
      position="0 0 9"
      rotation="0 0 0"
      material="side: double; color: #666; metalness: 0.5"
    />    
    <Entity 
    light="type: spot; angle: 100; color: red"
    intensity="8"
    look-at="" 
    rotation="180 90 0" 
    position="72 4 2"/>

    <Entity light="type: hemisphere; color: #999; groundColor: #666; intensity: 2"/>
    
    <ArtMapper images={ images } />
  </Scene>
);

TestScene.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default TestScene;
    // <Entity geometry="primitive: box; height: 3; width: 3; depth: 1" 
            // material={{src: `url(${images[0]})`}}
            // position="0 3 9"/>

    // <Entity geometry="primitive: box; height: 3; width: 3; depth: 1" 
            // material={{src: `url(${images[1]})`}}
            // position="6 3 9"/>

    // <Entity geometry="primitive: box; height: 3; width: 3; depth: 1" 
            // material={{src: `url(${images[2]})`}}
            // position="12 3 9"/>

    // <Entity geometry="primitive: box; height: 3; width: 3; depth: 1" 
            // material={{src: `url(${images[0]})`}}
            // position="0 3 -9"/>

    // <Entity geometry="primitive: box; height: 3; width: 3; depth: 1" 
            // material={{src: `url(${images[1]})`}}
            // position="6 3 -9"/>

    // <Entity geometry="primitive: box; height: 3; width: 3; depth: 1" 
            // material={{src: `url(${images[2]})`}}
            // position="12 3 -9"/>
