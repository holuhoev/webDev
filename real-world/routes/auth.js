/* 

    * auth.js is to handle JWT authentication process;
    * we have two separate types of authentication: optional and required;
    * ...

*/

var jwt = require('express-jwt');
var secret = require('../config').secret;

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') {
        return req.headers.authorization.split(' ')[1];
    };

    return null;
};

var auth = {
    required: jwt({
        secret: secret,
        
        //attach JWT payload to each request;
        //accesed with req.payload;
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),

    optional: jwt({
        secret: secret,
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

module.exports = auth;