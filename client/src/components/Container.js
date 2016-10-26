import React from 'react';
import PhodomeScene from './PhodomeScene';
import Sidebar from './Sidebar';

// This allows our sidebar and phodomeScene on the same screen
const Container = (props) => (
    <div>
      <Sidebar toggleDemo={props.toggleDemo} />
      <PhodomeScene />
    </div>
);

export default Container;