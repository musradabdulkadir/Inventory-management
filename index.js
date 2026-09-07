const express = require("express");
const app = express();
const port = 5000;
const routes = require('./routes/inventoryRoutes')

app.use('/product',)

app.listen(port, () => {
  console.log(`server running in localhost://${port}`);
});

