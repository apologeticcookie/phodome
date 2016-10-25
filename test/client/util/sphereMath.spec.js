import { expect } from 'chai';
import getDomePositions from '../../../client/src/util/sphereMath';

describe('sphereMath', () => {
  it('generates the specified number of points', () => {
    const expectedLength1 = 10;
    const expectedLength2 = 200;
    const positions1 = getDomePositions(expectedLength1, 1);
    const positions2 = getDomePositions(expectedLength2, 1);
    expect(positions1.length).to.equal(expectedLength1);
    expect(positions2.length).to.equal(expectedLength2);
  });
});
