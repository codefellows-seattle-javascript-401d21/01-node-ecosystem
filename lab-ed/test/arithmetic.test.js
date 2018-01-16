'use strict'

const arithmetic = require('../lib/arithmetic')

expect(arithmetic.add(5, 'str')).toBeNull
expect(arithmetic.add(5, 5)).toEqual(10)
expect(arithmetic.sub(5, 'str')).toBeNull
expect(arithmetic.sub(6, 5)).toEqual(1)

describe('Add Module', function() {
  describe('#Add', function() {
    it('should return the sum of two numbers', function() {
      expect(arithmetic.add(5, 'str')).toBeNull
      expect(arithmetic.add(5, 5)).toEqual(10)
    })
  })
})

describe('Sub Module', function() {
  describe('#Sub', function() {
    it('should return the result of subtracting the 2nd argument from the first', function() {
      expect(arithmetic.sub(5, 'str')).toBeNull
      expect(arithmetic.sub(6, 5)).toEqual(1)
    })
  })
})