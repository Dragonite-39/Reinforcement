const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport.js');

const app = express();
// need to setup cookie parser and body parser...
// Configure Session Storage
app.use(cookieSession({
  name: 'session-name',
  keys: ['key1', 'key2']
}))

// initialize passport
app.use(passport.initialize());
// enable session support for cookie session above
app.use(passport.session());

// Unprotected Routes

app.get('/', (req, res) => {
  if (req.user) {
    res.locals.user = {id: req.user.id, username: req.user.displayName};
  }
  
  req.user ? res.status(200).json(res.locals.user) : res.status(200).send("hi");
});

// get restaurants by zip code
app.get('/zipcode:zipcode', (req, res) => {
  res.status(200).json(res.locals.restaurants);
});

// get specific restaurants (with specific cuisine and amenities, zipcode)
app.get('/filters:filterInfo', (req, res) => {
  res.status(200).json(res.locals.restaurants);
});

// get all data for specific restaurant (join request for basic data, amenities, and comments for restaurant)

/* Oauth Routes Below */
// message sent on failed authentication
app.get('/failed', (req, res) => {
  //??? update this to a status ???
  res.send('<h1>Log in Failed :(</h1>')
});

// Middleware - Check user is Logged in
const checkUserLoggedIn = (req, res, next) => {
  req.user ? next(): res.sendStatus(401);
}



// Protected Route to add restaurants
app.post('/addrestaurant', checkUserLoggedIn, (req, res) => {
  res.status(200).json(res.locals.restaurants);
});

// Protected Route to edit restaurant
app.post('/editrestaurant', checkUserLoggedIn, (req, res) => {
  res.status(200).json(res.locals.restaurants);
});

// Unprotected Route to get comments
app.get('/getcomments:id', (req, res) => {
  res.status(200).json(res.locals.comments);
});

// Protected Route to add comment, need userId for this?
app.post('/addcomment', checkUserLoggedIn, (req, res) => {
  res.status(200).json(res.locals.comments);
});

// Protected Route to edit comment, only the user that created comment is allowed (check this by userId)

app.post('/editcomment:id', checkUserLoggedIn, (req, res) => {
  res.status(200).json(res.locals.comments);
})

// Protected Route to delete comment, only the user that created comment is allowed

app.post('/deletecomment:id', checkUserLoggedIn, (req, res) => {
  res.status(200).json(res.locals.comments);
})

// Auth Routes
// telling passport what strategy to use, and authenticating request
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { 
  failureRedirect: '/failed' 
}),
  // called on sucessful authentication 
  // req.user contains authenticated user info
  function(req, res) {
    // send the frontEnd 
    res.redirect('/');
  }
);

// Logout
app.get('/logout', (req, res) => {
  // clears session
    req.session = null;
    // passport exposes this function to terminate a user session
    req.logout();
    res.redirect('/');
});

// bad route error handling
app.use((req, res) => res.sendStatus(404));

// global error handling
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => console.log(`App listening on port ${3000} 🚀 🔥`))