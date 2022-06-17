const express = require('express');
const router = express.Router();

const messageRoutes = require("./messageController")
router.use("/messages",userRoutes)

module.exports = router;