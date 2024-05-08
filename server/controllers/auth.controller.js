const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const errorHandler = require("../utils/error.js");
const jwt = require('jsonwebtoken');

const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password || username === '' || email === '' || password === '') {
        throw errorHandler(400, 'All fields are required');
    }
    const hashPass = bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPass
    });

    await newUser.save();
    res.status(200).json({
        message: "User created successfully"
    });
  } catch (error) {
    next(error);
  }
};

const signin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password || email === '' || password === '') {
    next(errorHandler(400, 'All fields are required'));
  }

  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, 'User not found'));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password); // Fixed typo here
    if (!validPassword) {
      return next(errorHandler(400, 'Invalid password'));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;

    res
      .status(200)
      .cookie('access_token', token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};

module.exports = { signup, signin }; // Export both functions together
