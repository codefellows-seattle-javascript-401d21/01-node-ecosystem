'use strict';
const myMath = require('../lib/arithmetic.js');

describe("If either argument is a non-number the function should return 'null'", () => {
  it('should return null', () => {
    expect(myMath.add(1, 'a')).toBe(null);
  });
});

describe('Else return the sum of the 2 numbers', () =>{
  it('should return null', ()=> {
    expect(myMath.add(1, 2)).toBe(3);
  })
});

describe("If either argument is a non-number the function should return 'null'", ()=>{
  it('should return null', ()=> {
    expect(myMath.sub(1, 'a')).toBe(null);
  })
});

describe("Else return the second parameter subtracted from the first parameter", ()=>{
  it('should return null', ()=>{
    expect(myMath.sub(2, 1)).toBe(1);
  })
});
