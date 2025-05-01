function flexibleFunction(a, b, ...rest) {
    console.log("a:", a);
    console.log("b:", b);
    console.log("rest:", rest);
}
flexibleFunction(1);
flexibleFunction(1, 2);
flexibleFunction(1,2,3,4,5);

/*
    If the arguments are less than parameters they(rest parameters) will be assigned undefined
    values. If more arguments are passed, we use ...rest to store indefinite number of
    parameters in array called rest.
 */

/*
 task 2 :
    ...rest syntax gathers remaining arguments into an array. 
    It allows a function to handle indefinite input values.
    the parameter should be the last one in declaration.
 */

// Task 3

function sumAll(...rest) {
    let sum = 0;
    for(let num of rest) {
        sum += num;
    }
    console.log(sum);
}
sumAll(1,2);
sumAll(567,7,98,8);


// Task 4

function processArguments(primaryFun,...rest) {
    return primaryFun(rest);
}

const primaryFun = (arr) => {
    mul = 1;
    for(let num of arr) {
        mul *= num;
    }
    return mul;
} 

console.log(processArguments(primaryFun,2,3,4));
console.log(processArguments(primaryFun,1,3,5));


