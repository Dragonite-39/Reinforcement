require("dotenv").config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL,
    // passReqToCallback: true
  },
  // function(request, accessToken, refreshToken, profile, done) {
  //   User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //     return done(err, user);
  //   });
  // }
  function(accessToken, refreshToken, profile, done) {
    console.log("sucessful login, profile: ", profile);
    return done(null, profile);
  }
));