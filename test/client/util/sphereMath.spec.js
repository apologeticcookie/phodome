import { expect } from 'chai';
import getSpherePositions from '../../../client/src/util/sphereMath';

describe('sphereMath', () => {
  it('generates the specified number of points', () => {
    const expectedLength = 10;
    const positions = getSpherePositions(expectedLength, 1);
    console.log(positions);
    expect(positions.length).to.equal(expectedLength);
  });
});
