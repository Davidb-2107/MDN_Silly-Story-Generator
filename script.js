const customName = document.getElementById("customname"); //capture Enter custom name
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

//Fonction qui va permettre de récupèrer une valeur aléatoire dans un tableau
function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

//Store the first, big long, string of text inside a variable called storyText.
let storyText =
  "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day";

//==== ARRAYS-3 tableaux  ======
//Store the first set of three strings inside an array called insertX.
let insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
//console.log(insertX);

//Store the second set of three strings inside an array called insertY.
let insertY = ["the soup kitchen", "Disneyland", "the White House"];
//console.log(insertY);

//Store the third set of three strings inside an array called insertZ
let insertZ = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away"
];

//==== END OF ARRAYS ======

//3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

//Adds a click event listener to the randomize variable so that when the button it represents is clicked, the result() function is run.
randomize.addEventListener("click", result);

// FUNCTION result =========
function result() {
  let newStory = storyText;

  // Récupère une valeur aléatoire dans l'index des tableaux
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  //=====Remplace les insert X Y Z par une valeur aléatoire du tableau X Y Z===============
  let replaceInsertX = storyText.replace(
    /:insertx:/g, // /insertx:/g -> remplace l'ensemble des occurences de insertx
    randomValueFromArray(insertX)
  );
  let replaceInsertY = storyText.replace(
    ":inserty:",
    randomValueFromArray(insertY)
  );
  let replaceInsertZ = storyText.replace(
    ":insertz:",
    randomValueFromArray(insertZ)
  );

  if (customName.value !== "") {
    let name = customName.value;
    storyText.replace("Bob", customName.value);
  }

  if (document.getElementById("uk").checked) {
    let weight = Math.round(300);
    let temperature = Math.round(94);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
//=====END OF FUNCTION result===========

//=====================================================
// console.log(`replace text X => ${replaceInsertX}`);
// console.log(`replace text Y => ${replaceInsertY}`);
// console.log(`replace text Z => ${replaceInsertZ}`);
//=====================
