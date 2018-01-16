'use strict'

const greet = require('../lib/greet')

expect(greet.hello(5)).toBeNull
expect(greet.hello('world')).toEqual('hello world')

describe('Greet Module', function() {
  describe('#Hello', function() {
    it('should take in a string and return that string concatenated after hello', function() {
      expect(greet.hello(5)).toBeNull
      expect(greet.hello('world')).toEqual('hello world')
    })
  })
})