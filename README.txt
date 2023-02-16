Endpoint Descriptions:

1. GET /employees - Retrieve all employees in the database.
2. PUT /employees/:id - Update the details of an employee for the given id.
3. DELETE /employees/:id - Delete an employee record for the given id.
4. POST/employees - Create a new employee record.

We have defined an Employee record with the following fields:

1. firstName: The first name of the employee (String)
2. lastName: The last name of the employee (String)
3. email: The email address of the employee (String)
4. phone: The phone number of the employee (String)
5. address: The address of the employee (String).

To setup project:->
1. Clone this repositry
2. Open the folder
3. Open CLI then initialize npm by typing-> npm init
4. Install npm libaries-> express, momgoose, body-parser
5. open command line type -> npm i express mongoose body-parser
6. You must have mongoDB installed in your computer. We have used MongoDB as a database.
7. Run the project -> node app.js



