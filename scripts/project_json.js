// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Fetch JSON data from the provided URL
    fetch('https://run.mocky.io/v3/199b3ad6-ef71-4b9e-a83c-edb628deac7b')
        .then(response => response.json())
        .then(data => {
            // Create HTML representation of the JSON data
            const jsonDataDiv = document.getElementById('jsonData');
            jsonDataDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        })
        .catch(error => {
            console.error('Error fetching JSON:', error);
        });
});
