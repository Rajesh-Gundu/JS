// Snippet 1
function delayedGreeter(names) {
    for (var i = 0; i < names.length; i++) {
    setTimeout(function() {
        console.log(`Hello, ${names[i]}!`);
        }, i * 1000);
    }
}
delayedGreeter(['Alice', 'Bob', 'Charlie']);

// Snippet 2
function delayedGreeterCorrected(names) {
    for (var i = 0; i < names.length; i++) {
    (function(index) { // IIFE creates a new scope for each iteration
        setTimeout(function() {
            console.log(`Hello, ${names[index]}!`);
            }, index * 1000);
        })(i); // Pass the current value of 'i' into the IIFE
    }
}
delayedGreeterCorrected(['Alice', 'Bob', 'Charlie']);

// Snippet 3
function delayedGreeterLet(names) {
    for (let i = 0; i < names.length; i++) { // Using 'let' 
        setTimeout(function() {
            console.log(`Hello, ${names[i]}!`);
        }, i * 1000);
    }
}
delayedGreeterLet(['Alice', 'Bob', 'Charlie']);



/*
    Snippet 1 :-
    output :
    Hello, undefined! // after 0 seconds
    Hello, undefined! // after 1 second
    Hello, undefined! // after 2 second

    Reason :
    1. var has function scope, not block scope which means when you use var, there's only
     one i variable for the whole loop.
    2. setTimeout() is asynchronous. It doesn't run immediately.Instead, it schedules the
     function to run later — after specified time(here it is 0, 1, and 2 seconds).
    3. By the time setTimeout runs (after delays), the loop is already finished, and
     i has become 3.
    4. At the time they finally run, i is 3.So each setTimeout tries to do:
        But names[3] is undefined — because the last index is 2
    
    Snippet 2 :-
    Hello, Alice!   // after 0 seconds
    Hello, Bob!     // after 1 seconds
    Hello, Charlie! // after 2 seconds

    Reason : 
    An IIFE(Immediately Invoked Function Expression) is a function that is defined and
    immediately executed.Creates its own scope,which helps capture the current value
    of variables.
    In each loop iteration, a new function scope is created by the IIFE.
    The current value of i is passed as index.
    Now, when the setTimeout runs later, it uses its own copy of index, which doesn’t change.

    Snippet 3 :-
    Hello, Alice!   // after 0 seconds
    Hello, Bob!     // after 1 seconds
    Hello, Charlie! // after 2 seconds

    Reason : 
    'let' is block scoped
    Using let in a loop creates a new variable for each iteration.
    When you use var in a loop, all the setTimeout functions share the same i, so they all
    end up using the final value of i.But when you use let, each loop step gets its own
    copy of i, so every setTimeout remembers the correct number it had when it was created.

*/