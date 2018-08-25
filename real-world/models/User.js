var mongoose = require('mongoose');
var mongooseUniqueValidatorPlugin = require('mongoose-unique-validator');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var secret = require('../config').secret;

var UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            lowercase: true,
            required: [true, "can't be blank"],
            match: [/^[a-zA-Z0-9]+$/, 'that\'s not easy to read'],
            index: true,
            unique: true
        },
        email: {
            type: String,
            required: [true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, 'fill in proper email'],
            index: true,
            unique: true // added with mongooseUniqueValidatorPlugin
        },
        bio: String,
        image: String,
        hash: String,
        salt: String
    },
    {
        timestamps: true
    }
);

UserSchema.methods.encryptPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10e5, 2**9, 'sha512').toString('hex');
};

UserSchema.method.validatePassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10e5, 2**9, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.method.generateJWT = function() {
    var today = new Date();
    var exp = new Data(today);
    exp.setDate(today.getDate() + 60);

    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1e3),
    }, secret);
};

UserSchema.method.toAuthJSON = function() {
    return {
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        image: this.image
    };
};

UserSchema.plugin(mongooseUniqueValidatorPlugin, {message: "sorry, it's already taken, pal"});
mongoose.Model('User', UserSchema);