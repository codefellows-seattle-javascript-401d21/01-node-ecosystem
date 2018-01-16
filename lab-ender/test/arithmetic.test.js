const arithmetic = require(`../lib/arithmetic`);

describe(`Arithmetic`, () => {
  describe(`#Add`, () => {
    it(`should have 2 parameters`, () => {
      expect(arithmetic.add).toHaveLength(2);
    });
    it(`should return null when input is not a number`, () => {
      expect(arithmetic.add(`1`, 2)).toBeNull();
      expect(arithmetic.add(1, `2`)).toBeNull();
    });
    it(`should return the sum of the parameters (1+2=3)`, () => {
      expect(arithmetic.add(1, 2)).toBe(3);
    });
  });
  describe(`#Sub`, () => {
    it(`should have 2 parameters`, () => {
      expect(arithmetic.sub).toHaveLength(2);
    });
    it(`should return null when input is not a number`, () => {
      expect(arithmetic.sub(`1`, 2)).toBeNull();
      expect(arithmetic.sub(1, `2`)).toBeNull();
    });
  });
  it(`should return the second parameter subtracted from the first (3-2=1)`, () => {
    expect(arithmetic.sub(3, 2)).toBe(1);
  });
});