var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CompanySchema = new Schema({

    name: {
        type: String
    },
    status: {
        type: String
    },
    contact: {
        type: String
    },
    performance: {
        type: String
    }
});

var Company = mongoose.model("Company", CompanySchema);

module.exports = Company;