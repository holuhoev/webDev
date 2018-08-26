var clientModel = require('../models/client');
var async = require('async');

exports.clientList = (req, res) => {
    async.parallel({
        user_count: (callback) => {
            clientModel.countDocuments({}, callback);
        }
    }, (err, results) => {
        res.send({ err: err, data: results });
    });
};