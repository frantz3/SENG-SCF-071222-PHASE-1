// Object Review
// =============================================================================
const pokemon = {
  name: "bulbasaur",
  imgUrl:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  weight: 69,
};

// const name = ?
// const imgUrl = ?
// const weight = ?

// =============================================================================
// What is the DOM? (window, Document, Tree, Nodes)
// =============================================================================

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
