01: Node Ecosystem

written by Joseph Waine on January 15th, 2018

This lab goes over the jest library, it was very interesting to get started with this.


__test__/
.
├── arithmetic.test.js
├── arithmetic.test.min.js
├── greet.test.js
└── greet.test.min.js

lib/
.
├── arithmetic.js
├── arithmetic.min.js
├── greet.js
└── greet.min.js


_Greet Module Tests_
Write a test that expects the greet module to return null when you supply non string values
Write a test the expects the greet module to return 'hello world'
This should happen when invoked with 'world' as the first argument

_Arithmetic Module Tests_
Test each method for proper use (invoded with number arguments)
Test each method for inproper use (invoded with one or more non-numner arguments)

_Greet Module_

airty: one string input to be concatenated with the hello prefix, ie: 'john' will become 'hello john'

Create a NodeJS module in the lib/ directory named greet.js that exports a single function.

The greet function should have a single parameter (arity of one) that should expect a string as it's input
The greet function should return the input name, concatenated with "hello ": eg. ("hello susan")
The greet function should return null if the input is not a string

_Arithmetic Module_

airty: two inputs to be added together, outcome: the sum ie: 5 and 6 would become 11

Create a NodeJS module in the lib/ directory named arithmetic.js that exports an object. This module should have add and sub methods that implament addition and subtraction.

The add method should have an arity of two (define two paramiters)
If either argument is a non-number the function should return null
Else return the sum of the 2 numbers
The sub method should have an arity of two (define two paramiters)
If either argument is a non-number the function should return null
Else return the second paramiter subtracted from the first paramiter



