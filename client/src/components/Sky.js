import { Entity } from 'aframe-react';
import React from 'react';

const Sky = props => (
  <Entity
    geometry={{primitive: 'sphere', radius: 100}}
    material={{shader: 'flat', color: props.color}}
    scale="1 1 -1"/>
);

Sky.propTypes = {
  color: React.PropTypes.string.isRequired
};

export default Sky;
