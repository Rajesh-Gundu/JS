// Snippet 1
function setupCounter(initialValue) {
    let count = initialValue;
    function increment() {
      count++;
      return count;
    }
    function decrement() {
      count--;
      return count;
    }
    return {
      increment,
      decrement
    };
}

/* 

*/
  
const counterOne = setupCounter(5); // count = 5
console.log(counterOne.increment()); // 6
console.log(counterOne.increment()); // 7
const counterTwo = setupCounter(10); // count = 10
console.log(counterTwo.decrement()); // 9

// Task 2
function createGreeting(setup) {
    const initialGreet = setup;

    function greet(name) {
        console.log(initialGreet+name);
    }

    return {greet};
}

const g1 = createGreeting("Hello, ");
g1.greet("Rajesh");
g1.greet("Ananditha");
g1.greet("Sneha");

const g2 = createGreeting("Hey, ");
g2.greet("Rajesh");
g2.greet("Ananditha");
g2.greet("Sneha");





