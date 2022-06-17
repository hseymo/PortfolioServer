const express = require('express');
const router = express.Router();
const {Message} = require("../../models")

  router.get("/", (req, res) => {
    Message.findAll()
      .then(dbMessages => {
        res.json(dbMessages);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  router.post("/", (req, res) => {
    Message.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    })
      .then(newMessage => {
        res.json(newMessage);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ msg: "an error occured", err });
      });
  });

  module.exports = router;
  