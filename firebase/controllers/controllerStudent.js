'use-strict';

const firebase = require("../db");
const student = require("../models/student");
const firestore = firebase.collection(student)
console.log(firestore,"oooo")

const addStudent = async (req, res, next) => {
  try {
    const data = req.body;
    console.log(req.body)
    const student = await firestore.collection("students").doc().set(data);
    res.send("Recorded saved succesfuly");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  addStudent,
};
