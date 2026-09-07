const express = require("express");
const route = express.Router();
const controller = require('../controllers/inventoryController')
const validate = require('../middleware/validation')

route.post("/",validate,controller.createProduct)

module.exports = route;
