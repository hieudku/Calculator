const userInput = { // for later use
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "x", "÷"],
    result: "=",
}
let displayArray1 = [];//empty arrays to catch all instances of the first number.
let displayArray2 = [];
let jointInput1;
//Input display
let input1 = null; // user input values are stored here.
let displayDigit;
const topScreen = document.querySelector(".screenTop");
const digitInputs = document.querySelectorAll('.num'); // access all class "num"
    digitInputs.forEach(digitInput => { // loop through "num" button to add click event listener.
        digitInput.addEventListener('click', (event) => {
            const inputDigit = event.target.innerHTML;
            displayDigit = document.createTextNode(inputDigit); // create a text node to append it to the first digit displayed.
            topScreen.appendChild(displayDigit);
            displayArray1.push(inputDigit);//push all instances of input1 into array.


        });
    });
//Operators function to calculate
//Should clear inputDisplay whenever operators are clicked then store value, prepare for executing.
let equationResult = 0;
let operatorInput = document.querySelectorAll(".ope");
    operatorInput.forEach(operator => {
        operator.addEventListener('click', (event) => {//only return input1 once an operator is clicked.
            jointInput1 = displayArray1.join('');//join elements inside array into string
            console.log(jointInput1);
            input1 = parseInt(jointInput1);//assign joint string into input1 parsed as integer.
            console.log('input: ' + input1);
            operatorInput = event.target.innerHTML; //access the symbols.
            const displayOperator = document.createTextNode(operatorInput);
            topScreen.appendChild(displayOperator);
            if (operatorInput == userInput.operators[0]) {
                let sum = input1 + input1;
                equationResult = sum;
            }
        });
    });
//Output display & execute button
const bottomScreen = document.querySelector(".screenBottom");
const outputEqual = document.querySelector(".equ");
    outputEqual.addEventListener('click', (event) => {
        const outputDisplay = document.createTextNode(equationResult);
        bottomScreen.innerHTML = equationResult;
    });



//Functions.
function add(input1, input2) { //sum
    const inputPlus = {
        first: input1,
        second: input2,
    }
    let sum = parseInt(inputPlus.first) + parseInt(inputPlus.second);
        return sum;
}
const subtract = function(a, b) { // difference
    const inputMinus = {
        first: a,
        second: b,
    }
    let difference = parseInt(inputMinus.first) - parseInt(inputMinus.second);
        return difference;
}
const multiply = function(a, b) { // difference
    const inputTimes = {
        first: a,
        second: b,
    }
    let multiplyBy = parseInt(inputTimes.first) * parseInt(inputTimes.second);
        return multiplyBy;
}
const divide = function(a, b) { // difference
    const inputDivide = {
        first: a,
        second: b,
    }
    let divideBy = inputDivide.first / inputDivide.second;
        return divideBy;
}
//Output displays.


//Reset.


//test functions with prompt
const a = 0;
const b = 0;
const method = 0;
const ab = [a, b];
    if (method == "sum") {
       let result = add(a, b);
        console.log(a +" + "+ b + " = " + result);
    }
        else if (method == "subtract") {
           let result = subtract(a, b);
            console.log(a +" - "+ b + " = " + result);
        }
        else if (method == "multiply") {
            let result = multiply(a, b);
             console.log(a +" * "+ b + " = " + result);
         }
         else if (method == "divide") {
            let result = divide(a, b);
             console.log(a +" / "+ b + " = " + result);
         }