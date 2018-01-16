'use strict';

const arithmetic = require('../lib/arithmetic');

describe('Arithmetic Module', function () {
  describe('#Add', function () {
    it('should return the sum of a and b values', function () {
      expect(arithmetic.add(1, 1)).toEqual(2);
      expect(arithmetic.add(15, 10)).toEqual(25);
    });

    it('should return null in the event that either a or b is a non number', function () {
      expect(arithmetic.add('1', 1)).toEqual(null);
      expect(arithmetic.add(1, '1')).toEqual(null);
      expect(arithmetic.add('1', '1')).toEqual(null);
      expect(arithmetic.add('foo', {'foo': 1})).toEqual(null);
    });
  });

  describe('#Sub', function () {
    it('should return the value of a minus b', function () {
      expect(arithmetic.sub(1, 1)).toEqual(0);
      expect(arithmetic.sub(15, 10)).toEqual(5);
      expect(arithmetic.sub(100, 10)).toEqual(90);
    });

    it('should return null if either a or b is a non number', function () {
      expect(arithmetic.sub('1', 1)).toEqual(null);
      expect(arithmetic.sub(1, '1')).toEqual(null);
      expect(arithmetic.sub('1', '1')).toEqual(null);
      expect(arithmetic.sub('foo', {'foo': 1})).toEqual(null);
    });
  });
});
