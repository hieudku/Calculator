const userInput = { // for comparing with inputs.
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    operators: ["+", "-", "x", "÷"],
    result: "=",
}
let displayArray = [];// empty arrays to catch all value instances of the pressed number button.
let jointInput1;// join elements in above array into string as full number.
let jointInput2;
let input1 = null; // user input values are stored here.
let input2 = null; // second input store here after user click equal button.
let displayDigit;
let equationResult = null;
const topScreen = document.querySelector(".screenTop");
const digitInputs = document.querySelectorAll('.num'); // access all class "num"
    digitInputs.forEach(digitInput => { // loop through "num" button to add click event listener.
        digitInput.addEventListener('click', event1 => {          
            const inputDigit = event1.target.innerHTML;
            displayDigit = document.createTextNode(inputDigit); // create a text node to append it to the first digit displayed.
            topScreen.appendChild(displayDigit);
            displayArray.push(inputDigit);// push all instances of input1 into array.
        });
    });
// operators function to calculate.
let operatorInput = document.querySelectorAll(".ope");
    operatorInput.forEach(operator => {
        operator.addEventListener('click', (event) => {// only return input1 once an operator is clicked.
            operatorInput = event.target.innerHTML; // access the symbols.
            displayOp = document.createTextNode(operatorInput);
            topScreen.appendChild(displayOp);
            jointInput1 = displayArray.join('');// join elements inside array into string.
            input1 = parseFloat(jointInput1);// assign joint string into input1 parsed as integer.
            displayArray = []; // empty array after operator clicked, ready to take value of input 2.
        });
    });
// output display & execute button
const bottomScreen = document.querySelector(".screenBottom");
const outputEqual = document.querySelector(".equ");
    outputEqual.addEventListener('click', (event) => {
            //clear all inputs
            let clearInput = document.querySelector(".screenTop");
                while (clearInput.firstChild) {
                    clearInput.removeChild(clearInput.firstChild);
                }
        jointInput2 = displayArray.join('');
        input2 = parseFloat(jointInput2);
        //conditions for calculations based on what operator were clicked.
            if (operatorInput == userInput.operators[0]) {
                let sum = input1 + input2;
                equationResult = Math.round(sum * 1000000) / 1000000;
            }
            else if (operatorInput == userInput.operators[1]) {
                let subtraction = input1 - input2;
                equationResult = Math.round(subtraction * 1000000) / 1000000;
            }
            else if (operatorInput == userInput.operators[2]) {
                let multiply = input1 * input2;
                equationResult = Math.round(multiply * 1000000) / 1000000;
            }
            else if (operatorInput == userInput.operators[3]) {
                let division = input1 / input2;
                equationResult = Math.round(division * 1000000) / 1000000;//round to n decimal places
                if (input2 == 0) {
                    equationResult = "ERROR";
                }
            }
                else if (input2 = null) {
                    equationResult = input1;
                }
        document.createTextNode(equationResult);
        bottomScreen.innerHTML = equationResult;
        displayArray = [];
    });
// reset (AC)
const allClear = document.querySelector(".clearBtn");
        allClear.addEventListener('click', (clear) => {
            // clear both screens
            let clearScreenTop = document.querySelector(".screenTop");
            while (clearScreenTop.firstChild) {
                clearScreenTop.removeChild(clearScreenTop.firstChild);
            }
            let clearScreenBottom = document.querySelector(".screenBottom");
            clearScreenBottom.removeChild(clearScreenBottom.firstChild);
            // clear all input & output values
            input1 = null;
            input2 = null;
            displayArray = [];
            equationResult = null;
            });
// delete (C)
const deleteInput = document.querySelector(".deleteBtn");
        deleteInput.addEventListener('click', (remove) =>{
            let removeChar = document.querySelector(".screenTop");
            removeChar.removeChild(removeChar.lastChild);
            displayArray.pop();// remove last element in display array when clicked C.
            });
// change colors.
let colorStyle = "";
function changeColor() {
    colorStyle = colorArray[Math.floor(Math.random() * colorArray.length)];
}
const colorArray = 
    ['rgb(141, 117, 168)',
    'rgb(232, 69, 69)',
    'rgb(57, 168, 74)',
    'rgb(61, 76, 92)',
    'rgb(242, 207, 141)', 
    'rgb(128, 177, 232)', 
    'rgb(128, 232, 192)',
    'rgb(125, 113, 113)'];
const colors = document.querySelector('.colorBtn');
            colors.addEventListener('click', (e) => {
                changeColor();
                document.getElementById("calculator").style.backgroundColor = colorStyle;
            });
// change fonts.
let font = "";
function changeFont() {
    font = fontArray[Math.floor(Math.random() * fontArray.length)];
}
const fontArray = ['serif', 'monospace', 'fantasy', 'Verdana', 'Cambria'];
const fonts = document.querySelector('.fontBtn');
const buttons = document.querySelectorAll('button');
const screenT = document.querySelector('.screenTop')
const screenB = document.querySelector('.screenBottom')
    fonts.addEventListener('click', (e) => {
        changeFont();
        buttons.forEach(button => {
            button.style.fontFamily = font;
            screenT.style.fontFamily = font;
            screenB.style.fontFamily = font;
        });
    });
            