// Models
const User = require("../models/user");

/***************
 * User Signup *
 ***************/
module.exports.postSignup = async (req, res, next) => {
  const email = req.body.email,
    password = req.body.password;

  try {
    console.log(email, password);
    // Create new user object
    const user = new User({
      email: email,
      password: password,
    });

    // Save user in database
    const createUser = await user.save();

    // Send response back to client
    res
      .status(201)
      .json({ message: "Sign in successful", type: "user", createUser });
  } catch (err) {
    console.log(err, next);
  }
};
