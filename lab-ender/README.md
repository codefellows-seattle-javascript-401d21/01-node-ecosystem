#Modules:
lib/arithmetic.js exports an object, containing two functions:
* `.add(num1, num2)`
  * arity: `2`
  * expected data:
    * `num1`: number
    * `num2`: number
  * output:
    * valid: returns the sum of `num1` and `num2`
    * invalid: returns `null`
* `.sub(num1, num2)`
  * arity: `2`
  * expected data:
    * `num1`: number
    * `num2`: number
  * output:
    * valid: returns `num2` subtracted from `num2`
    * invalid: returns `null`

lib/greet.js exports a function:
* `function(inputString)`
  * arity: `1`
  * expected data:
    * `inputString`: string
  * output:
    * valid: returns string `'hello ' + inputString`
    * invalid: returns `null`