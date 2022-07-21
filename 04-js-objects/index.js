// Array Reviews
// =============================================================================

// What is an Array ? 

/* 
    List of names,
    List of objects,
    List of whatever in there

    
    List of elements

*/

// const arr = [
//     "Alma Perez Bautista",
//     "Carla Sachetti",
//     "Elna Jean-Pierre", 
//     "Frantz Moseau",    
//     "Loren Sprague",    
//     "Sendi Todoric",    
//     "Michael Loseto",
//     "Eriberto Guzman",
//   ]
// Indexes start their count at 0. 

const carla = arr[1]
// Add to the end of the array
arr.push("Desh")

// Remove from the end of the array
arr.pop()

// adding to the beginning
arr.unshift("Eri")

// Removing from the beginning of the array
arr.shift();


// Looping

// // For of => What is x? -> x is ELEMENT
// for(let x of arr){
//     console.log(x)
// }

// // in will give us the key, index -> x is INDEX
// for(let x in arr){
//     console.log(x)
// }

// // i goes from 0 to the end of the array
// for(let i=0; i<arr.length; i++){

// }


// Callbacks and Array Iterations ( Bag of Marbles )
// =============================================================================
//
const bagOfMarbles = ["blue", "red", "black", "cyan", "green", "yellow", "orange"];
let count = 0
function countTheMarbles(marble) {
    return marble
}
    count=count++


bagOfMarbles.forEach(countTheMarbles)

function cleanMarble(marble) {
    const cleanMarble = "Clean" + marble;
     
}
const bagOfMarbles = [
    "blue",
    "red", 
    "black", 
    "green",
    "cyan",  
    "yellow", 
    "orange"
];
// Foreach fCount
// count the number of marbles
// CANNOT BREAK OUT OF IT
let count = 0;
function countTheMarble(marble){
    // count++
    // count+=1
    count = count + 1
    console.log("marble: ", marble)
    console.log("count: ", count)
}

// NON DESTRUCTIVE THEY DONT MODIFY THE ORIGINAL ARRAY
// bagOfMarbles.forEach(cleanAMarble)
// RETURNS undefined!


// map fClean
// map will MAP to a new array the return value of your callback
function cleanAMarble(marble){
    const cleanMarble = "Clean " + marble
    // console.log(cleanMarble)
    return cleanMarble
}

const newBagOfM = bagOfMarbles.map(cleanAMarble)


// find fGreen
// Find looks at the callback and returns the element that makes the callback return true


// Find a marble thats green and return the first element it finds
// const foundGreenMarble = bagOfMarbles.find(findGreen)
// If it doesn't find it we return undefined
function findGreen(marble){
    console.log("marble: ", marble)
    return marble === "green"
}


// filter fNoLetterY
// Filter looks at the callback and returns a new array with all the elements that make the callback return true.
// function findGreen(marble){
//     console.log("marble: ", marble)
//     return marble === "green"
// }
"test".includes("t")        // => true
"eri".includes("z")         // false


function noLetterA(element){
    return !element.includes("a");
}

// MULTIPLE CHOICE QUESTION:
// WHICH ONE OF THESE STATEMENTS ARE INCORRECT?
//
// A. map returns a new array
// B. filter returns the first element that it finds [X]
// C. forEach returns undefined
// D. forEach cannot be stopped by a break statement

// =============================================================================
// What is POJO? Creating / Accessing(dot and bracket) / Updating / Deleting
// =============================================================================

// POJO IS A PLAIN OLD JAVASCRIPT OBJECT (POJO)

// creating a POJO:

let arr1 = [
    "name",
]
// Its a way for us store information
// Key Value pairs
let person = {
    name: "Pepe",
    age: 94,
    "family": [],
    sayPhrase: () => console.log("LETS DO IT!")
}

// DOT NOTATION ALLOWS US TO ACCESS THE PROPERTIES OF AN OBJECT
// BRACKET NOTATION TO ACCESS THE VALUES
// ACCESS A VALUE WITH A VARIABLE WE USE BRACKET NOTATION

person.name; // Pepe
person['age']; // 94

// function accessPerson(obj, key){
//     console.log(obj[key])
// }

const key = 'age'
person.key  // => undefined
person[key] // => 94

// WHEN ACCESSING IT IS IMPORTANT TO KNOW WHAT THE VALUE YOU ARE DEALING WITH IS
person.family
person.family.push("ERI")
person.family[0] = "ALBERT"
person.sayPhrase()

delete person.age; // DELETES KEY AND VALUE

// Nested Objects (Using Player) / Describing how to loop through Object
// =============================================================================
// Player is defined else where
// use Object.keys() || for in loop

// LETS GET INFO FROM PLAYER

// const season = player.parameters.season
// const dataArr = player.response

// const realPlayer = dataArr[0].player

const realPlayer = player.response[0].player

Object.keys(player) // ALL THE KEYS IN AN ARRAY
Object.values(player) // ALl of the VAlues in an Array
Object.entries(player) // AN ARRAY KEY VALUE PAIRS IN AN ARRAY

// REALLY HELPFUL WHEN YOU DO GRAPH ALGORITHMS!
for(let key in realPlayer){
    console.log(key)
}
