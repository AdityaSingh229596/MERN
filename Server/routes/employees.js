let express = require('express');
const { getAllEmployees, uploadAllEmployeeData } = require('../controllers/employees');

const router = express.Router()

router.get("/", getAllEmployees);

router.post("/", uploadAllEmployeeData);

module.exports = router;