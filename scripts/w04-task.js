/* LESSON 3 - Programming Tasks */

/* Profile Object */
let myProfile = {};

/* Populate Profile Object with placesLived objects */

myProfile.name = "Maverick Blancaver"; 
myProfile.photo = "images/myphoto.png"; 
myProfile.favoriteFoods = [
  'Pizza',
  'Burger',
  'Sisig',
];
myProfile.hobbies = [
  'Weight Lifting',
  'Cycling',
  'Photography',
  
];
myProfile.placesLived = [];

// Add items to the placesLived array
myProfile.placesLived.push(
  {
    place: 'Manila, Philippines',
    length: '10 Years'
  }
);
// Add additional places lived as needed
myProfile.placesLived.push(
  {
    place: 'Laguna, Philippiines',
    length: '13 years'
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List */
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  document.querySelector('#places-lived').appendChild(dt);
  document.querySelector('#places-lived').appendChild(dd);
});
