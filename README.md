# Sprint Challenge: JavaScript Fundamentals

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a survey of problems. This Sprint explored JavaScript Fundamentals. During this Sprint, you studied variables, functions, object literals, arrays, this keyword, prototypes, and class syntax. In your challenge this week, you will demonstrate proficiency by completing a survey of JavaScript problems.

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your PM and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in JavaScript fundamentals.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your project manager.

## Description

You will notice there are several JavaScript files being brought into the index.html file.  Each of those files contain JavaScript problems you need to solve.  If you get stuck on something, skip over it and come back to it later.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. Describe the biggest difference between `.forEach` & `.map`.

`.forEach()` is an array method that cycles through each index in an array. For each index, it takes the value and uses it within a function. This function could do essentially anything: it could push each item to a new array, it could `conosle.log()` each item... it really depends on what the user defines.

`.map()` is an array method that extends from the `.forEach()` method. For each index in an array, `.map()` takes the value and _changes_ it based on the typed function. This method requires you to return a value, and the return will replace the input value.

`.forEach()` will cycle through an array and perform whatever function the coder defines, while `.map()` will cycle through an array and replace the input value with the return value from the coder-defined function.

2. What is the difference between a function and a method?

A method is a function that is attached to an object(or array). Methods are called like functions by typing the parentheses `()`, but methods require an object of array connected to it ( like `Object.create()`. You cannot simply type `create()` because the method needs a connected object.)

3. What is closure?

Closure is the ability of a function to seemingly remember a variable's value outside of its lexical scope.

4. Describe the four rules of the 'this' keyword.

* Window Binding - `console.log(this)` will output the 'global', or 'window', object's information when viewed with DevTools.
* Implicit Binding - We need:
  * Both an Object and a function
  * The function must use `this` within its code
  * The function must be *inside* the Object as a property or prototype
  * Whenever the function is called as a method ( `object.function()` ), the word `this` corresponds to the object.
* Explicit Binding - We need:
  * Both an Object and a function
  * The function must use `this` within its code
  * The function must be *outside* the Object
  * Whenever the function is called _with a special method_ like `.call()` or `.apply()`, the function requires an extra argument to run properly: the object that is used as the first argument in said function will take the place of any `this` words.

5. Why do we need super() in an extended class?

The keyword `extends` is used to connect a child and parent class. The `super()` keyword is used to _pass information_ between the two. Without super(), the parent class won't receive any information about the child's given properties, and the child will be unable to inherit the parent's properties.

## Project Set up

Follow these steps to set up and work on your project:

- [x] Create a forked copy of this project.
- [x] Add PM as collaborator on Github.
- [x] Clone your OWN version of Repo (Not Lambda's by mistake!).
- [x] Create a new Branch on the clone: git checkout -b `<firstName-lastName>`.
- [x] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
- [x] You are now ready to build this project with your preferred IDE
- [x] Implement the project on your Branch, committing changes regularly.
- [x] Push commits: git push origin `<firstName-lastName>`.

Follow these steps for completing your project:

- [ ] Submit a Pull-Request to merge <firstName-lastName> Branch into master (student's  Repo).
- [ ] Add your Project Manager as a Reviewer on the Pull-request
- [ ] PM then will count the HW as done by  merging the branch back into master.


## Minimum Viable Product

Your finished project must include all of the following requirements:

**Pro tip for this challenge: If something seems like it isn't working locally, copy and paste your code up to codepen and take another look at the console.**

## Task 1: Objects and Arrays
Test your knowledge of objects and arrays. 
* [ ] Use the [objects-arrays.js](challenges/objects-arrays.js) link to get started.  Read the instructions carefully!

## Task 2: Functions
This challenge takes a look at callbacks and closures as well as scope. 
* [ ] Use the [functions.js](challenges/functions.js) link to get started. Read the instructions carefully!

## Task 3: Prototypes
Create constructors, bind methods, and create cuboids in this prototypes challenge.
* [ ] Use the [prototypes.js](challenges/prototypes.js) link to get started. Read the instructions carefully!

## Task 4: Classes
Once you have completed the prototypes challenge, it's time to convert all your hard work into classes.
* [ ] Use the [classes.js](challenges/classes.js) link to get started. Read the instructions carefully!

In your solutions, it is essential that you follow best practices and produce clean and professional results. Schedule time to review, refine, and assess your work and perform basic professional polishing including spell-checking and grammar-checking on your work. It is better to submit a challenge that meets MVP than one that attempts too much and does not.

## Stretch Problems

There are a few stretch problems found throughout the files, don't work on them until you are finished with MVP requirements!
