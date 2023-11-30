const validator = require("validator");
const UserModel = require("../../models/UserModel");
const jwt = require("jsonwebtoken");

// LOGIN
const loginUser = async (req, res,next) => {
  const { email, password } = req.body;

  // Validate email format
  if (!validator.isEmail(email)) {
    return res.status(400).json({
      success: false,
      msg: "Invalid Email Format. enter a valid email address.",
    });
  }

  // Checking Email format
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      msg: "Kindly fill all fields",
    });
  }

  try {
    // FINDING USER BY EMAIL
    const FindUser = await UserModel.findOne({ email }).select("+password");
    if (!FindUser) {
      return res.status(404).json({
        success: false,
        msg: "Invalid Credentials",
      });
    }

    // MATCH PASSWORD HASH
    const isPasswordMatched = await FindUser.comparePassword(password);
    if (!isPasswordMatched) {
      return res.status(400).json({
        success: false,
        msg: "Invalid Credentials",
      });
    }

    const LOGIN_Token = jwt.sign(
      {
        id: FindUser._id,
        name: FindUser.username,
        email: FindUser.email,
        role: FindUser.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    if (isPasswordMatched) {
      return res
        .cookie("AccessToken", LOGIN_Token)
        .status(200)
        .json({
          Success: true,
          Msg: "HELLO FROM INSIDE",
          Token: LOGIN_Token,
        });
    }
  } catch (error) {
    console.error("Login Error:", error);
    return res.status(500).json({
      success: false,
      msg: "Internal server error",
    });
  }
  next()
};

module.exports = { loginUser };
