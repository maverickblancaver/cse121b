// JavaScript code for JSON 

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display JSON data
    fetch('sample1.json')
      .then(response => response.json())
      .then(data => {
        const userDataElement = document.getElementById('userData');
        userDataElement.innerHTML = `
          <p>Name: ${data.name}</p>
          <p>Age: ${data.age}</p>
          <p>City: ${data.city}</p>
          <p>Interests: ${data.interests.join(', ')}</p>
        `;
      })
      .catch(error => console.error('Error fetching JSON:', error));
  });
  