function changeTitle(newTitle) {
  const currentTitle = document.querySelector("h1");
  currentTitle.innerText = newTitle;
}

function sendToPage(newText) {
  const p = document.createElement("p");
  p.className = "slideIn";
  p.innerText = newText;
  document.body.append(p);
}


const arr = [
  "Alma Perez Bautista",
  "Carla Sachetti",
  "Elna Jean-Pierre",
  "Frantz Moseau",
  "Loren Sprague",
  "Michael Loseto",
  "Sendi Todoric"
]

const pickAtRandom = (items) => items[Math.floor(Math.random()*items.length)] 

console.log(pickAtRandom(arr));





// Group 1 -- "Alma Perez Bautista" |     "Carla Sachetti"
// Group 2 -- "Frantz Moseau"       |     "Loren Sprague",
// Group 3 -- "Michael Loseto"      |     "Sendi Todoric"