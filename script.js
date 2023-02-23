const userInput = { // for later use
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "×", "÷"],
    result: "=",
}
//Input display
const topScreen = document.querySelector(".screenTop");
const digitInputs = document.querySelectorAll('.num'); // access all class "num"
    digitInputs.forEach(digitInput => { // loop through "num" button to add click event listener.
        digitInput.addEventListener('click', (event) => {
            const inputDigit = event.target.innerHTML;
            const displayDigit = document.createTextNode(inputDigit); // create a text node to append it to the first digit displayed.
            topScreen.appendChild(displayDigit);
        });
    });
// console.log testing.




//Functions.
const add = function(a, b) { //sum
    const inputPlus = {
        first: a,
        second: b,
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