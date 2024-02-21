document.addEventListener('DOMContentLoaded', () => {
  // JavaScript code for array with template literals

  const fruits = ['Apple', 'Banana', 'Orange', 'Grapes', 'Watermelon'];

  displayArray();

  function displayArray() {
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Fruits: ${fruits.join(', ')}`;
  }
});
