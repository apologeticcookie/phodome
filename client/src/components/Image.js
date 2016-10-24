import { Entity } from 'aframe-react';
import React from 'react';

const Image = props => (
  <Entity
    geometry={{
      primitive: 'box',
      width: 0.8,
      height: 0.8,
      depth: 0
    }}
    position={props.position}
    material={{
      src: `url(${props.src})`
    }}
  />
);

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired
};

export default Image;
