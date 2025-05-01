/*
Task 1
The continue statement is used inside loops to skip the rest of the current iteration and
move on to the next iteration of the loop.
When continue is encountered, JavaScript jumps to the next loop cycle immediately.
It does not exit the loop, just skips the remaining code for that one iteration.

Task 2
The break statement is used to exit a loop immediately.
As soon as break runs the control exits the loop and the program continues with the
code after the loop.
*/

// Task 3 
for(let i=1;i<=20;i++) {
    if(i%5 == 0)
        continue;
    if(i > 15)
        break;
    console.log(i);
}

// Task 4
const arr = [10, 5, 8, 20, 3, 15, 25];
for(let num of arr) {
    if(num > 12) {
        console.log("Found a large number!");
        break;
    }
    else if(num == 5) {
        console.log("Skipping 5");
        continue;
    }
    else {
        console.log(num);
    }
}