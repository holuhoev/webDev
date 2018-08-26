var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var clientSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        zip_from: {
            type: String,
            required: true
        },
        zip_to: {
            type: String,
            required: true
        },
        vehicle_year: {
            type: String,
            required: true
        },
        vehicle_make: {
            type: String,
            required: true
        },
        vehicle_model: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
    },
    {
        collection: "clientlist"
    }
);

clientSchema.virtual('url').get(() => {
    return 'client/' + this._id;
});

var clientModel = mongoose.model('clientModel', clientSchema);

module.exports = clientModel;