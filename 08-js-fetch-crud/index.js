const form = document.getElementById("poke-form");
const updateForm = (e, id) => {
  e.preventDefault();

  const name = e.target.name.value;
  const frontImg = e.target.frontImg.value;
  const backImg = e.target.backImg.value;
  console.log(frontImg, backImg);
  const weight = e.target.weight.value;

  const pokeObj = {
    name: name,
    frontImg: frontImg,
    backImg: backImg,
    weight: weight,
  };

  updateAPokemon(id, pokeObj);
  e.target.reset();
  // e.target.removeEventListener("submit", (e) => updateForm(e, id));
};

const submitForm = (e) => {
  e.preventDefault(); // Prevents refresh
  const name = e.target.name.value;
  const frontImg = e.target.frontImg.value;
  const backImg = e.target.backImg.value;
  console.log(frontImg, backImg);
  const weight = e.target.weight.value;

  const pokeObj = {
    name: name,
    frontImg: frontImg,
    backImg: backImg,
    weight: weight,
  };

  postAPokemon(pokeObj); // THIS SENDS THE POST
  e.target.reset(); // Resets input fields!
};

form.addEventListener("submit", submitForm);

const firstInput = document.querySelector("input");

// It receives pokemon data from getOnePokemon function
// It targets the form and changes the inputs to the data
// we received.

const movePokemonDataToForm = (pokemonData) => {
  const form = document.querySelector("form");
  form.children[0].textContent = "UPDATE POKEMON";
  form.name.value = pokemonData.name;
  form.frontImg.value = pokemonData.frontImg;
  form.backImg.value = pokemonData.backImg;
  form.weight.value = pokemonData.weight;

  form.removeEventListener("submit", submitForm);
  form.addEventListener("submit", (e) => updateForm(e, pokemonData.id));
};

const renderAPokeCard = (pokemonObj) => {
  // debugger;

  // Creating and Selecting necessary Elements
  const li = document.createElement("li");
  const h3 = document.createElement("h3");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const button = document.createElement("button");
  const updateButton = document.createElement("button"); // <button></button>
  const ul = document.querySelector(".poke__list");

  // GIVE EACH POKEMONS CARD THE ID OF THE POKEMON
  li.dataset.id = pokemonObj.id;

  // Styling Elements
  li.classList.add("poke__card");
  h3.classList.add("poke__header");
  img.classList.add("poke__img", "bounce");
  p.classList.add("poke__description");
  ul.style.flexDirection = "row";
  ul.style.flexWrap = "wrap";

  // add text for button "remove"
  updateButton.innerText = "update"; // <button>remove</button>
  button.innerText = "remove"; // <button>remove</button>
  img.width = 150;

  // Modifying Elements
  h3.innerText = pokemonObj.name;
  img.src = pokemonObj.backImg;
  img.alt = pokemonObj.name;

  p.innerText = pokemonObj.weight;

  // Appending Elements
  ul.append(li);
  li.append(h3, img, p, updateButton, button);
  button.addEventListener("click", (event) => {
    const li = event.target.parentElement;
    deletePokemonRequest(li.dataset.id);
    li.remove();
  });

  updateButton.addEventListener("click", (event) => {
    const pokeId = event.target.parentElement.dataset.id;
    getOnePokemon(pokeId);
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
    .then((pokemon) => movePokemonDataToForm(pokemon))
    .catch((error) => console.error(error));
};

// {
//   "id": 48,
//   "name": "venonat",
//   "frontImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
//   "backImg": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/48.png",
//   "weight": 300
// },

// CALL FUNCTIONS HERE

// getAllPokemons();
getAllPokemons();

// USING THE FORM TO POST A POKEMON!!!

// POST REQUEST
// WE WANT TO MAKE A POST REQUEST TO A RESOURCE
// CONFIG OUR FETCH
// WE ARE GOING THE POST TO THE END POINT THAT WE WANT
// if we want a post for
//        pokemon  / we use ENDPOINT: /pokemons
//        digimons / we use ENDPOINT: /digimons

const postAPokemon = (pokeObj) => {
  const url = "http://localhost:3000/pokemons";
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokeObj),
  };
  fetch(url, configObj)
    .then((resp) => resp.json())
    .then((data) => renderAPokeCard(data))
    .catch((error) => console.error(error));
};

// PATCH REQUEST - update a singular resource

// WHATS THE URL? - http://localhost:3000/pokemons/:id
// we want to target a particular resource using the id
// and pass in a config object.

// WHAT IS THE CONFIG OBJECT?
// method of patch
// expects in the body the key that you want to change
// PATCH YOU DONT HAVE TO PASS IN THE ENTIRE OBJ ONLY THE PROPERTIES YOU WANT TO CHANGe

// PUT VS PATCH

// PUT UPDATES THE ENTIRE OBJECT WITH YOUR BODY
// PATCH ONLY UPDATES THE KEY VALUE PAIRS THAT YOU PASS IN
const updateAPokemon = (id, updatedPokeObj) => {
  const configObj = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPokeObj),
  };

  // WHAT DO WE GET BACK?
  fetch(`http://localhost:3000/pokemons/${id}`, configObj)
    .then((r) => r.json())
    .then((data) => updateAPokemonCard(data));
};

const updateAPokemonCard = (data) => {
  const listOfLis = document.querySelectorAll(".poke__card");
  const arrOfLis = Array.from(listOfLis);

  const foundLi = arrOfLis.find((li) => {
    return Number(li.dataset.id) === data.id;
  });

  const h3 = foundLi.querySelector("h3");
  const img = foundLi.querySelector("img");
  const p = foundLi.querySelector("p");

  // debugger;
  if (!foundLi) {
    alert("POKEMON DOES NOT EXIST");
  } else {
    h3.innerText = data.name;
    img.src = data.backImg;
    img.alt = data.name;

    p.innerText = data.weight;
  }
};

// DELETE REQUEST

// WHAT DOES THE URL LOOK LIKE
// "http://localhost:3000/pokemons/52"

// WHAT DOES THE CONFIG OBJECT LOOK LIKE -

// WHAT DO WE GET BACK
// SUCCESS STATUS CODE BUT DOESN'T RETURN ANYTHING BACK

const deletePokemonRequest = (id) => {
  const configObj = {
    method: "DELETE",
  };

  fetch(`http://localhost:3000/pokemons/${id}`, configObj)
    .then((r) => r.json())
    .then((data) => alert("POKEMON SUCCESFULLY DELETED"));
};

// WE CAN MAKE A REQUEST TO THE SERVER FROM THE FRONT END EASILY!!
// WE THEN NEED TO TAKE THE RESPONSE DATA AND UPDATE OUR FRONTEND

// FLOW Update backend, get response, then update frontend

// PATCH
// change method to "PATCH" and what we send in the body will be what is changed
// RETURNS UPDATED RESOURCE

// PUT
// Change method to "PUT" will change the entire resource
// RETURNS UPDATED RESOURCE

// DELETE
// Change method to "DELETE" no need to add anything else, no headers, no body
// RETURNS NOTHING
