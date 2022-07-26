<style>
  table{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .cell {
    height: 500px;
    width: 300px;
    border: 5px black double;
    
  }
  .cell{
    width: 30vw;
  }
  .cell__solution{
    width: 70vw;
  }

</style>

<table>
  <tr>
    <th>Questions</th>
    <th>Solutions</th>
  </tr>
  <tr class="row">
    <td class="cell">Write down the 7 primitive data types, with an example. I.E. `String:"example"</td>
    <td class="cell cell__solution">
      <ol>
        <li>String: "example"</li>
        <li>Number: 123</li>
        <li>Boolean: true</li>
        <li>undefined: value not defined yet</li>
        <li>null: Explicitly does not have a value</li>
        <li>bigint: used for numbers too big for Number type</li>
        <li>symbol: used for unique keys</li>
      </ol>
    </td>
  </tr>
  <tr class="row">
    <td class="cell">Write out your definition for what a function and a callback is. Give examples of a <strong>named function, arrow function, and an anonymous arrow function</strong> </td>
    <td class="cell cell__solution">
      <ul>
        <li>Function: A set of instructions we give to our code that will execute at a later time</li>
        <li>Callback: A function that is used as an argument</li>
        <li>

```js
function foo() {}
```

  </li>
        <li>

```js
const arrowFoo = () => {};
```

  </li>
        <li>

```js
() => {};
```

  </li>
      </ul>
    </td>
  </tr>
  <tr class="row">
    <td class="cell">
    <p>
    Your Definition of an array, forEach, map, find, and filter. (For the iterators please specify the return values, and how callbacks interact). Give examples of each iterator. I.E. 
    </p>
  
  ```js    
  arr.forEach((el) => console.log(el))
  ```  
  </td>
    <td class="cell cell__solution">
      <ul>
        <li>Array: A collection of elements</li>
        <li>forEach: returns undefined and the callbacks return has no affect on the result</li>
        <ul>
          <li>

```js
arr.forEach((el) => console.log(el));
```

  </li>
        </ul>
        <li>Map: returns a new collection based on what the callback returns </li>
                <ul>
          <li>

```js
const newDoubledArr = numsArr.map((el) => el * 2);
```

  </li>
        </ul>
        <li>Find: returns the first element found that makes the callback return true. If no element is found it returns undefined</li>
         <ul>
          <li>

```js
const foundEl = numsArr.find((el) => el === 2);
```

  </li>
        </ul>
        <li>Filter: returns a new array of all the elements that make the callback return true</li>
         <ul>
          <li>

```js
const newArrNumsNotTwo = numsArr.filter((el) => el !== 2);
```

  </li>
        </ul>
      </ul>
    </td>
  </tr>
  <tr class="row">
    <td class="cell">
    <p>
    Your definition of an object. Write a complex object that describes a home. I.E 
    </p>
  
  ```js
  const home = { 
    address: { 
      streetName: "fake", 
      streetNum: 555, 
      zip: 10000
    }, 
    rooms: [...], 
    ...
    }
  ```
  </td>
    <td class="cell cell__solution">
      <ul>
        <li>Object: A collection of key value pairs, used to store data</li>
        <li>

```js
const home = {
  address: {
    streetName: "fake",
    streetNum: 555,
    zip: 10000,
  },
  rooms: [
    {
      id: 1,
      sqft: 500,
      closet: 1,
      bathroom: 0,
      roomType: "BEDROOM",
    },
    {
      id: 2,
      sqft: 250,
      closet: 0,
      bathroom: 0,
      roomType: "Kitchen",
    },
  ],
};
```

   </li>
      </ul>
    </td>
  </tr>
  <tr class="row">
    <td class="cell">Write out 4 selectors that you know of. Using js Create a unordered list with 4 list items. </td>
    <td class="cell cell__solution">
      <ul>
        <li>
  
```js
document.querySelector("h1")
```  
   </li>
        <li>
  
```js
document.querySelectorAll("h1")
```  
   </li>
        <li>
  
```js
document.getElementById("uniqueStr")
```  
   </li>
        <li>
  
```js
document.getElementsByClassName("container")
```  
   </li>
        <li>
  
```js
const ul = document.createElement('ul')
const arrOfLis = new Array(4).map((el) => document.createElement('li'))

for(let li of arrOfLis){
  li.innerText = "listItem";
  ul.append(li);
}

document.body.append(ul);

```
   </li>
      </ul>
    </td>
  </tr>
</table>

