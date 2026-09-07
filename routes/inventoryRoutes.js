const express = require("express");
const route = express.Router();
const controller = require('../controllers/inventoryController')

route.post("/",controller.createProduct)

module.exports = route;
