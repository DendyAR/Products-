const express = require("express");
const { addStudent } = require("../controllers/controllerStudent");
const route = express.Router();

route.post("/student", addStudent)

module.exports=route