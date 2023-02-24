const userInput = { // for comparing with inputs.
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "x", "÷"],
    result: "=",
}
let displayArray = [];//empty arrays to catch all value instances of the pressed number button.
let jointInput1;// join elements in above array into string as full number.
let jointInput2;
//Input display
let input1 = null; // user input values are stored here.
let input2 = null;
let displayDigit;
const topScreen = document.querySelector(".screenTop");
const digitInputs = document.querySelectorAll('.num'); // access all class "num"
    digitInputs.forEach(digitInput => { // loop through "num" button to add click event listener.
        digitInput.addEventListener('click', event1 => {
            const inputDigit = event1.target.innerHTML;
            displayDigit = document.createTextNode(inputDigit); // create a text node to append it to the first digit displayed.
            topScreen.appendChild(displayDigit);
            displayArray.push(inputDigit);//push all instances of input1 into array.
            });
        });
//Operators function to calculate
let equationResult = null;
let operatorInput = document.querySelectorAll(".ope");
    operatorInput.forEach(operator => {
        operator.addEventListener('click', (event) => {//only return input1 once an operator is clicked.
            operatorInput = event.target.innerHTML; //access the symbols.
            displayOp = document.createTextNode(operatorInput);
            topScreen.appendChild(displayOp);
            jointInput1 = displayArray.join('');//join elements inside array into string
            console.log('first input: '+jointInput1);
            input1 = parseInt(jointInput1);//assign joint string into input1 parsed as integer.
            console.log(operatorInput);
            displayArray = []; //empty array after operator clicked, ready to take value of input 2
        });
    });
//Output display & execute button
const bottomScreen = document.querySelector(".screenBottom");
const outputEqual = document.querySelector(".equ");
    outputEqual.addEventListener('click', (event) => {
        jointInput2 = displayArray.join('');
        console.log('second input: '+jointInput2);
        input2 = parseInt(jointInput2);
        //conditions for calculations based on what operator were clicked.
            if (operatorInput == userInput.operators[0]) {
                let sum = input1 + input2;
                equationResult = sum;
                console.log('equal: ' +sum);
            }
            else if (operatorInput == userInput.operators[1]) {
                let subtraction = input1 - input2;
                equationResult = subtraction;
                console.log('equal: ' +subtraction);
            }
            else if (operatorInput == userInput.operators[2]) {
                let multiply = input1 * input2;
                equationResult = multiply;
                console.log('equal: ' +multiply);
            }
            else if (operatorInput == userInput.operators[3]) {
                let division = input1 / input2;
                equationResult = division;
                console.log('equals: ' +division);
                if (input2 == 0) {
                    equationResult = "ERROR";
                }
            }
        const outputDisplay = document.createTextNode(equationResult);
        bottomScreen.innerHTML = equationResult;
        displayArray = [];
    });
//Reset (AC)
const allClear = document.querySelector(".clearBtn");
        allClear.addEventListener('click', (clear) => {
            //Clear both screens
            let clearScreenTop = document.querySelector(".screenTop");
            while (clearScreenTop.firstChild) {
                clearScreenTop.removeChild(clearScreenTop.firstChild);
            }
            let clearScreenBottom = document.querySelector(".screenBottom");
            clearScreenBottom.removeChild(clearScreenBottom.firstChild);
            //clear all input, outoput values
            input1 = null;
            input2 = null;
            displayArray = [];
            equationResult = null;
        });
//Delete (C)
const deleteInput = document.querySelector(".deleteBtn");
        deleteInput.addEventListener('click', (remove) =>{
            let removeChar = document.querySelector(".screenTop");
            removeChar.removeChild(removeChar.lastChild);
            displayArray.pop();//remove last element in display array when click.
        })