const Employee = require('../models/employee.model');

exports.getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, phone, address } = req.body;

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    employee.firstName = firstName;
    employee.lastName = lastName;
    employee.email = email;
    employee.phone = phone;
    employee.address = address;

    const updatedEmployee = await employee.save();
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await employee.remove();
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.postEmployee=async (req, res) => {
    console.log(req.body);
    try {
      const employee = await Employee.create(req.body);
      res.json(employee);
    } catch (error) {
      next(error);
    }
    
  }