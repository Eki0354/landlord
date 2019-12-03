const express = require("express");
const gameRouter = express.Router();

gameRouter.get("/hall", require("./game/hall"));
gameRouter.get("/room", require("./game/room"));

module.exports = gameRouter;
