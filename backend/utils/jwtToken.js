const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
dotenv.config({ path: "../config/config.env" });

const sendToken = (user, statusCode, res) => {

  const token = jwt.sign(
    { userId: user.teacher_id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "24h" }
  );;

  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    token,
    user,
  });
};
module.exports = sendToken;
