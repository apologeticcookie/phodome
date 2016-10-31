import { Entity } from 'aframe-react';
import React from 'react';

// If there is a particular skybox image that should be used instead of a
// color, the Entity material property can take in a src instead of a
// color
// Just keep in mind that if the src points to some img url, you would want to
// do something like:
// <Entity material={{ src: 'url(path/to/image.png)'}}

const Sky = props => (
  <Entity
    material={{ src: 'url(assets/skybox.jpg)'}}
    geometry={{ primitive: 'sphere', radius: 100 }}
    scale="1 1 -1"/>
);

Sky.propTypes = {
  color: React.PropTypes.string.isRequired
};

export default Sky;
