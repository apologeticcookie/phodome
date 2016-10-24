import { Entity } from 'aframe-react';
import React from 'react';

const Sky = props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', src: props.src}}
    scale="1 1 -1"/>
);

Sky.propTypes = {
  src: React.PropTypes.string.isRequired
};

export default Sky;
