let express = require("express");
const { establishConnection } = require("./connection")
const employeeRoute= require('./routes/employees')
const mongoose=require('mongoose')
let app = express();

app.use(express.json());
//connecting to DB
establishConnection('mongodb://0.0.0.0:27017/users')

app.get("/", function (req, res) {
  res.send("Server Running...");
});

// let employeesTypes = new mongoose.Schema({
//     name:String,
//     age:Number
//   });
//   let EmployeeModel = mongoose.model("employees", employeesTypes);
app.use('/employee',employeeRoute)

app.listen(5000, () => {
    console.log("Server Listening on port 5000");
  });