import {VRScene} from '../../client/src/app.js';
import {Scene} from 'aframe-react';

// Guide for writing tests: https://github.com/airbnb/enzyme/blob/master/README.md
describe('<VRScene />', () => {
  it('renders a <Scene /> component', () => {
    const wrapper = enzyme.shallow(<Scene />);
    expect(wrapper.find(Scene)).to.have.length(1);
  });
});
