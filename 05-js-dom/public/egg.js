const arr = [
  "Alma Perez Bautista",
  "Carla Sachetti",
  "Elna Jean-Pierre",
  "Frantz Moseau",
  "Loren Sprague",
  "Sendi Todoric",
  "Michael Loseto",
  "Eriberto Guzman",
];

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

// Commented it out so it no longer sends arr list to the page
// for(let idx in arr){
//   let element = arr[idx];
//   setTimeout(() => sendToPage(element), (500 * Number(idx)))
// }

const pickAtRandom = (items) => items[Math.floor(Math.random() * items.length)];
