let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let CompanySchema = new Schema({

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

let Company = mongoose.model("Company", CompanySchema);

module.exports = Company;