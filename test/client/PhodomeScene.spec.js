import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import PhodomeScene from '../../client/src/components/PhodomeScene';
import Image from '../../client/src/components/Image';
import { expect } from 'chai';

// Guide for writing tests: https://github.com/airbnb/enzyme/blob/master/README.md
describe('<PhodomeScene />', () => {
  it('renders an <Image> for every item inside state', () => {
    const wrapper = shallow(<PhodomeScene />);
    const images = ['a.png', 'b.png', 'c.png'];
    wrapper.setState({ images });
    expect(wrapper.find(Image)).to.have.length(images.length);
  });
});
