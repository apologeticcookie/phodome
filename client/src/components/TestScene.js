import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';

const TestScene = ({images}) => (
  <Scene >
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

    <Entity light="type: hemisphere; color: #999; groundColor: #666; intensity: 2"/>
    <Entity light="type: spot; angle: 45" look-at="#camera"/>
  </Scene>
);

TestScene.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default TestScene;
