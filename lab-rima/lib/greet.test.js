const greet = require('./greet');

test(
	'greet(1) should return null',
	() => {expect(greet(1)).toBe(null)}
)

test(
	'greet("world") should return hello world',
	() => {expect(greet("world")).toBe("hello world")}
);
