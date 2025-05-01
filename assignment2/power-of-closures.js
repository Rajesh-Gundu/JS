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
  Closures in javascript enables the inner function (which is declared inside another function) 
  can access the variables and scope of outer function even after completion of outer 
  function excution. 
  Whenever the setupCounter function called a new excution context is created and a new count 
  variable is created with respect to that fuction call and the increment and decrement functions
  remember this variable even after the execution of setupCounter function. So, it maintains 
  independent count variables for each setupCounter call.
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

// Task 3 and 4
function createSecretHolder(secret) {
  function getSecret() {
    return secret;
  }
  function setSecret(val) {
    secret = val;
  }
  return {getSecret,setSecret};
}

const s1 = createSecretHolder(369);
console.log(s1.getSecret());
s1.setSecret(963);
console.log(s1.getSecret());






