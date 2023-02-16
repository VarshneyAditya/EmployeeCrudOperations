const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

router.get('/', employeeController.getEmployees);
router.put('/:id', employeeController.updateEmployee);
router.delete('/:id', employeeController.deleteEmployee);
router.post('/',employeeController.postEmployee)

module.exports = router;
