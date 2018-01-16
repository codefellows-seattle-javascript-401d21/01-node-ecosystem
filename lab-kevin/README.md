# 01: Node Ecosystem

  ## Greet Module

  - The greet.js module only as one function.  It expects one argument as a string and returns 'hello' + arg.  If the argument is anything but a string, null is returned.  

        ('world') => 'helo world'

        (7) => null

  ## Arithmetic Module 

  - The Arithmetic.js module has two methods, add and sub.

  ### module.add()

  - This method requires two arguments as numbers.  The function returns the sum of two numbers or null if either argument is not a number.

      (1,2) => 3

      (7, 'ate') => null

### module.sub()

  - This method requires two arguments as numbers.  The function returns the difference when subtracting the second number from the first or null if either argument is not a numbers.

      (9,1) => 8
      
      (9, 'ate') => null