import { Entity } from 'aframe-react';
import React from 'react';

const Camera = props => (
  <Entity>
    <Entity id="camera" camera="" look-controls="" wasd-controls="" {...props} />
  </Entity>
);

Camera.propTypes = {

};

export default Camera;
