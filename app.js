require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.json())


const env = process.env.ENV_NAME;
app.get("/", function (req, res) {
    res.send(`Hello World! Evironnement de  ${env}`);
});

const port = process.env.PORT
app.listen(port, function () {
  console.log(`ToDo API listening on port ${port}`)
})
