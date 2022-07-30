const arr = [
  "Alma Perez Bautista",
  "Carla Sachetti",
  "Elna Jean-Pierre",
  "Frantz Moseau",
  "Loren Sprague",
  "Sendi Todoric",
  "Michael Loseto",
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

const createHeaders = (table, headers) => {
  const headerRow = document.createElement('tr')
  
  headers.forEach((header) => {
    const td = document.createElement('td')
    td.innerText = header
    td.style.fontWeight = 800
    td.style.borderWidth = "5px"
    td.style.borderColor = "black"
    headerRow.append(td)
  })
  
  table.append(headerRow)
}

// TODO: CREATE THE EMPTY CELLS DON'T POPULATE THEM YET


const create2dMatrix = (arr) => {
  const rowLength = 2;
  const twoDMatrix = [];
  
  for(let i=0; i<arr.length/2; i++){
    twoDMatrix.push(new Array(rowLength).map(() => ""))
  }

  if(arr % 2 !== 0){
    twoDMatrix[twoDMatrix.length-1].push("")
  }
  return twoDMatrix
}

const createEmptyCells = (table) => {
  // Create two cells for each student
  // If there is an odd number add the last student
  // to the last row
  const graph = create2dMatrix(arr);
  console.log(graph);
  
  for(let row = 0; row < graph.length; row++){
    const rowTr = document.createElement('tr')
    for(let col = 0; col < graph[row].length; col++){
      const cell = document.createElement('td')
      rowTr.append(cell)
    }
    table.append(rowTr);
  }

}

// TODO: CODE THAT CAN BE USED FOR ADDING THE STUDENTS

// const addStudents = () => {
//   const students = new Set(arr);
//   const length = students.length;
//   while(students.length > 0){
//     let current = pickAtRandom([...students]);
//     students.delete(current);

//   }

// }

const createTable = () => {
  const table = document.createElement('table')
  const headers = ['Partner 1', 'Partner 2']
  createHeaders(table, headers)
  createEmptyCells(table);
  document.body.append(table)
}

const pairProgramming = () => {
  document.body.innerHTML = "";
  createTable();
}

// pairProgramming();