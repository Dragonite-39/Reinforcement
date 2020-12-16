require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// translate google data to cookie session format and store on cookie
passport.serializeUser(function(user, done) {
  //??? we can just store user id here user.id???
    done(null, user);
  });
// extract cookie session data
passport.deserializeUser(function(user, done) {
    done(null, user);
});

// configure google passport strategy with google id
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    // passReqToCallback: true
  },

  function(accessToken, refreshToken, profile, done) {
    //??? do we need these ???
    console.log("accessToken:", accessToken, "refreshToken", refreshToken);

    console.log("sucessful login, profile: ", profile);
    // Done is invoked if the credentials are valid 
    // returns user profile
    return done(null, profile);

    // how does error handling work with google passport?
    // return done(null, false, { message: 'Incorrect password.' });
    // return done(err);

  }
));