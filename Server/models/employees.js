let mongoose = require("mongoose");

let employeesTypes = new mongoose.Schema({
    name: String,
    age: Number,
},{ versionKey: false });
let EmployeeModel = mongoose.model("employees", employeesTypes);

module.exports = EmployeeModel;