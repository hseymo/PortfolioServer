const express = require('express');
const router = express.Router();
  
  //create message
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
  