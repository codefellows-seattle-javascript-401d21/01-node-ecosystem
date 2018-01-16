'use strict'

const math = require('../lib/arithmetic')

describe('Arithmetic Module', function(){
    describe('#Add', function(){
        it('should take in two arguments and return the sum', () => {
        expect(math.add(5, 12)).toEqual(17);
        expect(math.add('moustache', 6)).toEqual(null);
        })
    })

    describe('#Subtract', function(){
        it('should take in two arguments and return the value of the second parameter minus the first parameter', () => {
        expect(math.subtract(5, 12)).toEqual(7);
        expect(math.subtract('sandwich', 'pope')).toEqual(null);
        })
    });
});