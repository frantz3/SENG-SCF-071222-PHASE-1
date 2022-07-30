# Full CRUD Requests
## Agenda
- 6:00-6:15pm: Attendance 
- 6:15-7:00pm: Review / Post
- 7:00-7:10pm: Break
- 7:10-8:00pm: Post / Patch / Delete
- 8:00-8:10pm: Break
- 8:10-9:00pm: Canvas / Self study

## SWBAT
- Use a form submission to make a POST request and Create data
- Understand the request object passed to fetch
- Render new Data on the DOM with optimistic rendering

- Implement Update a resource with a Patch request
- Update the DOM pessimistically 
- Delete a resource with a Delete request


## POST (Create)

Posts send data to the server. The information is usually sent from a FORM, creating a resource in the database. A POST is typically for creating new data instead of updating data, like PUT or PATCH.

A POST requires an additional argument, a request/config object. Typically when data gets posted to the database it is added with its own unique key.

```js
// Method: The HTTP method used in this request. Fetch requests are GET by default. Though they can take a request object, it's not necessary. Other requests, such as POST, require the method to identify what type of request it is. 

// Headers: An object that contains additional information for the request. The Content-Type indicates the original media type of the data. 

// Body: The data from the request. Before the request can be sent the data must be converted to JSON.

const config = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
}

fetch(url, config) 

// You can also choose to write it on one line like so:
fetch(url, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
})

```


## Patch
Patch updates/modifies a resource.

```js

// The url in a patch requires an id to identify the resource being updated. 
// The HTTP method is 'PATCH'
// The body can take the full resource or one property of the resource.

// :id is a placeholder for an actual value
fetch(url/:id, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body:JSON.stringify({prop:value})
})
```

## Delete
Delete removes a resource from the server. Unlike Post and Patch it doesn't require headers or a body, though some backend frameworks may require a header. All it needs is to specify the method.

```js
// Delete does require the method and the id of the resource being deleted.
fetch(url/:id, {
    method: 'DELETE',
})

```
