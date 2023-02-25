A simple calculator application that return the calculation results on a screen.

First I created a list of empty global variables which are used to store the input value when user clicks the buttons on the calculator app and display them accordingly on the screen. The first input is stored inside an empty array, which is then joint and converted into floating numbers.

The first input uses a function to listen to the click event, but it is only stored once an operator is clicked, this is to make sure the user can click as many buttons as they want for the first input, it will only return once a operator is clicked.

The second input uses the same function to be stored as a value, but instead of using the operator as a condition, it uses the execute function, in this is case, the '=' sign. 

Next, a function will execute the calculation for both inputs once the equal sign is clicked and return those result on the screen, in this case, the DOM tree.

Another function, reset, will pop the last element of the input array when clicked, which lets user remove a digit of the input if they wanted to.

Finally, the allClear function will remove and reset all values and display, let user start a new calculation.

