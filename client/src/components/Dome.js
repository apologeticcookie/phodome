import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity } from 'aframe-react';
import React from 'react';

import getSpherePositions from '../util/sphereMath';
import Image from './Image';

const Dome = props => {
  const positions = getSpherePositions(props.images.length, 1);

  return (
    <Entity>
      {
        props.images.map((imageUrl, index) => {
          const x = positions[index][0];
          const y = positions[index][1];
          const z = positions[index][2];
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
