import { Entity } from 'aframe-react';
import React from 'react';

const Image = props => (
  <Entity
    geometry={{
      primitive: 'box',
      width: 3,
      height: 3,
      depth: 0
    }}
    position={props.position}
    look-at='0 0 0'
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
