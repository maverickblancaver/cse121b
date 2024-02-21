// Declare global variables
const templesElement = document.getElementById("temples");
let templeList = [];

// Function: displayTemples
const displayTemples = (temples) => {
  // Clear existing temple cards
  reset();

  // Process each temple in the array
  temples.forEach((temple) => {
    // Create HTML elements
    const article = document.createElement("article");
    const h3 = document.createElement("h3");
    const img = document.createElement("img");

    // Set content and attributes
    h3.textContent = temple.templeName;
    img.src = temple.imageUrl;
    img.alt = temple.location;

    // Append elements
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

// Function: getTemples
const getTemples = async () => {
  try {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const data = await response.json();
    templeList = data;
    displayTemples(templeList);
  } catch (error) {
    console.error("Error fetching temple data:", error);
  }
};

// Function: reset
const reset = () => {
  templesElement.innerHTML = "";
};

// Function: filterTemples
const filterTemples = (temples) => {
  reset();
  const filter = document.getElementById("filtered").value;

  switch (filter) {
    case "utah":
      displayTemples(temples.filter((temple) => temple.location.includes("Utah")));
      break;
    case "notutah":
      displayTemples(temples.filter((temple) => !temple.location.includes("Utah")));
      break;
    case "older":
      case "older":
      displayTemples(temples.filter((temple) => new Date(temple.dedicated) <= new Date(1950, 0, 1)));
      break;

      break;
    case "all":
      displayTemples(temples);
      break;
    default:
      break;
  }
};

// Event Listener: filterTemples Element change
document.getElementById("filtered").addEventListener("change", () => {
  filterTemples(templeList);
});

// Initial call to getTemples function
getTemples();
