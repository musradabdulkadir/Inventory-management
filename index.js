const express = require("express");
const app = express();
const port = 8000;
const routes = require('./routes/inventoryRoutes')
app.use(express.json())

app.use('/product',routes)

app.listen(port, () => {
  console.log(`server running in localhost://${port}`);
});

