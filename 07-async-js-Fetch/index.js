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


// Dom Manipulation Review (Target the new form)
// =============================================================================






























// What are events? (Taking a look at different events with the same callback)
// =============================================================================






























// Removing an Element by adding a button to the card
// =============================================================================






























// Submitting The Form
// =============================================================================






























// Bonus: Change to dark mode by pressing the '.' key
// =============================================================================






























// Bonus: Make the picture zoom in when mouseenter, then zoom out when mouseleaves
// =============================================================================






























