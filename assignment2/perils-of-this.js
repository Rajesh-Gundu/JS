// Snippet 1
const user = {
    name: "Alice",
    greetDelayed: function() {
        setTimeout(function() {
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
user.greetDelayed(); // Expected: Hello, Alice! (after 1 second), Actual: ?

// Snippet 2
const userCorrectedTraditional = {
    name: "Alice",
    greetDelayed: function() {
        const self = this; // Store a reference to 'this' 
        setTimeout(function() {
            console.log(`Hello, ${self.name}!`);
        }, 1000);
    }
};
userCorrectedTraditional.greetDelayed(); // Now works as expected

// Snippet 3
const userCorrectedArrow = {
    name: "Bob",
    greetDelayed: function() {
        setTimeout(() => { // Arrow function here
            console.log(`Hello, ${this.name}!`);
        }, 1000);
    }
};
userCorrectedArrow.greetDelayed(); // Works perfectly!

//Task4 
const obj = {
    car : "Tesla",
    showCarName() {
      setTimeout( function() {
        console.log(`Car is ${this.car}`);
      }, 1000);
    }
};
obj.showCarName();

const objCorrect = {
    car : "Tesla",
    showCarName() {
      setTimeout( () => {
        console.log(`Car is ${this.car}`);
      }, 1000);
    }
};
objCorrect.showCarName();

/*
    Explanation :

    1. Because in the setTimeout callback, this doesn’t refer to the user object, but
    to the global object (or undefined in strict mode).
    2. Here self holds a reference to the correct this (i.e., the object), so the callback
    accesses self.name correctly.
    3.Arrow functions don’t bind their own this. They capture this from the surrounding
    context (lexical binding).

*/

