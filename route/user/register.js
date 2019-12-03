const express = require("express");
const { User } = require("../../model/user");
const registerRouter = express.Router();

function getNewGuest() {
  let account = "eki" + Date.now();
  let password = randomString(12);
  return { account, password, role: 0 };
}

function randomString(len) {
  len = len || 16;
  let $chars = "ichlnosekduaym354927";
  let maxPos = $chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return pwd;
}

registerRouter.post("/", (req, res) => {
  User.create(req.body)
    .then(result => {
      req.session._id = result._id;
      res.redirect("./login");
    })
    .catch(error => res.send(error.message));
});

registerRouter.get("/", (req, res) => {
  User.create(getNewGuest())
    .then(result => {
      req.session._id = result._id;
      res.redirect("./login");
    })
    .catch(error => res.send(error.message));
});

module.exports = registerRouter;
