const h1 = document.createElement("h1");

document.body.append(h1);

h1.textContent = "Hello World";

const div = document.createElement("div");

document.body.append(div);

div.setAttribute('id', "uniqueValue");

const p = document.createElement('p');

div.appendChild(p);

p.setAttribute('class', 'lorem ipsum')

document.addEventListener('keydown', (event) => {

    if (event.key === 'r') {
        document.body.style.color = "red"
    }
    else if (event.key === 'b') {
        document.body.style.color = "black"
    }

    else if (event.key === 'u') {
        document.body.style.color = "blue"
    }
});

div.addEventListener('click', (e) => {
    e.target.appendChild(p)
} )