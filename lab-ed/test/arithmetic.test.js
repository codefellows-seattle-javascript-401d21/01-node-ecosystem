'use strict'

const greet = require('../lib/greet')

expect(greet.hello(5)).toBeNull
expect(greet.hello('world')).toEqual('hello world')