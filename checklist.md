###Setup

- [x] Fork and clone this repository
- [x] Answer questions in Answers.md
- [x] cd into root of project and run `yarn install`
- [x] start mongod/ensure that mongod is running
- [x] double check package.json file to see that the main file is `server.js` and that nodemon is a devDependency and is running `app.js` on start
- [x] you will be testing this project using `POSTMAN` -- so open POSTMAN.

###UserSchema

- [x] implement UserSchema in `/api/models/userModels.js`
- [x] required fields:

    ```
    username = {
        type: String,
        required: true,
        unique: true
    },
    password = {
        type: String,
        minlength: 4,
        required: true
        
    }
    ```

- [x] use `bcrypt` to set up a `pre` hook on our "save" function for the UserSchema
- [x] write a `bcrypt` compare method that will be used to validate passwords later on.

###Create User Functionality

- [x] **TEST** `/api/users` _POST_ to ensure that you can create a user with an encrypted/hashed password. 
- [x] _POST_ user in the database and be sure that the pw is hashed before moving on. 

###Loggin In

- [x] take the compare function from the UserSchema and use it in your POST request to validate the password. If validated, token should display along with user. 

###Get the Jokes!

- [x] Copy token given in post request
- [x] in the header of the GET request, type `Authorization` as the key. Your value will be the `token`. 
- [x] if all works, you should be able to get the list of jokes.  

###STTTTRRRREEETTTCCCCHHHH
- [x] set up `cors` in your server with options:
```
const CorsOptions = {
    credentials: true,
    origin: "http://localhost:3000"
}

server.use(cors(CorOptions));

```

- [x] `create-react-app client` in your root folder
- [x] move all back end stuff to its own folder called `server` (shows separation of concerns)
- [x] cd into `client` and yarn add `react-router react-router-dom axios`.
- [ ] create components:
    * [ ] Register "/register"
    * [x] Sign In  "/login"
    * [x] Jokes    "/jokes" **this one is restricted**
 