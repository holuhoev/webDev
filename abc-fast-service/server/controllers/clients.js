var clientModel = require('../models/client');
var async = require('async');

exports.clientCount = (req, res) => {
    async.parallel({
        user_count: (callback) => {
            clientModel.countDocuments({}, callback);
        }
    }, (err, results) => {
        res.send({ err: err, data: results });
    });
};

exports.clientList = (req, res) => {
    clientModel.find({}, '')
    .populate()
    .exec((err, results) => {
        if (err) { return next(err); };
        res.send({ data: results })
    });
};