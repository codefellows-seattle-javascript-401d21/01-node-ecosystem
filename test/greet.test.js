'use strict'

const greet = require('../lib/greet')

describe('Greet Module', function(){
    it('should take in a string and return \'hello + string\'', () => {
    expect(greet(1)).toEqual(null);
    expect(greet('world')).toEqual('hello world');
    })
});