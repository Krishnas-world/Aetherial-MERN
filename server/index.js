const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRoutes = require("./routes/user.route.js");
const auth = require('./routes/auth.route.js')
const app = express();
//! Requirements 
dotenv.config() //allows default env files
app.use(express.json());

//! Set up default mongoose connection
const mongoDB = process.env.MONGO;
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.log("DB Failed", err);
  });

//! Show the routes 
app.use('/server/user', userRoutes);
app.use('/server/auth', auth);

//! Add error middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const mes = err.mes || 'Internal Server error';
  console.error(err); // Log the error to the console
  res.status(statusCode).json({
    success: false,
    statusCode,
    mes
  });
});

app.listen(3000, () => {
  console.log("Server is running at 3000 !!");
});
