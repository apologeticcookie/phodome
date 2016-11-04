import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity } from 'aframe-react';
import React from 'react';

import Art from './Bart';

const ArtMapper = props => {
  const z = 9;
  const y = 3;
  let x = 0;
  let lightX = 0;
  let count = 0;

  return (
    <Entity>
      {
        props.images.map((imageUrl, index) => {
          // The negative flips all items from behind the camera to in front
          // 8 12 6 light position
          x += 8;
          lightX +=12; 
          count++;
          return (
            <Entity>
              <Art
              key={imageUrl}
              src={imageUrl}
              position={`${x} ${3} ${9}`}/>

              <Entity 
              light="type: spot; angle: 30"
              intensity="1"
              look-at="" 
              rotation="-60 180 0" 
              position={`${x} ${12} ${8}`}/>
            </Entity>
          );
        })
      }
    </Entity>
  );
};


export default ArtMapper;
