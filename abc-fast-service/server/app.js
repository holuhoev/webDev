var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var routeIndex = require('./routes/index');
var routeClients = require('./routes/clients');

var mongoose = require('mongoose');

const PORT = process.env.PORT || 5000;
var app = express();

// db
var mongoDB = require('./data/db');

mongoose.connect(mongoDB.db);
mongoose.Promise = global.Promise;
var db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error: "));

// CORS
app.use(cors());

// routes
app.use('/', routeIndex);
app.use('/clients', routeClients);

app.listen(PORT, () => console.log(`listening on port ${ PORT }`));