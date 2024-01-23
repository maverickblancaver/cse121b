/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Maverick Blancaver';
let currentYear  
let profilePicture = 'images/myphoto.png';



/* Step 3 - Element Variables */

const nameElemnt = document.getElementById ('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector ('#year');




/* Step 4 - Adding Content */

nameElemnt.innerHTML = `<strong>${fullName}</strong>`;
imageElement.setAttribute('src', profilePicture);
profileImage.setAttribute("alt", `Profile image of ${myphoto.png}`);


/* Step 5 - Array */


const favoriteFoods = ["Pizza", "Burgers", "Ice Cream", "Sisig", "Rice"];
foodElement.innerHTML = `Favorite Foods: ${favoriteFoods.join(', ')}`;

const newFavoriteFood = "Sushi";
favFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods.join(', ')}`;


