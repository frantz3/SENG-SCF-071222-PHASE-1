document.querySelector('#uniqueValue').addEventListener('click',(event) => {
    let p = document.createElement('p')
    p.textContent = "Hello World"  
    event.target.append(p)
})


document.querySelector("body").addEventListener('keydown', (event)=>{
    switch (event.key) {
        case 'u': {
            document.body.style.color = 'blue'
            break
        }
        case 'b': {
            document.body.style.color = 'black'
            break
        }
        case 'r': {
            document.body.style.color = 'red'
            break
        }
        default: {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            document.body.style.color = "#" + randomColor;
        }
    }
})

fetch("http://shibe.online/api/shibes")
    .then((r) => r.json())
    .then(dogImage => {
        console.log(dogImage)
        const img = document.createElement('img')
        img.src = dogImage
        document.body.append(img)
    })