const EmployeeModel = require("../models/employees");

async function getAllEmployees ( req , res) {
    const data=await EmployeeModel.find({})
    res.send({
        status:200,
        data:data
    })
}

async function uploadAllEmployeeData (req ,res){
    const playload = req.body;
    console.log("playload",playload)
    let result = await EmployeeModel.create(playload);
    // res.send("Product successfully Added");
    await res.send(result).status(200);
}

module.exports = {
    getAllEmployees,
    uploadAllEmployeeData
}