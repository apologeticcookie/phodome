import React from 'react';
import ReactDOM from 'react-dom';
import PhodomeScene from './components/PhodomeScene';

// The only purpose of this target variable is so that when running the client
// tests inside Chrome with Karma, where OUR index.html is not loaded, React
// won't try to render to a nonexistent DOM element .scene-container and will
// instead just render on the document body (which is guaranteed to exist on
// any given page, I think)
let target = document.querySelector('.scene-container');

if (!target) {
  target = document.querySelector('body');
}

ReactDOM.render(<PhodomeScene/>, target);
