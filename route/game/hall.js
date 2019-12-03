const express = require('express');
const hallRouter = express.Router();
const {
  User
} = require('../../model/user');

hallRouter.get('/', async (req, res) => {
  if (req.query.role == '0') {
    res.redirect("/hall.html");
  } else {
    let {
      _id
    } = req.session;
    if (_id) {
      let user = await User.findOne({
        _id
      });
      if (user) {
        res.render('../../views/hall.art', {
          userInfo
        });
      } else {
        res.redirect('/user/register');
      }
    }
  }
})

module.exports = hallRouter;