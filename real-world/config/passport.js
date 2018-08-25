var passport = require('passport');
var LocalStrategy = require('passport-local');
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'user[email]',
    passwordField: 'user[password'
    /* 
        We expect a request body from the front-end to be:

        {
            "user": {
                "email": "john@doe.com",
                "password": "john_doe"
            }
        }

    */
}, function(email, password, done) {
    User.findOne({email: email}).then(function(user) {
        if (!user || !user.validatePassword(password)) {
            return done(null, false, {errors: {'Email or password': 'is not correct'}});
        }

        return done(null, user);
    }).catch(done)
}));

