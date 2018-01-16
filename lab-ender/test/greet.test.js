const greet = require(`../lib/greet`);

describe(`Greet`, () => {
  it(`should expect one parameter`, () => {
    expect(greet).toHaveLength(1);
  });
  it(`should return null when input is not a string`, () => {
    expect(greet(0.7734)).toBeNull();
  });
  it(`should return 'hello world' when first argument is 'world'`, () => {
    expect(greet(`world`)).toBe(`hello world`);
  });
});
