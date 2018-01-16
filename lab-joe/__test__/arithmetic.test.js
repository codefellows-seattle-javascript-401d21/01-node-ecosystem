'use strict';

const arithmetic = require('../lib/arithmetic');
require('jest'); // This is not required


expect(arithmetic.sum(1, 2)).toBe(3);

describe('Math Module', function() {
  describe('#Sum', function() {
    it('should add the sum of the two parameters', function() {
      expect(arithmetic.sum(1, 2)).toBe(3);
    });

    it('not validate non numerical inputs', function() {
      expect(arithmetic.sum('foo','bar')).toBe(null);
    });

  });
});
