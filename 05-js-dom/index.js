// Object Review
// =============================================================================
// const pokemon = {
//   name: "bulbasaur",
//   imgUrl:
//     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
//   weight: 69,
// };

// const name = pokemon.name
// const imgUrl = pokemon.imgUrl
// const weight = pokemon.weight

//=============================================================================
// What is the DOM? (window, Document, Tree, Nodes)
// =============================================================================

// Document Object Model
const h1 = document.querySelector('.bounce') 
console.log(h1);


// QUERY SELECTORS // JUST FIND ITERATOR IT ONLY GRABS THE FIRST ELEMENT IT FINDS
// .querySelector()
// QUERY A CLASS: `.nameOfClass` 
// QUERY A ID: `#nameOfId`
// QUERY A TAG: `tagName`

// QUERYSELECTOR IS GOING TO SELECT ALL OF THE ELEMENTS THAT MATCH QUERY
// NODELIST AND HTMLCOLLECTIOSN ARE NOT ARRAYS
// WE CAN CONVERT THEM USING SPREAD OPERATOR
// document.querySelectorAll('script')
// NodeList(4) [script, script, script, script]
// document.getElementsByClassName("container")
// HTMLCollection [div#main.container, main: div#main.container]
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection















// SIDE NOTE HACKING GLASSDOOR
// document.querySelector('.hardsell')
// <div class=​"hardsell py-xl">​…​</div>​
// document.querySelector('.hardsell').remove()
// undefined
// document.querySelector('.hardsellContainer').remove()
// undefined
// document.body.style.overflow = "auto"
// 'auto'
// document.querySelector('.hardsellOverlay').remove()





// Removing Dom Elements
// =============================================================================
// HOW TO REMOVE ELEMENTS
// Select the element and use the .remove();


// =============================================================================
// Practice Selecting Elements and Using Methods (HTMLCollectiosn and NodeList)
// =============================================================================
// querySelectors
// getElements

// =============================================================================
// Practice Selecting Elements and Using Methods (HTMLCollectiosn and NodeList)
// =============================================================================

// =============================================================================
// Changing Dom Elements and Creating Dom Elements
// =============================================================================
// Removes the example card
const removeExample = () => document.querySelector(".poke__card").remove()
removeExample();

// GOES THROUGH EACH POKEMON IN POKEMONS ARRAY AND RENDERS A POKECARD
pokemons.forEach((pokemon) => renderAPokeCard(pokemon))


function renderAPokeCard(pokemonObj){

  // Creating and Selecting necessary Elements
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const ul = document.querySelector('.poke__list')
  
  // Styling Elements
  li.classList.add("poke__card");
  h3.classList.add("poke__header")
  img.classList.add("poke__img", "bounce")
  p.classList.add("poke__description")
  ul.style.flexDirection = "row"
  ul.style.flexWrap = "wrap"
  
  // Modifying Elements
  h3.innerText = pokemonObj.name

  img.src = pokemonObj.imgUrl
  img.alt = pokemonObj.name
  img.width = 150

  p.innerText = pokemonObj.weight

  // Appending Elements
  ul.append(li);
  li.append(h3, img, p);
}




pokemons.forEach(pokemon) => renderAPokeCard(+
  )
function renderAPokeCard(pokemonObl) {
  const li = document.createElement("li");
  const h3 = document.createElement('h3');
  const img =document.createElement("img");
  const p = document.createElement("p");

  // const pokemon = {
  //   name: "bulbasaur",
  //   imgUrl:
  //     "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  //   weight: 69,
  // };
  // pokeTitle - innerText

  //pokeImg

  //
   li.classList.add("poke_card,bounce");
   h3.classList.add("poke__header");
   img.classList.add('poke__img')
   li.appendChild(h3, img, p);
   debugger;
}
// =============================================================================
// Removing Dom Elements
// =============================================================================
