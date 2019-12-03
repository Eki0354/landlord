const express = require('express');
const hallRouter = express.Router();
const {
  User
} = require('../../model/user');

hallRouter.get('/', async (req, res) => {
  let {
    _id
  } = req.session;
  if (_id) {
    let user = await User.findOne({
      _id
    });
    if (user) {
      res.render('./hall.art', {
        userInfo: user
      });
    } else {
      res.redirect('/user/register');
    }
  } else {
    res.redirect('/user/register');
  }
})

module.exports = hallRouter;