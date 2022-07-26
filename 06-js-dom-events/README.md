# JS Events and Forms

## SWBAT
* Understand how to use JavaScript Events
* Be able to identify a few different event types
* Add content to the dom using Forms
    * Prevent page from reloading
    * Add content to the DOM
* Change the dom with events
    * Remove content with a 'click'
    * Alter content with a mousenter and mouseleave
    * Change to dark mode by pressing '.' key

## JS Events

In Javascript there are event listeners on the page that help make changes to the DOM.

```js
element.addEventListener('type', (event) => {})
```
Above is an generic example of adding an event listener. `addEventListener` can be added to any element, i.e. document, h1, form, input, button, p, etc.
The `type` in the generic example refers to the different types of eventListener you can have. Examples of event listeners can be found here under the 'Event Listings': [link](https://developer.mozilla.org/en-US/docs/Web/Events#event_listing)

Some common examples are 'click' or 'submit'.

The second argument that an `addEventListener` function takes is a callback. This function will run when the event is heard by the browser.

For example when a click event is heard, the callback is run and changes something from the dom. 

In the callback an `event` is automatically passed in to your callback. This event gives you access to a ton of data about the event and the element. Typically we use the event to target the element that triggered the event with: `event.target`.


## Some Different EventListeners
```js
document.addEventListener('click', (event) => {})
document.addEventListener('submit', (event) => {})
document.addEventListener('mouseenter', (event) => {})
document.addEventListener('mouseleave', (event) => {})
document.addEventListener('keydown', (event) => {})

```

## Eventing with a Form

HTML Forms have default functionality when a submit event is detected. A form will automatically trigger a refresh of the page. Below is an example of an HTML form

```html
<form id="poke-form">
    <div>
        <label for="name">Name:</label>
        <input type="text" id="form-name" name="name" />
    </div>
    <div>
        <label for="imgUrl">Image Url:</label>
        <input type="text" id="form-imgUrl" name="imgUrl" />
    </div>
    <div>
        <label for="weight">Weight:</label>
        <input type="text" id="form-weight" name="weight" />
    </div>
    <div>
        <button>Submit</button>
    </div>
</form>
```

This is a typical form you may write in your application. If you want to add event listener to listen for submit you have to target the form. Make sure you target the form and not the button, since what gets submitted is the form.

```js
// Finds the form and saves it to a form variable
const form = document.querySelector('#poke-form')

// When the button is clicked it will trigger a click event. 
// Lets add an event listener to listen for submit event
form.addEventListener('submit', (event) => {
    // To be able to do something within this callback
    // We have to stop the automatic refresh
    event.preventDefault(); // Prevents the default functionality

    // After the prevent default you can now do what you want
    // Typically we would add data from the input fields to the DOM
    // To access the input we can use the event and the names 
    // we gave to the input fields

    event.target // give us the form since the event's target is the form
    event.target.weight // gives us the input field with name='weight'
    event.target.weight.value // gives us the value of that input field

    // NOTE: The when targetting elements `.value` is usually reserved for
    // things like input fields. If you find that you aren't getting a
    // a value back, test to see if you get the intended result using
    // textContent instead
})

```
