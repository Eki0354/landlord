const express = require("express");
const userRouter = express.Router();

userRouter.use("/register", require("./user/register"));
userRouter.use("/login", require("./user/login"));
userRouter.get("/logout", require("./user/logout"));

module.exports = userRouter;
