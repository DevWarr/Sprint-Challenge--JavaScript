// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/
const consume = (p1, p2, cb) => cb(p1, p2)



/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/
const add = (num1, num2) => num1 + num2
const multiply = (num1, num2) => num1 * num2
const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`


/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 

// This looks like a simple case of lexical scope:
// When searching for variables/constants, the code can always look outside, but not within.
// In this case, the nestedFunction is told to output a constant called 'internal'.
// It doesn't have 'internal' directly within its code, so it looks outside itself.
// Lo and behold, 'internal' is found one scope up.
// nestedFunction then logs 'internal' and no errors are found.


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();