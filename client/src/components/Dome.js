import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity } from 'aframe-react';
import React from 'react';

import getDomePositions from '../util/sphereMath';
import Image from './Image';

const Dome = props => {
  const RADIUS = 4 + (Math.floor(props.images.length / 4)); // This is pretty arbitrary
  const positions = getDomePositions(props.images.length, 1);

  return (
    <Entity>
      {
        props.images.map((imageUrl, index) => {
          const x = positions[index][0] * RADIUS;
          const y = positions[index][1] * RADIUS;

          // The negative flips all items from behind the camera to in front
          const z = positions[index][2] * -RADIUS;
          return (
            <Image
            key={index}
            src={imageUrl}
            position={`${x} ${y} ${z}`}
            />
          );
        })
      }
    </Entity>
  );
};

Dome.propTypes = {
  images: React.PropTypes.array.isRequired
};

export default Dome;
