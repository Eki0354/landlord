const express = require("express");
const loginRouter = express.Router();
const { User } = require("../../model/user");

loginRouter.get("/", (req, res) => {
  if (req.session._id) {
    res.redirect("/game/hall");
  } else {
    res.redirect("/login.html");
  }
});

loginRouter.post("/", async (req, res) => {
  let { account, password } = req.body;
  let user = await User.findOne({ account });
  if (user.password == password) {
    res.send("登录成功");
  } else {
    res.send("登录失败");
  }
});

module.exports = loginRouter;
