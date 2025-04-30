function createCounter() {
    let count = 0;
    function incrementCounter() {
        count++;
        return count;
    }
    return incrementCounter;
}

const counterA = createCounter();
console.log(counterA()); // Expected: 1, Actual: ?
console.log(counterA()); // Expected: 2, Actual: ?
const counterB = createCounter();
console.log(counterB()); // Expected: 1 (independent counter), Actual: ?

/*
    Explanation :
     Each time you call createCounter() a new execution context is created. This means
     a new scope and a new count variable is created and preserved inside the returned
      function.

    Therefore:
        counterA has its own count initialized to 0, then becomes 1, then 2.
        counterB is a new independent counter, so it starts with a fresh count = 0, 
        and then becomes 1.
*/