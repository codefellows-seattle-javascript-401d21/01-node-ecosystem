'use strict'

const greet = require('../lib/greet')

expect(greet(5)).toBeNull
expect(greet('world')).toEqual('hello world')