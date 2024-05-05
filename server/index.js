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
const mongoDB =process.env.MONGO;
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Mongo DB Connected");
  })
  .catch((err) => {
    console.log("DB Failed", err);
  });


app.listen(3000, () => {
  console.log("Server is running at 3000 !!");
});


//! Show the routes 
app.use('/', userRoutes);
app.use('/', auth);

//! Add through middlewares
app.use((err,req,res,next)=>{
  const statusCode = err.statusCode || 500;
  const mes = err.mes || 'Internal Server error'
  res.status(statusCode).json({
    success: false,
    statusCode,
    mes
  })
});