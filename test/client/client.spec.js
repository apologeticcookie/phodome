import React from 'react';
import { shallow } from 'enzyme';
import { VRScene } from '../../client/src/app.js';
import { Scene } from 'aframe-react';
import { expect } from 'chai';

// Guide for writing tests: https://github.com/airbnb/enzyme/blob/master/README.md
describe('<VRScene />', () => {
  it('renders a <Scene /> component', () => {
    const wrapper = shallow(<VRScene />);
    expect(wrapper.find(Scene)).to.have.length(1);
  });
});
