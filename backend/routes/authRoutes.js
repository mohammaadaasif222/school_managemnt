const experss = require("express");
const router = experss.Router();

const { protect, isAuthenticatedUser } = require("../middlewares/authMiddleware");
const { signin, updateProfile, forgotPassword, resetPassword } = require("../controllers/authController");
router.post("/signin", signin);
router.post("/update",isAuthenticatedUser, updateProfile);
router.post("/forgot-password",forgotPassword);
router.post("/reset-password",resetPassword);
module.exports = router;
