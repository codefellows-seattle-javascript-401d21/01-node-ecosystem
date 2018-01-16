'use strict'

module.exports.hello = hello

function hello(str) {
  if (typeof str != 'string') {
    return null
  }
  return `hello ${str}`
}