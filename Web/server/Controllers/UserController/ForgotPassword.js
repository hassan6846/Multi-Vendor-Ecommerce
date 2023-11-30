const validator = require("validator");
const UserModel = require("../../models/UserModel");
const ForgotPassword = async (req, res, next) => {
  // Requirng Email
  const { email } = req.body;
  try {
    // if EMPTY FIELD
    if (!email) {
      return res.status(404).json({
        Success: false,
        MSG: "Kindly fill all fields",
      });
    }
    // VALIDATE EMAIL
    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Email Format. Please enter a valid email address.",
      });
    }
    // finding user 
    const FindUserByEmail = await UserModel.findOne({ email });
    //  if not find REGISTERED
    if (!FindUserByEmail) {
      return res.status(404).json({
        success: false,
        //Sucess is false but we dont want to brute force a random Email. Because User can check Weather  email is registered or not. on app.
        msg: "Kindly Check Your gmail inbox",

      });
    }
    if (FindUserByEmail) {
      res.status(201).json({
        success: true,
        msg: "Kindly Check Your gmail inbox",
      });
    }
  } catch (err) {
    console.log(err);
    res.json({ ERRORS: err });
  }
  next();
};
module.exports = { ForgotPassword };
