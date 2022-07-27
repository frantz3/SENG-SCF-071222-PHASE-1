


// Dom Manipulation Review (Target the new form)
// =============================================================================

// const form = document.getElementById("poke-form")
// Gives us the first Input found
const firstInput = document.querySelector("input")

// console.log(firstInput.value)
// console.log(firstInput)
// What are events? (Taking a look at different events with the same callback)
// =============================================================================

// const callback = (event) => console.log(event)

// document.querySelector('h1').addEventListener("click", callback)
// document.addEventListener("scroll", callback)
// const listOfImages = document.querySelectorAll('.poke__img')
// Array.from(listOfImages).map(img => img.addEventListener("mouseenter", callback))
// document.querySelector('.poke__img').addEventListener("mouseleave", callback)
// document.addEventListener("wheel", callback)

// Removing an Element by adding a button to the card
// =============================================================================



pokemons.forEach((pokemon) => renderAPokeCard(pokemon))


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

  img.src = pokemonObj.imgUrl
  img.alt = pokemonObj.name
  img.width = 150

  p.innerText = pokemonObj.weight

  // Appending Elements
  ul.append(li);
  li.append(h3, img, p, button);
  button.addEventListener('click', (event) => {
    event.target.parentElement.remove()
    // li.remove()
    // This works only because the li is defined the same time that 
    // the event listner is defined. 
    // In a lot of cases we define the event listener outside of where
    // the render happened
  } )
}

// Submitting The Form
// =============================================================================


// First thing we need to do is select the form!
// Add an event listener to the FORM
// NOTE DO NOT ADD THE SUBMIT EVENT LISTENER TO BUTTON

const form = document.getElementById("poke-form")
console.log(form);

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
    console.log(pokeObj)

    // COPY PASTE ALL THAT CODE ABOVE TO RENDER A POKECARD!

    renderAPokeCard(pokeObj);
    e.target.reset(); // Resets input fields!
}) 


// WHEN WE CLICK ON THE BUTTON THE PAGE RELOADS WTH!

// Bonus: Change to dark mode by pressing the '.' key
// =============================================================================



// STEP 1 NEED EVENT LISTENER
// keydown

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

// STEP 2 WE NEED TO CHANGE THE BACKGROUND COLOR = black

// STEP 3 WE NEED TO CHANGE THE FONT COLOR

// Bonus: Make the picture flip between different pictures when mouseenter and when mouseleaves
// =============================================================================






























