import { Entity } from 'aframe-react';
import React from 'react';

/*
  The 'look-at' property of each image is set to point to our <Camera> that is
  rendered inside <PhodomeScene>
  The <Camera> component is given an id of 'camera' (check out Camera.js) so that
  it can easily be referred to
  Formerly, the 'look-at' property was set to the string '0 0 0' to always point
  at the center of the dome, but for some reason, after uploading new photos to
  the dome, thereby triggering a re-fetching and re-rendering of the dome, photo
  positions would be sometimes wildly off and NOT actually facing the origin.
  Setting each <Image> to instead simply always point to the camera seems to fix
  this issue.
*/
const Image = props => (
  <Entity
    geometry={{
      primitive: 'box',
      width: 3,
      height: 3,
      depth: 0
    }}
    position={props.position}
    look-at="#camera"
    material={{
      src: `url(${props.src})`
    }}
    onClick={() => {props.onImageClick('TestScene'); } }
  />
);

Image.propTypes = {
  src: React.PropTypes.string.isRequired,
  position: React.PropTypes.string.isRequired
};

export default Image;
