const express = require("express")
const controller = require("../Controller/product")
const Route = express.Router()

Route.get("/", controller.all)
Route.post("/", controller.add)
Route.put("/", controller.edit)
Route.delete("/", controller.delete)
Route.get("/search", controller.search)
Route.get("/:table/:sort", controller.sort)

module.exports = Route