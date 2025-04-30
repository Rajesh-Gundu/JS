console.log(mysteryVariable);
let mysteryVariable = 10;
console.log(mysteryVariable);
function revealMystery() {
    console.log("Inside revealMystery:", mysteryVariable);
    let mysteryVariable = 20;
    console.log("Inside revealMystery (after declaration):", mysteryVariable);
}
revealMystery();
console.log("After revealMystery:", mysteryVariable);


/*
    task1 :-
    Output :
    ReferenceError: Cannot access 'mysteryVariable' before initialization
    Reason : 
    let is hoisted without initialization.
    Accessing it before declaration is not allowed because it is in temporal dead zone.

    Hoisting (var vs let vs const) :
    Hoisting in JavaScript means variable and function declarations are moved to the top
    of their scope at compile time.
    var is hoisted and initialized with undefined. You can access it before it's declared
    (but it’ll be undefined).
    let and const are hoisted too, but not initialized. Accessing them before declaration
    causes a ReferenceError due to the temporal dead zone (TDZ).
*/