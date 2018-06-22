<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.
    * Middleware = the stuff that comes in between the URL request and the callback function that includes req, res. Could be local or global
    * Sessions = authentication that persists even when the server is shut down = we use connect-mongo to do this. There is an expiration date on how long the session lasts until the person has to log in again. 
    * bcrypt = an npm package that allows us to hash things so that their plaintext version is not visible to the outside world. Makes it harder to hack. 
    * JWT - json web tokens. This is also an npm package that allows us to hand the client a token that proves authentication. Hands the responsibility of the token over to the client as oppposed to keeping it on server side. 
2.  What does bcrypt do in order to prevent attacks?
    * hashes important data to make it harder to hack. We write a function on our end to allow this to happen and to dictate how many rounds of hashing we would like the function to do. 

3.  What are the three parts of the JSON Web Token?
    * header (algorithim info goes here)
    * claims(public/private)
    * signature (includes encoded secret plus stuff mentioned above)