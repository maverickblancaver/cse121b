document.addEventListener('DOMContentLoaded', () => {
  // JavaScript code for conditional branching

  function checkEligibility() {
    // Get the user's age from the input field
    const ageInput = document.getElementById('age');
    const age = parseInt(ageInput.value);

    // Check eligibility based on age
    let resultMessage;
    let eligibilityStatus;

    if (isNaN(age)) {
      resultMessage = 'Please enter a valid age.';
      eligibilityStatus = '';
    } else {
      eligibilityStatus = age >= 18 ? 'You are eligible to vote!' : 'Sorry, you are not eligible to vote yet.';
      resultMessage = '';
    }

    // Display the result message
    const resultElement = document.getElementById('result');
    resultElement.textContent = resultMessage;

    // Display the eligibility status
    const eligibilityStatusElement = document.getElementById('eligibilityStatus');
    eligibilityStatusElement.textContent = eligibilityStatus;
  }
});
