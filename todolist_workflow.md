WORKFLOW 
goal:
    - create a todo list app that can add our todo item in a server and remove them with a click of a button

dependency used:
    - next: a react framework
    - react: javascript framework that lets us integrate html and css into javascript
    - typescript: superset of javascript, type checker
    - bootstrap: css framework for styling
    - express: used for creating api
    - cors: to allow other url from fetching our api
    - mongodb: to access database
    - mongoose: to connect to database
    - jsonwebtoken: to create a jwt which is a substitute for password, we could use this as an authorization password for user | also keeps user logged in

dev dependency used
    - nodemon: for automatically refreshing the express server so we would see the changes live

file organization
    - frontend
        - components: components used in a specific page
        - components-for-all: components displayed in all pages
        - pages: component for each page
    - backend
        - config: database connection
        - routes: where api are stored
            - index.tsx: collection of all routes
            - sampleRoute: sample route 
    
- create an input field where we could enter a todo item
- add an add button that lets us add whatever the input is from the input field
    - frontend
        - create a function that is called whenever the add button is clicked
            - fetch the post api created
    - backend
        - create a post api 
            - grab the todo item from the input field 
            - connect to database
            - insert the todo item to the database
            - close connection to database
- display the list items
    - frontend
        - create a component for this display items
            - create a function that automatically updates the list item when add and remove button is clicked
                - fetch the get api below
                - store the array of list items in a variable
            - map the variable of list item, return these array of jsx element 
    - backend
        - create a get api that grabs the array of item list in the database
            - connect to database
            - grab the todo items array 
            - return that array as a response
            - close connection to database 
- add a remove button integrated with each of the list items 
    - frontend
        - create a function that is called whenever the add button is clicked
            - fetch the delete api created | pass the id of the item list onto the api as a url parameter, you can grab the id from when the map of this list item is created 
    - backend
        - create a delete api 
            - grab the id of the item list from the url parameter
            - connect to database 
            - there is no way to delete an element thru index in an array in mongodb
                - query the data from the database
                - grab the array of list item and store it in a variable
                - slice thru that array
            - pass the updated array that has been sliced as a new value for item list in the database 
            - now we have an updated array of list items
- create an authentication
    - login
        - email verification
        - forgot password
    - signup

