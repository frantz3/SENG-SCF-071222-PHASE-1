const firstInput = document.querySelector("input")


function renderAPokeCard(pokemonObj){

  // Creating and Selecting necessary Elements
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const img = document.createElement('img');
  const p = document.createElement('p');
  const button = document.createElement('button') // <button></button>
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

  // add text for button "remove"
  button.innerText = "remove" // <button>remove</button>

  img.src = pokemonObj.backImg
  img.alt = pokemonObj.name
  img.width = 150

  p.innerText = pokemonObj.weight

  // Appending Elements
  ul.append(li);
  li.append(h3, img, p, button);
  button.addEventListener('click', (event) => {
    event.target.parentElement.remove()
  } )
}

document.querySelector(".poke__img").parentElement.remove()
const imgList = document.querySelectorAll(".poke__img")

imgList.forEach((image) => {
  image.addEventListener('mouseenter', (event) => {
    const foundPokeObj = pokemons.find((poke) => event.target.alt === poke.name)
    event.target.src = foundPokeObj.frontImg
  })

  image.addEventListener('mouseleave', (event) => {
    const foundPokeObj = pokemons.find((poke) => event.target.alt === poke.name)
    event.target.src = foundPokeObj.backImg
  })
})

// Review the how to fetch by making a get pokemon function
// Make a get pokemon by id function
// make a get pokemon by name function


// Make a create pokemon function
// Make a update pokemon function
// make a delete pokemon function



















