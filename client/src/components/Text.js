import { Entity } from 'aframe-react';
import React from 'react';

const Text = props => {
  const extraProps = AFRAME.utils.extend({}, props);
  delete extraProps.color;
  delete extraProps.text;

  return (
    <Entity
      text={{text: props.text}} material={{color: props.color}}
      {...extraProps}/>
  );
};

Text.propTypes = {
  text: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired
};

export default Text;
