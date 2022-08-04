const firstInput = document.querySelector("input");

const renderAPokeCard = (pokemonObj) => {
  // Creating and Selecting necessary Elements
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const button = document.createElement("button"); // <button></button>
  const ul = document.querySelector(".poke__list");

  // Styling Elements
  li.classList.add("poke__card");
  h3.classList.add("poke__header");
  img.classList.add("poke__img", "bounce");
  p.classList.add("poke__description");
  ul.style.flexDirection = "row";
  ul.style.flexWrap = "wrap";

  // Modifying Elements
  h3.innerText = pokemonObj.name;

  // add text for button "remove"
  button.innerText = "remove"; // <button>remove</button>

  img.src = pokemonObj.backImg;
  img.alt = pokemonObj.name;
  img.width = 150;

  p.innerText = pokemonObj.weight;

  // Appending Elements
  ul.append(li);
  li.append(h3, img, p, button);
  button.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
};

function addListenersForImages() {
  const imgList = document.querySelectorAll(".poke__img");
  console.log(imgList);
  imgList.forEach((image) => {
    image.addEventListener("mouseenter", (event) => {
      const foundPokeObj = pokemons.find(
        (poke) => event.target.alt === poke.name
      );
      event.target.src = foundPokeObj.frontImg;
    });

    image.addEventListener("mouseleave", (event) => {
      const foundPokeObj = pokemons.find(
        (poke) => event.target.alt === poke.name
      );
      event.target.src = foundPokeObj.backImg;
    });
  });
}

document.querySelector(".poke__img").parentElement.remove();

// Review the how to fetch by making a get pokemon function
// Make a get pokemon by id function
// make a get pokemon by name function

// Make a create pokemon function
// Make a update pokemon function
// make a delete pokemon function

// FETCH
// GET - POST - PATCH - DELETE
// C R U D

// VARIABLES + TYPES
// ARRAY
// OBJECTS
// FUNCTIONS
// DOM MANIPULATION
// EVENT LISTENERS
// FETCH - ASYNC

// CALLBACK IS JUST A FUNCTION THAT IS USED AS AN ARGUMENT

// GET DATA FROM A SERVER
// FETCH IS ASYNC REQUEST
// GET REQUEST!

const getAllPokemons = () => {
  fetch("http://localhost:3000/pokemons") // RETURNS PROMISE OBJECT
    .then((resp) => {
      // COMPLETED PROMISE!!!!
      console.log(resp); // RESP DATA NOT USABLE YET
      // BELOW WE NEED TO CONVERT THE JSON INTO POJO
      // WE HAVE NO IDEA HOW LONG ITS GOING TO TAKE
      // SO WE USE A PROMISE SO THAT WE CAN MAKE IT ASYNC
      return resp.json(); // RETURNS PROMISE AND THEN WE GET OUR POJO
    }) // .then handles the return of our promise!
    .then((pokeArr) => {
      // pokeArr.forEach(renderAPokeCard);
      pokeArr.forEach((pokeObj) => renderAPokeCard(pokeObj));
      addListenersForImages();
    })
    .catch((error) => console.error(error));
};

const getOnePokemon = (id) => {
  fetch(`http://localhost:3000/pokemons/${id}`)
    .then((resp) => resp.json())
    .then((pokemon) => renderAPokeCard(pokemon))
    .catch((error) => console.error(error));
};

// {
//   "id": 48,
//   "name": "venonat",
//   "frontImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
//   "backImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
//   "weight": 300
// },

// POST REQUEST
// WE WANT TO MAKE A POST REQUEST TO A RESOURCE
// CONFIG OUR FETCH
// WE ARE GOING THE POST TO THE END POINT THAT WE WANT
// if we want a post for
//        pokemon  / we use ENDPOINT: /pokemons
//        digimons / we use ENDPOINT: /digimons
const url = "http://localhost:3000/pokemons";
const configObj = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "CustomPoke",
    frontImg: "https://www.serebii.net/sunmoon/custom1.jpg",
    backImg: "https://www.serebii.net/sunmoon/custom2.jpg",
    weight: 30,
  }),
};

const postAPokemon = () => {
  fetch(url, configObj)
    .then((resp) => resp.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// PATCH REQUEST

// CALL FUNCTIONS HERE

// getAllPokemons();
getOnePokemon(4);
