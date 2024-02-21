function displayGreeting() {
    let hourInput = document.getElementById('hourInput');
    let outputElement = document.getElementById('output');
    
    let hour = parseInt(hourInput.value);

    if (isNaN(hour) || hour < 0 || hour > 23) {
        outputElement.textContent = 'Please enter a valid hour (0-23)';
        return;
    }

    if (hour >= 6 && hour < 12)
        outputElement.textContent = 'Good Morning';
    else if (hour >= 12 && hour < 18)
        outputElement.textContent = 'Good Afternoon';
    else
        outputElement.textContent = 'Good Evening';
}
