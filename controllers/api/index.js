const express = require('express');
const router = express.Router();

const messageRoutes = require("./messageController")
router.use("/messages",messageRoutes)

module.exports = router;