const express = require('express');
const passport = require('passport');
const cookieSession = require('cookie-session');
require('./passport');

const app = express();

//Configure Session Storage
app.use(cookieSession({
  name: 'session-name',
  keys: ['key1', 'key2']
}))

//initialize passport
app.use(passport.initialize());
//enable session support for cookie session above
app.use(passport.session());

//Unprotected Routes
app.get('/', (req, res) => {
  // serve index html
  res.send('<h1>Home</h1>')
});

// get restaurants by zip code

// ??? get specific restaurants (with specific food type and amenities) ???

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

//Protected Route to add restaurant
app.get('/profile', checkUserLoggedIn, (req, res) => {
  // res.locals.displayName = req.user.displayName;
  ressend(`<h1>${req.user.displayName}'s Profile Page</h1>`.)
});

//Protected Route to edit restaurant

//Protected Route to add comment

//Protected Route to edit comment

//Protected Route to delete comment

// Auth Routes
// telling passport what strategy to use, and authenticating request
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', passport.authenticate('google', { 
  failureRedirect: '/failed' 
}),
  // called on sucessful authentication 
  // req.user contains authenticated user info
  function(req, res) {
    res.redirect('/profile');
  }
);

// Logout
app.get('/logout', (req, res) => {
  // clears session
    req.session = null;
    // passport exposes this function to terminate a user session
    req.logout();
    res.redirect('/');
})

app.listen(3000, () => console.log(`App listening on port ${3000} 🚀🔥`))