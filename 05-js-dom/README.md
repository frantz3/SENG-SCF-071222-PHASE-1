# JS DOM

## SWBAT

---

- Explain what the DOM is
- Traverse the DOM tree
- Select single dom elements with .querySelector() and getElementById()
- Select multiple elements with .querySelectorAll() and .getElementsByClassName()
- add context with .textContent
- Create elements with .createElement
- Append elements to the dom with .appendChild and .append
- Explain the dangers of innerHTML and when it's safe to use
- remove content with .remove

## Document Object Model

---

The DOM is how we interact with our webpages in JS. A web page is represented by a tree of Node Objects. It is possible to target, alter, and create, these nodes to modify the webpage.

```js
// The window object is an Object with methods and properties attached to the DOM
window;

// The Document is an object inside the window that allows us to manipulate the DOM
document;
```

## Selecting DOM Elements

---

```js
/*
  Below will be examples of how to select elements from the DOM
*/

// QuerySelector is one of the most powerful selectors out there.
// It will search the DOM and return the first element matching your query.

// 'tag' looks for the first matching tag
.querySelector('div') // finds the first div tag

// '#id' will look for the first matching id
.querySelector('#fooId') // finds the first element with the id 'fooId'

// '.class' will look for the first matching class
.querySelector('.fooClass') // find the first element with the class 'fooClass'

// Since Ids are supposed to be unique in your html you can also use
.getElementById('fooId') // find the element with an id of 'fooId'

// =========================================================================================
// Similarly we can also use the following method to find all elements with their classNames
// Although since classes are not meant to be unique in html, this will return more than one element
.getElementsByClassName('fooClass') // gets all the elements with a class of 'fooClass'
// Also Notice above it says getElements <- plural

// Similar to above this next method gives us back multiple elements
.getelementsByTagName('div') // gets all elements that are divs

// NOTICE: These two methods above return an HTMLCollection
// HTMLCollections are not arrays. They do not allow you to use some array methods like forEach.

// =========================================================================================
// This last one returns a NodeList
// Also not an array but it allows you to use forEach.
.querySelectorAll() // Will return all of the elements that match the query string. (i.e. 'div' or '.fooClass')

// Converting HTMLCollections and NodeList

const nodeList = document.querySelectorAll("div") // gives us a nodeList
const nodeListArr = [...nodeList]                 // Creates a copy of type array
const nodeListArr = Array.from(nodeList)          // Another example of converting to array

const htmlCollection = document.getElementsByClassName('.fooClass') // gives us an HTMLCollection
const collectionArr = [...htmlCollection]                           // Creates a copy of type array
const collectionArr = Array.from(htmlCollection)          // Another example of converting to array
```

# Basics of Changing and Creating DOM Elements

```js
const h1 = document.querySelector("h1"); // grabs the first h1 on the document

// Text content returns the full text of the node.
// We can then change that content to modify what the h1 shows
h1.textContent = "Changing the content of the h1";

const div = document.querySelector("div"); // grabs the first div on the document

// innerHTML can add HTML content to an element. Use of this should be limited as it's slow, it clears out everything, removes event listeners, and most importantly, is vulnerable to cross-site-scripting attacks

div.innerHTML = `
 <p> use this with caution </p> 
`;
// Above inside the div we added a p tag to its HTML

// CreateElement creates a new element when provided with a tag name
//
const li = document.createElement("li"); // this will create an li tag

li.textContent = "Some list item";

// Unless appended into the document this LI will not appear on your document

// typically you would see something of this effect.

const ul = document.querySelector("ul"); // finds an unordered list

ul.append(li); // appends the list item into the unordered list
```

## Removing Elements

---

Once selected, elements can also be removed in a few ways.

```js
// removing a specific element
div.remove();

// Clear the contents of an element
div.innerHTML = "";
```
