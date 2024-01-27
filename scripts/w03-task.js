/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
// Function Definition - Add Numbers
function addNumbers() {
    const num1 = parseFloat(document.getElementById('add1').value);
    const num2 = parseFloat(document.getElementById('add2').value);
    const sum = num1 + num2;
    document.getElementById('sum').value = sum;
}

// Function Expression - Subtract Numbers
const subtractNumbers = function () {
    const num1 = parseFloat(document.getElementById('subtract1').value);
    const num2 = parseFloat(document.getElementById('subtract2').value);
    const difference = num1 - num2;
    document.getElementById('difference').value = difference;
};

// Arrow Function - Multiply Numbers
const multiplyNumbers = () => {
    const num1 = parseFloat(document.getElementById('factor1').value);
    const num2 = parseFloat(document.getElementById('factor2').value);
    const product = num1 * num2;
    document.getElementById('product').value = product;
};

// Open Function Use - Divide Numbers
function divideNumbers() {
    const dividend = parseFloat(document.getElementById('dividend').value);
    const divisor = parseFloat(document.getElementById('divisor').value);
    const quotient = dividend / divisor;
    document.getElementById('quotient').value = quotient;
}

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
