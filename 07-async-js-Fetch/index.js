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
const form = document.getElementById("poke-form")

form.addEventListener("submit", (e) => {
    e.preventDefault() // Prevents refresh
    const name = e.target.name.value
    const imgUrl = e.target.imgUrl.value
    const weight = e.target.weight.value
    const pokeObj = {
        name: name, 
        imgUrl: imgUrl, 
        weight: weight
    }

    renderAPokeCard(pokeObj);
    e.target.reset(); // Resets input fields!
}) 

document.addEventListener("keydown", (event) => {
    console.log(event);
    // NEED event.key
    // only want to make dark mode when event.key is period
    // if event.key is period we make the document darkmode
    if(event.key === '.'){
        event.target.style.backgroundColor = "black"
        event.target.style.color = "white"
        event.target.style.border = "white solid"
    } 
    
})

// Bonus: Make the picture change when mouseenter, then zoom out when mouseleaves
// =============================================================================
// WHERE TO ADD OUR FIRST EVENT LISTENER FOR MOUSE ENTER
document.querySelector(".poke__img").parentElement.remove()
const imgList = document.querySelectorAll(".poke__img")

// Have a nodeList, now we need to add an event listener to EACH item in that list

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

// FETCH AND PROMISE
// =============================================================================
// FETCH MAKES BY DEFAULT A GET REQUEST
// FETCH IS ALWAYS RETURN A PROMISE
fetch("http://localhost:3000/pokemons") // GIVES US BACK A PROMISE
  .then((resp) => resp.json()) // GIVE US BACK A PROMISE
  .then((data) => {
    data.forEach((pokemon) => renderAPokeCard(pokemon))
  })
  // .then handles that promise and waits for the resp
  // resp.json() converts our resp into JS 


// SYNCHRONOUS - An operataion takes place sequentially. 
// TECHNICAL TERM!!!
// ASYNCHRONOUS - When we do something that is going to take a 
// long time. 
// we continue with everything else, and let the 
// other thing run on its own























