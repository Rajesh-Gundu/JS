let calculation = localStorage.getItem('calculation') || "";
const res = document.querySelector('.result');
res.innerHTML = calculation;

function addToExpr(s) {
    calculation += s;
    showCalc();
    localStorage.setItem('calculation',calculation);
}

function clearExpr() {
    calculation = '';
    showCalc();
    localStorage.removeItem('calculation');
}

function calc() {
    calculation = eval(calculation);
    showCalc();
    localStorage.setItem('calculation',calculation);
}

function showCalc() {
    res.innerHTML = calculation;
}