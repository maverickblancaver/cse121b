/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/* Function Declaration */
function add(number1, number2) {
    return number1 + number2;
}

/* Function Declaration */
function addNumbers() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    document.getElementById('sum').value = add(num1, num2);
}

/* Event Listener */
document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression */
const subtract = function(number1, number2) {
    return number1 - number2;
};

/* Function Expression */
const subtractNumbers = function() {
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    document.getElementById('difference').value = subtract(num1, num2);
};

/* Event Listener */
document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Functions */
const multiply = (number1, number2) => number1 * number2;

/* Arrow Function */
const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    document.getElementById('product').value = multiply(num1, num2);
};

/* Event Listener */
document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Your Choice - Function Declaration and Expression */
function divide(dividend, divisor) {
    return dividend / divisor;
}

const divideNumbers = () => {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    document.getElementById('quotient').value = divide(dividend, divisor);
};

/* Event Listener */
document.getElementById('divideNumbers').addEventListener('click', divideNumbers);


// Decision Structure

document.getElementById('getTotal').addEventListener('click', function() {
    // Get user input from the subtotal field
    const subtotalInput = document.getElementById('subtotal');
    const subtotal = parseFloat(subtotalInput.value);

    // Check if the input is a valid numeric amount (optional)
    if (isNaN(subtotal)) {
        alert('Please enter a valid numeric amount in the Subtotal field.');
        return;
    }

    // Check if the membership checkbox is checked
    const isMember = document.getElementById('member').checked;

    // Apply a 20% discount if the user is a member
    const discount = isMember ? 0.2 : 0;

    // Calculate the total due
    const totalDue = subtotal - (subtotal * discount);

    // Display the total due with two decimal places
    const totalSpan = document.getElementById('total');
    totalSpan.textContent = `$${totalDue.toFixed(2)}`;
});





// ARRAY METHODS - Functional Programming
const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


// Output Source Array
document.getElementById('array').textContent = sourceArray.join(', ');

// Output Odds Only Array
const oddsArray = sourceArray.filter(num => num % 2 !== 0);
document.getElementById('odds').textContent = oddsArray.join(', ');

// Output Evens Only Array
const evensArray = sourceArray.filter(num => num % 2 === 0);
document.getElementById('evens').textContent = evensArray.join(', ');

// Output Sum of Org. Array
const sumOfArray = sourceArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfArray').textContent = sumOfArray;

// Output Multiplied by 2 Array
const multipliedArray = sourceArray.map(num => num * 2);
document.getElementById('multiplied').textContent = multipliedArray.join(', ');

// Output Sum of Multiplied by 2 Array
const sumOfMultiplied = multipliedArray.reduce((acc, num) => acc + num, 0);
document.getElementById('sumOfMultiplied').textContent = sumOfMultiplied;
