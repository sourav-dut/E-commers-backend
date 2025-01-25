const express = require('express');
const { handelUser } = require('../controllers/userCreate.controller');
const router = express.Router();

router.post("/create", handelUser)

module.exports = router