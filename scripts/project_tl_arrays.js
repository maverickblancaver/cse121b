document.addEventListener('DOMContentLoaded', () => {
  // JavaScript code for array with template literals

  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];

  // Call the displayArray function when the DOM is loaded
  displayArray();

  function displayArray() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Fruits: ${fruits.join(', ')}`;
  }
});
