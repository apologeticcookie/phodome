import { Entity } from 'aframe-react';
import React from 'react';

const Ceiling = props => {

  return (
    <Entity position={props.position}>
      <a-torus arc="180" radius="10" radius-tubular="0.2" color="#2d2926"
               side="double" position="0 -1 0" scale="0.5 0.5 30" src="assets/ceiling.jpg" repeat="10 10" />
    </Entity>
  );
};

Ceiling.propTypes = {
  src: React.PropTypes.string,
  color: React.PropTypes.string,
  position: React.PropTypes.string.isRequired
};

export default Ceiling;
