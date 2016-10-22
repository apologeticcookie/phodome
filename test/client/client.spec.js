import {VRScene} from '../../client/src/app.js';
import {Scene} from 'aframe-react';

// Guide for writing tests: https://github.com/airbnb/enzyme/blob/master/README.md
describe('<VRScene />', () => {
  it('renders a <Scene /> component', () => {
    const wrapper = enzyme.shallow(<Scene />);
    expect(wrapper.find(Scene)).to.have.length(1);
  });
});

// bug present: 
// /Users/tonyktan/Desktop/Hack Reactor/apologeticcookie/node_modules/aframe/dist/aframe.js:56669
//     if (WebVRConfig.ENABLE_DEPRECATED_API) {
//         ^

// ReferenceError: WebVRConfig is not defined
//     at new WebVRPolyfill (/Users/tonyktan/Desktop/Hack Reactor/apologeticcookie/node_modules/aframe/dist/node_modules/webvr-polyfill/build/webvr-polyfill.js:6517:1)