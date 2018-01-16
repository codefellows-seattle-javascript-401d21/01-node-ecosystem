'use strict'

const arithmetic = require('../lib/arithmetic');

describe('Arithmetic module', function(){
	describe('add function', function(){
		test(
			'add("Not num", 3) should return null',
			() => {expect(arithmetic.add("Not num", 3)).toBe(null);}
		);

		test(
			'add("Not num1", "Not num2") should return null',
			() => {expect(arithmetic.add("Not num1", "Not num2")).toBe(null);}
		);

		test(
			'add(2, 3) should return 5',
			() => {expect(arithmetic.add(2, 3)).toBe(5);}
		);
	});
	describe('sub function', function(){
		test(
			'sub("Not num", 1) should return null',
			() => {expect(arithmetic.sub("Not num", 1)).toBe(null);}
		);

		test(
			'sub("Not num3", "Not num4") should return null',
			() => {expect(arithmetic.add("Not num3", "Not num4")).toBe(null);}
		);

		test(
			'sub(-10, 1) should return -11',
			() => {expect(arithmetic.sub(-10, 1)).toBe(-11);}
		);
	});
});
