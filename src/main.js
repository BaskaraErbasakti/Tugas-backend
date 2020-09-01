const express = require("express")
const product = require('./Routes/product')
const Routes = express.Router()

Routes.use("/product", product)



module.exports = Routes