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
