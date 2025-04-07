const express = require("express");
const { authController } = require("../controllers");
const { imageUpload } = require("../middlewares");
const router = express.Router();

router.post(
  "/signup",
  imageUpload.uplaod().single("profilePic"),
  authController.signUp
);
router.post("/signin", authController.signIn);

export default router;
