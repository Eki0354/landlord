// 声明和创建服务器对象
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
// 引入session对象
const session = require("express-session");
// 引入模板模块
const template = require('express-art-template');
// 引入扑克牌对象
const {
  PokerCollection,
  PokerItem
} = require("./game/poker");
const pc = new PokerCollection();
// 数据库连接
require("./model/connect");

app.use(
  session({
    secret: "Ichinose Eki",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: "auto",
      maxAge: 24 * 60 * 60 * 1000
    }
  })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// 路由
app.use("/game", require("./route/game"));
app.use("/user", require("./route/user"));

app.listen(80);
console.log("服务器开启成功");