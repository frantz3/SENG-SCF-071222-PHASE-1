# Javascript Objects

- Implement objects
- Access object properties and nested properties
- Modify object Properties
- Iterate through objects using for...in
- Implement Object.keys, Object.values and Object.entries
- Use the spread operator to make a shallow copy of an object

# What is an POJO?

P.O.J.O stands for `Plain Old Javascript Object`. An object is a data type used to store other data. Arrays are a type of object. Much like an array a javascript object uses keys to store its values.

```js
// A few ways to create an object in Javascript
const obj = new Object();
const obj2 = Object.create();

// Most common way to create an object in JS
const pojo = {}; // Creates an object

// Below is an initialization of an object with 5 different properties.
const person = {
  name: "Eri",
  age: 94,
  teaching: true,
  occupation: "developer",
  sayPhrase: () => console.log("Make sense?"),
};

// access a value:
person.name; // => "Eri"
person["name"]; // => "Eri"

person.age; // => 94
person["age"]; // => 94

person.teaching; // => true
person["teaching"]; // => true

/*
  You can access values using both dot notation and bracket notation.
  
  Typically you will access values using dot notation, but when you want to make something more abstract and dynamic you may need to use bracket notation. 
  
  Bracket notation is very helpful when you have a variable that stores the key you want to access. i.e.
*/

const storedKey = "occupation";
person[storedKey]; // => "developer"

person.storedKey; // => undefined

person.occupation; // => "developer"

// Above you can see that in order to access occupation using the variable you have to use bracket notation!

// Functions, since they are first class can be assigned as values as well!!!

person.sayPhrase; // => () => console.log("Make sense?")
person.sayPhrase(); // => logs "Makes sense?"

// Reassigning variables / Adding variables:

person.favColor = "ultraviolet";
// This will add the key favColor to the person obj, and set it to "ultraviolet"

person.favColor; // => "ultraviolet"

// You can also change values of keys by setting them like so.
person.age = 10; // This changed the age from 94 to 10.

// Note bracket notation works the same way.
```

# Nested Objects

```js
const house = {
  address: "955 fifth way",
  rooms: [
    {
      roomType: "Bedroom",
      sqft: 200,
    },
    {
      roomType: "Bathroom",
      sqft: 100,
    },
  ],
  listing: {
    id: 44,
    retailer: "Zillow",
    askingPrice: 1000,
  },
};

// Above notice that the house object has two properties that are set to arrays (rooms) and Object (listing).

// When dealing with nested Object properties you have to be aware of what type you are accessing.

house.rooms; // RETURNS AN ARRAY
house.rooms.roomType; // gives an error because you can't access an array in the manner.
house.rooms[0].roomType; // Works because you are selecting the first index in the array and check its room type.
house.listing.id; // Since `house.listing` returns an object you can then use dot notation to check out its id.

// When dealing with objects always remember it is important to understand what data type are you dealing with as you access values.

// Deleting object properties
delete object.rooms; // This will delete the rooms key.
```

# Looping through Objects

```js
/* 
  There are a few ways you can loop through an object in js.
*/
const obj = {
  name: "Eri",
  favColor: "blue",
};

for (let key in obj) {
  console.log(key); // => This will log: name, favColor
  console.log(obj[key]); // => This will log: "Eri", "blue"
}

// Returns an array of all the keys of an object
Object.keys(obj); // => ["name", "favColor"]

// Returns an array of all of the values of an object
Object.values(obj); // => ["Eri", "blue"]

// Returns an array of arrays with key value pair
Object.entries(obj); // => [["name", "Eri"], ["favColor", "blue"]]
```
