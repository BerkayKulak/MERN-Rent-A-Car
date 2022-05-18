const express = require("express");
const router = express.Router();
const car = require("../models/carModel");

router.get("/getallcars", async (req, res) => {
  try {
    const cars = await car.find();
    res.send(cars);
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
