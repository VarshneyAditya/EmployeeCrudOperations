const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const employeeRouter = require('../Employee-Service/Src/routes/employee.routes');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/employee_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((error) => console.log(error));

// Parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Register employee routes
// app.use(express.json());
app.use('/employees', employeeRouter);

// Handle errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
