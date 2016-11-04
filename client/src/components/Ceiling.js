import { Entity } from 'aframe-react';
import React from 'react';

const Ceiling = props => {

  return (
    <Entity position={props.position} scale="1.9 1 1" rotation="0 90 0">
      <a-torus arc="180" radius="10" radius-tubular="0.2" color="#fff"
               side="double"  position="0 0 0" scale="0.5 1.5 500" src="assets/ceiling.jpg" repeat="2 2" />
    </Entity>
  );
};

Ceiling.propTypes = {
  src: React.PropTypes.string,
  color: React.PropTypes.string,
  position: React.PropTypes.string.isRequired
};

export default Ceiling;
