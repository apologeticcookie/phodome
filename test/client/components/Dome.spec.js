import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Dome from '../../../client/src/components/Dome';
import Image from '../../../client/src/components/Image';
import { expect } from 'chai';

// Guide for writing tests: https://github.com/airbnb/enzyme/blob/master/README.md
describe('<Dome />', () => {
  it('renders an <Image> for every item inside state', () => {
    const images = ['a.png', 'b.png', 'c.png'];
    const wrapper = shallow(<Dome images={images} />);
    expect(wrapper.find(Image)).to.have.length(images.length);
  });
});
