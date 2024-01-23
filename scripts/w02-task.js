/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName = 'Maverick Blancaver';
let currentYear = new Date().getFullYear(); 
let profilePicture = 'images/myphoto.png';



/* Step 3 - Element Variables */

const nameElemnt = document.getElementById ('name');
const foodElement = document.getElementById ('food');
const yearElement = document.querySelector ('#year');




/* Step 4 - Adding Content */

const profileImage = document.getElementById('profileImage');
profileImage.setAttribute('src', profilePicture);
profileImage.setAttribute('alt', `Placeholder Image`);


/* Step 5 - Array */


const favoriteFoods = ["Pizza", "Burgers", "Ice Cream", "Sisig", "Rice"];
foodElement.innerHTML = `Favorite Foods: ${favoriteFoods.join(', ')}`;

const newFavoriteFood = "Sushi";
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;

favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join(', ')}`;
