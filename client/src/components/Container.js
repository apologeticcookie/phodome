import React from 'react';
import PhodomeScene from './PhodomeScene';
import Sidebar from './Sidebar';

// This allows our sidebar and phodomeScene on the same screen
const Container = () => (
    <div>
      <Sidebar />
      <PhodomeScene />
    </div>
);

export default Container;