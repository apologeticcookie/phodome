import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import Ceiling from './Ceiling';

const TestScene = ({images}) => (
  <Scene >
    <Entity id="camera" camera="" look-controls="" wasd-controls="" position="0 0 0" />
    <Entity material="color: #666;" geometry="primitive: sphere; radius: 100" scale="1 1 -1"/>

    <Ceiling position='0 0 -4' color="#ff2288" />

    <Entity
      geometry="primitive: plane; height: 500; width: 500"
      position="0 -0.5 0"
      rotation="-90 0 0"
      material="color: #666; metalness: 0.5"
    />

    <Entity light="type: hemisphere; color: #fff; groundColor: #bbb; intensity: 2"/>
  </Scene>
);

TestScene.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default TestScene;
