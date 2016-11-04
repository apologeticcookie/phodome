import { Entity } from 'aframe-react';
import React from 'react';

const Art = (props) => {
  console.log('theesseee are the proppsss!!!!!', props)
 return(
   <Entity
     geometry={{
       primitive: 'box',
       width: 5,
       height: 5,
       depth: 2
     }}
     rotation=""
     position={props.position}
     
     material={{
      src: `url(${props.src})`
    }}
   />
  ) 
} 

export default Art;
